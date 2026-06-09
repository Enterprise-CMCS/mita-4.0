// Technical Architecture Maturity Criteria — Representative Placeholder Entries
// 5 capability areas × 5 maturity levels = 25 entries
//
// Capability areas:
//   Application Architecture  → AA
//   Integration Architecture  → IA
//   Infrastructure Architecture → INFRA
//   Security Architecture     → SA
//   Data Architecture         → DA
//
// Maturity progression:
//   Level 1 — Initial:     Ad-hoc, not documented, no formal approach
//   Level 2 — Developing:  Identified and documented, inconsistently applied
//   Level 3 — Defined:     Standardized and consistently implemented
//   Level 4 — Managed:     Measured, managed, and centrally governed
//   Level 5 — Optimizing:  Continuously improved with enterprise standards

var MITA_CRITERIA_TECHNICAL = [

  // ─── Application Architecture ───────────────────────────────────────────────

  {
    id: 'TA-AA-1',
    architecture: 'technical',
    capabilityArea: 'Application Architecture',
    level: 1,
    description: 'Application architecture is ad-hoc and undocumented. Individual systems are designed and deployed independently without reference to enterprise standards or shared patterns. There is no formal inventory of applications or their interdependencies.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state define, document, and govern the architecture of its Medicaid applications as a coherent enterprise portfolio?'
  },
  {
    id: 'TA-AA-2',
    architecture: 'technical',
    capabilityArea: 'Application Architecture',
    level: 2,
    description: 'The state has identified and documented its major Medicaid applications and their primary functions. An informal application inventory exists, and some architectural patterns have been recognized, but standards are not consistently applied across projects or vendors.',
    checklist: [
      'An application inventory listing major Medicaid systems and their primary functions exists',
      'Key application interdependencies are identified and informally documented',
      'Some architectural patterns (e.g., layered, service-based) are recognized and used on an ad-hoc basis'
    ],
    evidence: 'Application inventory document or spreadsheet; system context diagrams for major applications',
    dimensionQuestion: 'To what extent does the state define, document, and govern the architecture of its Medicaid applications as a coherent enterprise portfolio?'
  },
  {
    id: 'TA-AA-3',
    architecture: 'technical',
    capabilityArea: 'Application Architecture',
    level: 3,
    description: 'The state has adopted and consistently applies a defined application architecture framework aligned with MITA principles. Application designs follow documented standards for modularity, separation of concerns, and API-first design. New projects are required to conform to the enterprise application architecture.',
    checklist: [
      'A formal application architecture framework is documented and approved',
      'All new application development projects reference and conform to the enterprise architecture standards',
      'API-first design principles are applied consistently across Medicaid systems',
      'Application architecture reviews are conducted as part of the project approval process'
    ],
    evidence: 'Enterprise application architecture framework document; architecture review board records; API design standards',
    dimensionQuestion: 'To what extent does the state define, document, and govern the architecture of its Medicaid applications as a coherent enterprise portfolio?'
  },
  {
    id: 'TA-AA-4',
    architecture: 'technical',
    capabilityArea: 'Application Architecture',
    level: 4,
    description: 'Application architecture conformance is actively measured and managed. The state maintains a central application architecture repository, tracks compliance metrics, and uses architecture health indicators to guide investment decisions. Deviations from standards are formally tracked and remediated.',
    checklist: [
      'A central application architecture repository is maintained and kept current',
      'Architecture conformance metrics are collected and reported on a regular cadence',
      'Deviations from architecture standards are logged, reviewed, and assigned remediation plans',
      'Architecture health indicators inform the IT investment and modernization roadmap'
    ],
    evidence: 'Architecture repository; conformance metrics dashboard; deviation log with remediation status',
    dimensionQuestion: 'To what extent does the state define, document, and govern the architecture of its Medicaid applications as a coherent enterprise portfolio?'
  },
  {
    id: 'TA-AA-5',
    architecture: 'technical',
    capabilityArea: 'Application Architecture',
    level: 5,
    description: 'Application architecture is continuously optimized using enterprise standards, industry best practices, and feedback from operational metrics. The state proactively adopts emerging architectural patterns (e.g., microservices, event-driven architecture) where they improve outcomes. Architecture lessons learned are shared across state agencies and with CMS.',
    checklist: [
      'Architecture standards are reviewed and updated on a defined cycle using operational data and industry benchmarks',
      'Emerging architectural patterns are evaluated and piloted in a structured manner',
      'Architecture improvements are driven by measurable outcome targets (e.g., reduced integration latency, improved system availability)',
      'Architecture knowledge and lessons learned are shared with peer states and CMS'
    ],
    evidence: 'Architecture standards revision history; pilot program documentation; outcome metrics tied to architecture decisions; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state define, document, and govern the architecture of its Medicaid applications as a coherent enterprise portfolio?'
  },

  // ─── Integration Architecture ────────────────────────────────────────────────

  {
    id: 'TA-IA-1',
    architecture: 'technical',
    capabilityArea: 'Integration Architecture',
    level: 1,
    description: 'System integrations are implemented on a point-to-point, ad-hoc basis with no documented standards or reusable patterns. Integration logic is embedded within individual applications, creating tight coupling and making changes costly and error-prone.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state use standardized, reusable integration patterns and platforms to connect Medicaid systems and external partners?'
  },
  {
    id: 'TA-IA-2',
    architecture: 'technical',
    capabilityArea: 'Integration Architecture',
    level: 2,
    description: 'The state has identified its major system integration points and documented the data flows between key Medicaid systems. Some reusable integration components or middleware exist, but their use is inconsistent. Integration standards (e.g., HL7, X12) are recognized but not uniformly enforced.',
    checklist: [
      'Major integration points between Medicaid systems are identified and documented',
      'Data flow diagrams exist for key system-to-system exchanges',
      'Some middleware or integration platform components are in use, though not consistently'
    ],
    evidence: 'Integration inventory; data flow diagrams; list of integration standards in use',
    dimensionQuestion: 'To what extent does the state use standardized, reusable integration patterns and platforms to connect Medicaid systems and external partners?'
  },
  {
    id: 'TA-IA-3',
    architecture: 'technical',
    capabilityArea: 'Integration Architecture',
    level: 3,
    description: 'The state has implemented a defined integration architecture using a standardized platform (e.g., an enterprise service bus or API gateway). Integration patterns, data formats, and transport protocols are documented and consistently applied. All new integrations are required to use the approved platform and patterns.',
    checklist: [
      'An enterprise integration platform (ESB, API gateway, or equivalent) is deployed and in active use',
      'Integration patterns, data formats, and transport protocols are documented in an integration standards guide',
      'All new system integrations are required to use the approved platform and conform to documented patterns',
      'Integration testing standards and environments are defined and used for all new integrations'
    ],
    evidence: 'Integration architecture standards guide; integration platform documentation; integration test results',
    dimensionQuestion: 'To what extent does the state use standardized, reusable integration patterns and platforms to connect Medicaid systems and external partners?'
  },
  {
    id: 'TA-IA-4',
    architecture: 'technical',
    capabilityArea: 'Integration Architecture',
    level: 4,
    description: 'Integration performance and reliability are actively monitored and managed. The state maintains a central integration registry, tracks SLA compliance for all integration endpoints, and uses metrics to prioritize integration improvements. Integration failures are detected automatically and trigger defined remediation workflows.',
    checklist: [
      'A central integration registry documents all active integration endpoints and their SLAs',
      'Integration monitoring dashboards track availability, latency, and error rates in real time',
      'SLA compliance is reported regularly and drives prioritization of integration improvements',
      'Automated alerting and remediation workflows are in place for integration failures'
    ],
    evidence: 'Integration registry; monitoring dashboard screenshots; SLA compliance reports; incident response records',
    dimensionQuestion: 'To what extent does the state use standardized, reusable integration patterns and platforms to connect Medicaid systems and external partners?'
  },
  {
    id: 'TA-IA-5',
    architecture: 'technical',
    capabilityArea: 'Integration Architecture',
    level: 5,
    description: 'Integration architecture is continuously optimized based on performance data, emerging standards (e.g., FHIR R4, SMART on FHIR), and evolving interoperability requirements. The state actively participates in national interoperability initiatives and contributes reusable integration assets to the broader Medicaid community.',
    checklist: [
      'Integration standards are reviewed and updated on a defined cycle, incorporating emerging federal and industry standards',
      'FHIR-based APIs are implemented for all applicable data exchanges in alignment with CMS interoperability rules',
      'Reusable integration assets (adapters, mappings, schemas) are catalogued and shared with peer states',
      'Integration architecture improvements are tied to measurable interoperability outcome targets'
    ],
    evidence: 'Integration standards revision history; FHIR API inventory; shared asset catalogue; interoperability outcome metrics',
    dimensionQuestion: 'To what extent does the state use standardized, reusable integration patterns and platforms to connect Medicaid systems and external partners?'
  },

  // ─── Infrastructure Architecture ─────────────────────────────────────────────

  {
    id: 'TA-INFRA-1',
    architecture: 'technical',
    capabilityArea: 'Infrastructure Architecture',
    level: 1,
    description: 'Infrastructure is provisioned and managed on an ad-hoc basis with no documented standards, capacity planning, or formal change management. Environments are inconsistently configured, and there is no separation between development, test, and production environments.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state use standardized, scalable, and resilient infrastructure to host and operate its Medicaid systems?'
  },
  {
    id: 'TA-INFRA-2',
    architecture: 'technical',
    capabilityArea: 'Infrastructure Architecture',
    level: 2,
    description: 'The state has documented its current infrastructure inventory and established basic environment separation (development, test, production). Informal capacity planning occurs, and some infrastructure standards are recognized, but they are not consistently enforced across all systems.',
    checklist: [
      'An infrastructure inventory documenting servers, networks, and hosting environments exists',
      'Separate development, test, and production environments are established for major systems',
      'Basic capacity planning is performed, though informally and inconsistently'
    ],
    evidence: 'Infrastructure inventory; environment topology diagrams; capacity planning records',
    dimensionQuestion: 'To what extent does the state use standardized, scalable, and resilient infrastructure to host and operate its Medicaid systems?'
  },
  {
    id: 'TA-INFRA-3',
    architecture: 'technical',
    capabilityArea: 'Infrastructure Architecture',
    level: 3,
    description: 'The state has adopted a defined infrastructure architecture that includes documented standards for compute, storage, networking, and hosting. Infrastructure-as-code practices are used for environment provisioning. Disaster recovery and business continuity plans are documented and tested on a regular schedule.',
    checklist: [
      'Infrastructure architecture standards are documented and cover compute, storage, networking, and hosting',
      'Infrastructure-as-code (IaC) tools are used to provision and manage environments consistently',
      'Disaster recovery and business continuity plans are documented, approved, and tested at least annually',
      'Change management processes govern all infrastructure changes in production environments'
    ],
    evidence: 'Infrastructure architecture standards; IaC scripts/templates; DR/BCP documentation; DR test results; change management records',
    dimensionQuestion: 'To what extent does the state use standardized, scalable, and resilient infrastructure to host and operate its Medicaid systems?'
  },
  {
    id: 'TA-INFRA-4',
    architecture: 'technical',
    capabilityArea: 'Infrastructure Architecture',
    level: 4,
    description: 'Infrastructure performance, availability, and cost are actively measured and managed. The state uses centralized monitoring and observability tools to track infrastructure health across all Medicaid systems. Capacity and cost optimization decisions are data-driven, and infrastructure KPIs are reported to leadership.',
    checklist: [
      'Centralized monitoring and observability tools provide real-time visibility into infrastructure health across all systems',
      'Infrastructure KPIs (availability, latency, cost per transaction) are tracked and reported to leadership',
      'Capacity planning is data-driven and uses historical utilization trends and forecasting models',
      'Cloud cost optimization reviews are conducted regularly and findings are acted upon'
    ],
    evidence: 'Monitoring dashboard; infrastructure KPI reports; capacity planning models; cost optimization review records',
    dimensionQuestion: 'To what extent does the state use standardized, scalable, and resilient infrastructure to host and operate its Medicaid systems?'
  },
  {
    id: 'TA-INFRA-5',
    architecture: 'technical',
    capabilityArea: 'Infrastructure Architecture',
    level: 5,
    description: 'Infrastructure architecture is continuously optimized using operational data, emerging cloud-native technologies, and evolving federal standards. The state employs auto-scaling, self-healing infrastructure patterns, and continuous compliance monitoring. Infrastructure innovations are documented and shared with peer states.',
    checklist: [
      'Auto-scaling and self-healing infrastructure patterns are implemented for critical Medicaid workloads',
      'Continuous compliance monitoring (e.g., FedRAMP, FISMA) is automated and integrated into the CI/CD pipeline',
      'Infrastructure architecture is reviewed and updated on a defined cycle using operational metrics and emerging technology assessments',
      'Infrastructure innovations and lessons learned are shared with peer states and CMS'
    ],
    evidence: 'Auto-scaling configuration documentation; continuous compliance monitoring reports; architecture review records; cross-state sharing artifacts',
    dimensionQuestion: 'To what extent does the state use standardized, scalable, and resilient infrastructure to host and operate its Medicaid systems?'
  },

  // ─── Security Architecture ───────────────────────────────────────────────────

  {
    id: 'TA-SA-1',
    architecture: 'technical',
    capabilityArea: 'Security Architecture',
    level: 1,
    description: 'Security controls are applied reactively and inconsistently. There is no formal security architecture, and security requirements are not systematically incorporated into system design. Security incidents are addressed on an ad-hoc basis with no documented response procedures.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state embed security and privacy requirements into the architecture and lifecycle of its Medicaid systems?'
  },
  {
    id: 'TA-SA-2',
    architecture: 'technical',
    capabilityArea: 'Security Architecture',
    level: 2,
    description: 'The state has identified its key security requirements and documented baseline security controls for Medicaid systems. A security incident response plan exists, though it may not be regularly tested. Security assessments are conducted for major systems, but the process is not standardized.',
    checklist: [
      'Baseline security controls for Medicaid systems are documented and reference applicable federal standards (NIST, HIPAA)',
      'A security incident response plan is documented and assigned to responsible parties',
      'Security assessments (e.g., vulnerability scans, penetration tests) are conducted for major systems'
    ],
    evidence: 'Security controls baseline document; incident response plan; security assessment reports',
    dimensionQuestion: 'To what extent does the state embed security and privacy requirements into the architecture and lifecycle of its Medicaid systems?'
  },
  {
    id: 'TA-SA-3',
    architecture: 'technical',
    capabilityArea: 'Security Architecture',
    level: 3,
    description: 'The state has implemented a defined security architecture aligned with NIST SP 800-53 and HIPAA requirements. Security-by-design principles are embedded in the system development lifecycle. All Medicaid systems undergo formal security and privacy impact assessments before deployment, and security controls are consistently applied.',
    checklist: [
      'A formal security architecture aligned with NIST SP 800-53 and HIPAA is documented and approved',
      'Security-by-design requirements are embedded in the SDLC and enforced at project initiation',
      'All new systems undergo a formal Security and Privacy Impact Assessment (SPIA) before deployment',
      'Identity and access management (IAM) standards are documented and consistently applied across all systems'
    ],
    evidence: 'Security architecture document; SDLC security requirements; SPIA records; IAM standards and implementation evidence',
    dimensionQuestion: 'To what extent does the state embed security and privacy requirements into the architecture and lifecycle of its Medicaid systems?'
  },
  {
    id: 'TA-SA-4',
    architecture: 'technical',
    capabilityArea: 'Security Architecture',
    level: 4,
    description: 'Security posture is continuously monitored and managed using a centralized security information and event management (SIEM) platform. Security metrics are tracked and reported to leadership. Risk acceptance decisions are formally documented, and the security architecture is updated based on threat intelligence and audit findings.',
    checklist: [
      'A SIEM platform provides centralized, real-time monitoring of security events across all Medicaid systems',
      'Security metrics (e.g., mean time to detect, mean time to respond, open vulnerability count) are tracked and reported to leadership',
      'Risk acceptance decisions are formally documented with business justification and time-bound remediation plans',
      'Threat intelligence feeds are integrated into security monitoring and used to update controls proactively'
    ],
    evidence: 'SIEM platform documentation; security metrics dashboard; risk register with acceptance records; threat intelligence integration evidence',
    dimensionQuestion: 'To what extent does the state embed security and privacy requirements into the architecture and lifecycle of its Medicaid systems?'
  },
  {
    id: 'TA-SA-5',
    architecture: 'technical',
    capabilityArea: 'Security Architecture',
    level: 5,
    description: 'Security architecture is continuously optimized through a formal security improvement program that incorporates threat modeling, red team exercises, and zero-trust principles. The state proactively contributes to national Medicaid security initiatives and shares threat intelligence and security patterns with peer states and CMS.',
    checklist: [
      'Zero-trust architecture principles are implemented and validated across Medicaid systems',
      'Regular red team / purple team exercises are conducted and findings drive architecture improvements',
      'Threat modeling is performed for all significant system changes and new capabilities',
      'Security improvements and threat intelligence are shared with peer states and CMS through formal channels'
    ],
    evidence: 'Zero-trust implementation documentation; red team exercise reports; threat modeling records; cross-state security sharing artifacts',
    dimensionQuestion: 'To what extent does the state embed security and privacy requirements into the architecture and lifecycle of its Medicaid systems?'
  },

  // ─── Data Architecture ───────────────────────────────────────────────────────

  {
    id: 'TA-DA-1',
    architecture: 'technical',
    capabilityArea: 'Data Architecture',
    level: 1,
    description: 'Data architecture is ad-hoc and undocumented. Data models, data dictionaries, and data governance policies do not exist or are confined to individual systems. Data quality issues are addressed reactively, and there is no enterprise view of Medicaid data assets.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state define, govern, and manage its Medicaid data assets as a strategic enterprise resource?'
  },
  {
    id: 'TA-DA-2',
    architecture: 'technical',
    capabilityArea: 'Data Architecture',
    level: 2,
    description: 'The state has identified its major Medicaid data assets and documented data models for key systems. A basic data dictionary exists for critical data elements. Data governance roles are informally assigned, and some data quality rules are defined, though enforcement is inconsistent.',
    checklist: [
      'Major Medicaid data assets are identified and catalogued at a high level',
      'Data models (logical or physical) are documented for key Medicaid systems',
      'A basic data dictionary covering critical data elements is maintained',
      'Data governance roles (e.g., data steward, data owner) are informally assigned'
    ],
    evidence: 'Data asset catalogue; data model documentation; data dictionary; data governance role assignments',
    dimensionQuestion: 'To what extent does the state define, govern, and manage its Medicaid data assets as a strategic enterprise resource?'
  },
  {
    id: 'TA-DA-3',
    architecture: 'technical',
    capabilityArea: 'Data Architecture',
    level: 3,
    description: 'The state has implemented a defined enterprise data architecture aligned with MITA information architecture principles. A formal data governance program is in place with documented policies, stewardship roles, and data quality standards. Master data management practices are applied to key Medicaid data domains (member, provider, claims).',
    checklist: [
      'An enterprise data architecture aligned with MITA information architecture principles is documented and approved',
      'A formal data governance program with documented policies, stewardship roles, and escalation procedures is operational',
      'Data quality standards and validation rules are defined and enforced for all critical data domains',
      'Master data management (MDM) practices are applied to member, provider, and claims data domains'
    ],
    evidence: 'Enterprise data architecture document; data governance program charter and policies; data quality standards; MDM implementation documentation',
    dimensionQuestion: 'To what extent does the state define, govern, and manage its Medicaid data assets as a strategic enterprise resource?'
  },
  {
    id: 'TA-DA-4',
    architecture: 'technical',
    capabilityArea: 'Data Architecture',
    level: 4,
    description: 'Data quality, lineage, and usage are actively measured and managed through a central data governance platform. Data quality metrics are tracked and reported to leadership. A central data catalogue provides enterprise-wide visibility into data assets, their lineage, and their quality scores. Data architecture decisions are informed by usage analytics.',
    checklist: [
      'A central data catalogue provides enterprise-wide visibility into data assets, lineage, and quality scores',
      'Data quality metrics are tracked, trended, and reported to leadership on a regular cadence',
      'Data lineage is documented for all critical data flows from source to consumption',
      'Data architecture decisions are informed by data usage analytics and business value assessments'
    ],
    evidence: 'Data catalogue platform documentation; data quality metrics reports; data lineage documentation; data usage analytics reports',
    dimensionQuestion: 'To what extent does the state define, govern, and manage its Medicaid data assets as a strategic enterprise resource?'
  },
  {
    id: 'TA-DA-5',
    architecture: 'technical',
    capabilityArea: 'Data Architecture',
    level: 5,
    description: 'Data architecture is continuously optimized to support advanced analytics, AI/ML capabilities, and evolving federal data standards (e.g., FHIR, T-MSIS). The state operates a mature data mesh or data lakehouse architecture that enables self-service analytics. Data architecture innovations and governance practices are shared with peer states and CMS.',
    checklist: [
      'Advanced analytics and AI/ML capabilities are supported by a modern data platform (data mesh, data lakehouse, or equivalent)',
      'Data architecture is aligned with and continuously updated to reflect evolving federal standards (FHIR, T-MSIS, CMS data requirements)',
      'Self-service analytics capabilities are available to authorized Medicaid program staff',
      'Data architecture innovations and governance practices are shared with peer states and CMS through formal channels'
    ],
    evidence: 'Modern data platform architecture documentation; federal standards alignment assessment; self-service analytics platform documentation; cross-state sharing artifacts',
    dimensionQuestion: 'To what extent does the state define, govern, and manage its Medicaid data assets as a strategic enterprise resource?'
  }

];
