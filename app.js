/* app.js — MITA 4.0 Interactions */

(function () {
  'use strict';

  // ===================== SITE DISCLAIMER BANNER =====================
  function insertDisclaimer() {
    var message = 'This site is a demo and not final; content is subject to change.';
    var headerEl = document.getElementById('siteHeader');
    if (!headerEl) return;
    var banner = document.createElement('div');
    banner.className = 'site-disclaimer';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Site disclaimer');
    var inner = document.createElement('div');
    inner.className = 'container';
    inner.textContent = message;
    banner.appendChild(inner);
    headerEl.parentNode.insertBefore(banner, headerEl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertDisclaimer);
  } else {
    insertDisclaimer();
  }

  // ===================== DARK MODE TOGGLE =====================
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon();

  if (toggle) {
    toggle.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      updateToggleIcon();
    });
  }

  function updateToggleIcon() {
    if (!toggle) return;
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // ===================== MOBILE NAVIGATION =====================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileNav.classList.add('active');
      mobileNavClose.focus();
    });
    mobileNavClose.addEventListener('click', function () {
      mobileNav.classList.remove('active');
      mobileMenuBtn.focus();
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
      });
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.focus();
      }
    });
  }

  // ===================== HEADER SCROLL STATE =====================
  const header = document.getElementById('siteHeader');
  let lastScrollY = 0;

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = y;
  }, { passive: true });

  // ===================== ROLE TABS =====================
  var roleTabs = document.querySelectorAll('.role-tab');
  var rolePanels = document.querySelectorAll('.role-panel');

  roleTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var role = this.getAttribute('data-role');

      roleTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      rolePanels.forEach(function (p) {
        p.classList.remove('active');
      });

      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      document.getElementById('role-' + role).classList.add('active');
    });
  });

  // ===================== PATH SELECTOR =====================
  var pathBtns = document.querySelectorAll('.path-btn');
  var pathContents = document.querySelectorAll('.path-content');

  pathBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var path = this.getAttribute('data-path');

      pathBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      pathContents.forEach(function (c) {
        c.classList.remove('active');
      });

      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      document.getElementById(path + '-content').classList.add('active');

      // Re-trigger reveal animations for newly visible content
      var newPanel = document.getElementById(path + '-content');
      newPanel.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.remove('visible');
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            if (isElementInView(el)) {
              el.classList.add('visible');
            }
          });
        });
      });
    });
  });

  // ===================== SCROLL REVEAL =====================
  function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 60;
  }

  function checkReveal() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
      if (isElementInView(el)) {
        el.classList.add('visible');
      }
    });
  }

  // Initial check
  checkReveal();

  // On scroll
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        checkReveal();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ===================== FILE DOWNLOADS =====================
  document.querySelectorAll('[data-download]').forEach(function (button) {
    button.addEventListener('click', async function () {
      var url = this.getAttribute('data-download');
      var filename = this.getAttribute('data-filename') || 'download';
      var originalText = this.textContent;

      try {
        this.disabled = true;
        this.textContent = 'Preparing download...';

        var response = await fetch(url);
        if (!response.ok) {
          throw new Error('Download failed');
        }

        var blob = await response.blob();
        var objectUrl = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(objectUrl);

        this.textContent = 'Download ready';
        setTimeout(function () {
          button.textContent = originalText;
          button.disabled = false;
        }, 1200);
      } catch (error) {
        this.textContent = 'Try again';
        setTimeout(function () {
          button.textContent = originalText;
          button.disabled = false;
        }, 1600);
      }
    });
  });

  // ===================== SMOOTH SCROLL for anchors =====================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jump
        history.pushState(null, null, id);
      }
    });
  });

})();
