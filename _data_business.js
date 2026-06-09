// Business Architecture Maturity Criteria
// 9 capability areas x 5 maturity levels = 45 entries
//
// Capability areas:
//   Member Management             -> MM
//   Provider Management           -> PM
//   Contractor Management         -> CM
//   Operations Management         -> OM
//   Care Management               -> CRM
//   Decision Support & Reporting  -> DSR
//   Program Integrity             -> PI
//   Financial Management          -> FM
//   Plan Management               -> PLM
//
// Maturity progression:
//   Level 1 — Initial:     Ad-hoc, not documented, no formal approach
//   Level 2 — Developing:  Identified and documented, inconsistently applied
//   Level 3 — Defined:     Standardized and consistently implemented
//   Level 4 — Managed:     Measured, managed, and centrally governed
//   Level 5 — Optimizing:  Continuously improved with enterprise standards

var MITA_CRITERIA_BUSINESS = [

  // ─── Member Management ──────────────────────────────────────────────────────

  {
    id: 'BA-MM-1',
    architecture: 'business',
    capabilityArea: 'Member Management',
    level: 1,
    description: 'Member enrollment and eligibility processes are ad-hoc and largely manual. There is no standardized approach to capturing, validating, or maintaining member demographic and eligibility data. Processes vary across programs and staff, and data quality is inconsistent.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, maintaining, and verifying Medicaid member eligibility and demographic information?'
  },
  {
    id: 'BA-MM-2',
    architecture: 'business',
    capabilityArea: 'Member Management',
    level: 2,
    description: 'Core member enrollment and eligibility processes have been identified and documented. Standard data elements for member demographics and eligibility are defined, and staff follow documented procedures, though application is inconsistent across programs and regions.',
    checklist: [
      'Member enrollment and eligibility processes are documented in written procedures',
      'Standard member demographic and eligibility data elements are defined',
      'Staff are trained on documented enrollment procedures'
    ],
    evidence: 'Written enrollment procedures; data element dictionary; training records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, maintaining, and verifying Medicaid member eligibility and demographic information?'
  },
  {
    id: 'BA-MM-3',
    architecture: 'business',
    capabilityArea: 'Member Management',
    level: 3,
    description: 'Member management processes are standardized and consistently implemented across all programs. Automated eligibility verification is in place, and member data is validated against authoritative sources (e.g., SSA, HHS Hub) at enrollment and renewal. A single longitudinal member record is maintained across programs.',
    checklist: [
      'Automated eligibility verification is implemented and used for all new enrollments',
      'Member data is validated against federal data sources (SSA, HHS Hub) at enrollment and renewal',
      'A single longitudinal member record is maintained across Medicaid programs',
      'Standardized processes are applied consistently across all eligibility categories and programs'
    ],
    evidence: 'System documentation for automated eligibility verification; data validation reports; member record architecture documentation',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, maintaining, and verifying Medicaid member eligibility and demographic information?'
  },
  {
    id: 'BA-MM-4',
    architecture: 'business',
    capabilityArea: 'Member Management',
    level: 4,
    description: 'Member management performance is actively measured and managed. Key metrics such as enrollment processing time, eligibility accuracy rates, and renewal completion rates are tracked centrally and used to drive process improvements. Member data quality is monitored against defined thresholds.',
    checklist: [
      'Key member management performance metrics are defined, collected, and reported on a regular cadence',
      'Eligibility accuracy rates are measured and compared against established targets',
      'Enrollment processing time is tracked and benchmarked',
      'Member data quality scores are monitored centrally and deviations trigger corrective action',
      'Performance data informs resource allocation and process improvement priorities'
    ],
    evidence: 'Member management performance dashboard; eligibility accuracy reports; data quality monitoring reports; corrective action records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, maintaining, and verifying Medicaid member eligibility and demographic information?'
  },
  {
    id: 'BA-MM-5',
    architecture: 'business',
    capabilityArea: 'Member Management',
    level: 5,
    description: 'Member management processes are continuously optimized using enterprise standards, real-time data, and member-centered design principles. The state proactively identifies and resolves eligibility gaps, leverages predictive analytics to anticipate renewal needs, and shares best practices with peer states and CMS.',
    checklist: [
      'Continuous improvement cycles are embedded in member management operations with measurable outcome targets',
      'Predictive analytics are used to identify members at risk of losing eligibility and trigger proactive outreach',
      'Member management standards are reviewed and updated on a defined cycle using operational data',
      'Best practices and lessons learned are shared with peer states and CMS',
      'Member experience feedback is systematically collected and used to improve processes'
    ],
    evidence: 'Continuous improvement program documentation; predictive analytics model documentation; cross-state collaboration records; member satisfaction survey results',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, maintaining, and verifying Medicaid member eligibility and demographic information?'
  },

  // ─── Provider Management ─────────────────────────────────────────────────────

  {
    id: 'BA-PM-1',
    architecture: 'business',
    capabilityArea: 'Provider Management',
    level: 1,
    description: 'Provider enrollment and credentialing processes are ad-hoc and paper-based. There is no standardized approach to verifying provider qualifications, maintaining provider records, or tracking enrollment status. Provider data is siloed across programs and systems.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, credentialing, and maintaining Medicaid provider information?'
  },
  {
    id: 'BA-PM-2',
    architecture: 'business',
    capabilityArea: 'Provider Management',
    level: 2,
    description: 'Core provider enrollment and credentialing processes have been identified and documented. Standard data elements for provider demographics, licensure, and enrollment status are defined. Staff follow documented procedures, though application is inconsistent and manual verification steps remain prevalent.',
    checklist: [
      'Provider enrollment and credentialing processes are documented in written procedures',
      'Standard provider data elements (NPI, licensure, specialty, address) are defined',
      'Staff are trained on documented provider enrollment procedures'
    ],
    evidence: 'Written provider enrollment procedures; provider data element dictionary; training records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, credentialing, and maintaining Medicaid provider information?'
  },
  {
    id: 'BA-PM-3',
    architecture: 'business',
    capabilityArea: 'Provider Management',
    level: 3,
    description: 'Provider management processes are standardized and consistently implemented. Automated credentialing verification is in place using primary source verification (e.g., NPPES, OIG exclusion lists, state licensing boards). A single provider record is maintained and shared across programs, reducing duplicate enrollment.',
    checklist: [
      'Automated primary source verification is implemented for all provider enrollments',
      'OIG exclusion list checks are performed at enrollment and on a regular ongoing basis',
      'A single provider record is maintained and shared across Medicaid programs',
      'Provider revalidation processes are standardized and automated where possible'
    ],
    evidence: 'Primary source verification system documentation; OIG check process documentation; provider record architecture documentation; revalidation process documentation',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, credentialing, and maintaining Medicaid provider information?'
  },
  {
    id: 'BA-PM-4',
    architecture: 'business',
    capabilityArea: 'Provider Management',
    level: 4,
    description: 'Provider management performance is actively measured and managed. Metrics such as enrollment processing time, credentialing accuracy, revalidation completion rates, and provider data quality scores are tracked centrally. Performance data drives process improvements and informs risk-based screening decisions.',
    checklist: [
      'Provider enrollment processing time is tracked and benchmarked against targets',
      'Credentialing accuracy and revalidation completion rates are measured and reported',
      'Provider data quality scores are monitored centrally and deviations trigger corrective action',
      'Risk-based screening decisions are informed by provider performance and claims data',
      'Performance metrics are reported to leadership on a regular cadence'
    ],
    evidence: 'Provider management performance dashboard; credentialing accuracy reports; data quality monitoring reports; risk-based screening policy documentation',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, credentialing, and maintaining Medicaid provider information?'
  },
  {
    id: 'BA-PM-5',
    architecture: 'business',
    capabilityArea: 'Provider Management',
    level: 5,
    description: 'Provider management processes are continuously optimized using enterprise standards, real-time data feeds, and advanced analytics. The state participates in national provider data sharing initiatives, leverages FHIR-based provider directories, and proactively identifies and resolves provider data quality issues before they impact claims processing.',
    checklist: [
      'FHIR-based provider directory is implemented and kept current through automated data feeds',
      'National provider data sharing initiatives (e.g., CAQH, DirectTrust) are leveraged to reduce enrollment burden',
      'Predictive analytics identify providers at elevated risk for fraud or quality issues',
      'Provider management standards are reviewed and updated on a defined cycle',
      'Best practices are shared with peer states and CMS'
    ],
    evidence: 'FHIR provider directory documentation; national data sharing agreements; predictive analytics model documentation; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its processes for enrolling, credentialing, and maintaining Medicaid provider information?'
  },

  // ─── Contractor Management ───────────────────────────────────────────────────

  {
    id: 'BA-CM-1',
    architecture: 'business',
    capabilityArea: 'Contractor Management',
    level: 1,
    description: 'Contractor oversight and performance management are ad-hoc and reactive. Contract requirements are not consistently documented, and there is no standardized process for monitoring contractor deliverables, performance, or compliance with Medicaid program requirements.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid contractors and ensuring contract compliance and performance?'
  },
  {
    id: 'BA-CM-2',
    architecture: 'business',
    capabilityArea: 'Contractor Management',
    level: 2,
    description: 'Core contractor management processes have been identified and documented. Contract requirements, deliverable schedules, and performance expectations are defined in written contracts. Staff responsible for contractor oversight are identified, though monitoring practices vary across contracts.',
    checklist: [
      'Contract requirements and deliverable schedules are documented for all major Medicaid contracts',
      'Performance expectations and SLAs are defined in contract language',
      'Staff responsible for contractor oversight are identified and assigned'
    ],
    evidence: 'Contract documents with SLAs; contractor oversight role assignments; deliverable tracking records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid contractors and ensuring contract compliance and performance?'
  },
  {
    id: 'BA-CM-3',
    architecture: 'business',
    capabilityArea: 'Contractor Management',
    level: 3,
    description: 'Contractor management processes are standardized and consistently applied across all Medicaid contracts. A formal contractor performance monitoring program is in place, with regular performance reviews, deliverable acceptance processes, and documented escalation procedures for non-compliance.',
    checklist: [
      'A standardized contractor performance monitoring program is documented and applied to all major contracts',
      'Regular performance reviews are conducted on a defined schedule for all contractors',
      'Deliverable acceptance processes are documented and consistently followed',
      'Escalation procedures for contractor non-compliance are documented and enforced'
    ],
    evidence: 'Contractor performance monitoring program documentation; performance review records; deliverable acceptance records; escalation records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid contractors and ensuring contract compliance and performance?'
  },
  {
    id: 'BA-CM-4',
    architecture: 'business',
    capabilityArea: 'Contractor Management',
    level: 4,
    description: 'Contractor performance is actively measured and managed using a centralized contract management system. Key performance indicators are tracked across all contracts, and performance trends inform contract renewal, remediation, and procurement decisions. Financial and operational risks are proactively identified and managed.',
    checklist: [
      'A centralized contract management system tracks all Medicaid contracts, deliverables, and KPIs',
      'Contractor KPIs are reported to leadership on a regular cadence',
      'Performance trends inform contract renewal and procurement decisions',
      'Financial and operational risks associated with contractors are identified and tracked in a risk register',
      'Corrective action plans are required and tracked for underperforming contractors'
    ],
    evidence: 'Contract management system documentation; contractor KPI reports; risk register; corrective action plan records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid contractors and ensuring contract compliance and performance?'
  },
  {
    id: 'BA-CM-5',
    architecture: 'business',
    capabilityArea: 'Contractor Management',
    level: 5,
    description: 'Contractor management processes are continuously optimized using performance data, industry best practices, and lessons learned. The state employs outcome-based contracting models, uses advanced analytics to predict contractor performance risks, and shares contracting innovations with peer states and CMS.',
    checklist: [
      'Outcome-based contracting models are used for major Medicaid contracts where appropriate',
      'Advanced analytics predict contractor performance risks and inform proactive intervention',
      'Contractor management standards are reviewed and updated on a defined cycle',
      'Contracting innovations and lessons learned are shared with peer states and CMS',
      'Continuous improvement targets for contractor performance are established and tracked'
    ],
    evidence: 'Outcome-based contract examples; predictive analytics documentation; contractor management standards revision history; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid contractors and ensuring contract compliance and performance?'
  },

  // ─── Operations Management ───────────────────────────────────────────────────

  {
    id: 'BA-OM-1',
    architecture: 'business',
    capabilityArea: 'Operations Management',
    level: 1,
    description: 'Medicaid operations are managed reactively with no standardized processes, documented workflows, or formal performance management. Business rules are embedded in legacy systems or known only to individual staff, creating operational fragility and inconsistent outcomes.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its core Medicaid operational processes, including claims processing, prior authorization, and appeals?'
  },
  {
    id: 'BA-OM-2',
    architecture: 'business',
    capabilityArea: 'Operations Management',
    level: 2,
    description: 'Core operational processes such as claims processing, prior authorization, and appeals have been identified and documented. Business rules are captured in written procedures, and staff follow documented workflows, though automation is limited and manual intervention is common.',
    checklist: [
      'Core operational processes (claims, prior auth, appeals) are documented in written procedures',
      'Business rules governing operational decisions are captured in documentation',
      'Staff are trained on documented operational workflows'
    ],
    evidence: 'Written operational procedures; business rules documentation; training records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its core Medicaid operational processes, including claims processing, prior authorization, and appeals?'
  },
  {
    id: 'BA-OM-3',
    architecture: 'business',
    capabilityArea: 'Operations Management',
    level: 3,
    description: 'Operational processes are standardized and consistently implemented. Business rules are externalized from systems and managed in a rules engine, enabling faster updates without system changes. Claims processing, prior authorization, and appeals workflows are automated where feasible, with clear escalation paths for exceptions.',
    checklist: [
      'Business rules are externalized and managed in a configurable rules engine',
      'Claims processing workflows are automated with defined exception handling procedures',
      'Prior authorization processes are standardized and electronic submission is supported',
      'Appeals and grievance workflows are documented, tracked, and resolved within regulatory timeframes'
    ],
    evidence: 'Rules engine documentation; claims processing workflow documentation; prior authorization system documentation; appeals tracking reports',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its core Medicaid operational processes, including claims processing, prior authorization, and appeals?'
  },
  {
    id: 'BA-OM-4',
    architecture: 'business',
    capabilityArea: 'Operations Management',
    level: 4,
    description: 'Operational performance is actively measured and managed. Key metrics such as claims processing timeliness, prior authorization turnaround time, and appeals resolution rates are tracked centrally and reported to leadership. Performance data drives continuous process improvement and resource allocation decisions.',
    checklist: [
      'Claims processing timeliness metrics are tracked and compared against CMS benchmarks',
      'Prior authorization turnaround times are measured and reported against regulatory requirements',
      'Appeals resolution rates and timeliness are tracked centrally',
      'Operational performance dashboards are available to leadership and program managers',
      'Performance data informs staffing, automation, and process improvement priorities'
    ],
    evidence: 'Operational performance dashboard; claims timeliness reports; prior authorization turnaround reports; appeals resolution reports',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its core Medicaid operational processes, including claims processing, prior authorization, and appeals?'
  },
  {
    id: 'BA-OM-5',
    architecture: 'business',
    capabilityArea: 'Operations Management',
    level: 5,
    description: 'Operational processes are continuously optimized using real-time data, advanced analytics, and emerging automation technologies. The state employs AI-assisted prior authorization, predictive claims editing, and automated appeals triage. Operational innovations are documented and shared with peer states and CMS.',
    checklist: [
      'AI-assisted or automated prior authorization is implemented for high-volume, rule-based services',
      'Predictive claims editing reduces improper payments before adjudication',
      'Operational standards are reviewed and updated on a defined cycle using performance data',
      'Operational innovations and lessons learned are shared with peer states and CMS',
      'Continuous improvement targets are established for all core operational processes'
    ],
    evidence: 'AI/automation implementation documentation; predictive claims editing documentation; operational standards revision history; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its core Medicaid operational processes, including claims processing, prior authorization, and appeals?'
  },

  // ─── Care Management ─────────────────────────────────────────────────────────

  {
    id: 'BA-CRM-1',
    architecture: 'business',
    capabilityArea: 'Care Management',
    level: 1,
    description: 'Care management activities are ad-hoc and not systematically coordinated. There is no standardized approach to identifying high-risk members, developing care plans, or coordinating services across providers. Care management data is not captured or shared in a structured way.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, coordinate, and continuously improve its care management processes to improve health outcomes and reduce avoidable utilization for Medicaid members?'
  },
  {
    id: 'BA-CRM-2',
    architecture: 'business',
    capabilityArea: 'Care Management',
    level: 2,
    description: 'Core care management processes have been identified and documented. Criteria for identifying high-risk members are defined, and care management workflows including assessment, care planning, and follow-up are documented. Staff follow written procedures, though coordination across providers and programs is limited.',
    checklist: [
      'Criteria for identifying high-risk members eligible for care management are documented',
      'Care management workflows (assessment, care planning, follow-up) are documented in written procedures',
      'Staff responsible for care management are identified and trained on documented procedures'
    ],
    evidence: 'High-risk identification criteria documentation; care management workflow procedures; training records',
    dimensionQuestion: 'To what extent does the state standardize, coordinate, and continuously improve its care management processes to improve health outcomes and reduce avoidable utilization for Medicaid members?'
  },
  {
    id: 'BA-CRM-3',
    architecture: 'business',
    capabilityArea: 'Care Management',
    level: 3,
    description: 'Care management processes are standardized and consistently implemented. Risk stratification is automated using claims and clinical data. Standardized care plans are developed and shared with members and their care teams. Care coordination is supported by electronic tools that enable information sharing across providers.',
    checklist: [
      'Automated risk stratification is implemented using claims and available clinical data',
      'Standardized care plan templates are used and care plans are documented electronically',
      'Care plans are shared with members and their care teams through electronic means',
      'Care coordination tools support information sharing across providers and programs'
    ],
    evidence: 'Risk stratification algorithm documentation; care plan template; electronic care plan system documentation; care coordination tool documentation',
    dimensionQuestion: 'To what extent does the state standardize, coordinate, and continuously improve its care management processes to improve health outcomes and reduce avoidable utilization for Medicaid members?'
  },
  {
    id: 'BA-CRM-4',
    architecture: 'business',
    capabilityArea: 'Care Management',
    level: 4,
    description: 'Care management performance is actively measured and managed. Outcomes metrics such as hospital readmission rates, emergency department utilization, and care plan completion rates are tracked centrally. Performance data is used to refine risk stratification models, target interventions, and demonstrate program value.',
    checklist: [
      'Care management outcome metrics (readmissions, ED utilization, care plan completion) are tracked and reported',
      'Risk stratification model performance is regularly evaluated and refined using outcome data',
      'Care management program ROI is calculated and reported to leadership',
      'Performance data drives targeting of care management interventions to highest-impact populations',
      'Care management metrics are reported to CMS as required'
    ],
    evidence: 'Care management outcomes dashboard; risk stratification model evaluation reports; ROI analysis; CMS reporting documentation',
    dimensionQuestion: 'To what extent does the state standardize, coordinate, and continuously improve its care management processes to improve health outcomes and reduce avoidable utilization for Medicaid members?'
  },
  {
    id: 'BA-CRM-5',
    architecture: 'business',
    capabilityArea: 'Care Management',
    level: 5,
    description: 'Care management processes are continuously optimized using advanced analytics, social determinants of health data, and whole-person care principles. The state integrates behavioral health, long-term services and supports, and social services into a unified care management model. Innovations are shared with peer states and CMS.',
    checklist: [
      'Social determinants of health data are integrated into risk stratification and care planning',
      'Behavioral health, LTSS, and social services are integrated into a unified care management model',
      'Advanced predictive models identify members likely to benefit from care management before a crisis occurs',
      'Care management standards are reviewed and updated on a defined cycle using outcome data',
      'Care management innovations are shared with peer states and CMS'
    ],
    evidence: 'SDOH data integration documentation; integrated care model documentation; predictive model documentation; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, coordinate, and continuously improve its care management processes to improve health outcomes and reduce avoidable utilization for Medicaid members?'
  },

  // ─── Decision Support & Reporting ────────────────────────────────────────────

  {
    id: 'BA-DSR-1',
    architecture: 'business',
    capabilityArea: 'Decision Support & Reporting',
    level: 1,
    description: 'Reporting and decision support are ad-hoc and reactive. Reports are produced manually in response to specific requests, with no standardized definitions, consistent data sources, or repeatable processes. Decision-makers rely on informal data pulls and institutional knowledge rather than structured analytics.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state provide standardized, timely, and actionable decision support and reporting capabilities to Medicaid program managers, executives, and external stakeholders?'
  },
  {
    id: 'BA-DSR-2',
    architecture: 'business',
    capabilityArea: 'Decision Support & Reporting',
    level: 2,
    description: 'Core reporting requirements have been identified and documented. A report catalog exists listing standard reports, their data sources, and intended audiences. Report definitions and measure specifications are documented, though reports are still largely produced manually and on a scheduled basis.',
    checklist: [
      'A report catalog documenting standard reports, data sources, and audiences is maintained',
      'Report definitions and measure specifications are documented',
      'Standard reports are produced on a defined schedule and distributed to intended audiences'
    ],
    evidence: 'Report catalog; measure specification documents; report distribution records',
    dimensionQuestion: 'To what extent does the state provide standardized, timely, and actionable decision support and reporting capabilities to Medicaid program managers, executives, and external stakeholders?'
  },
  {
    id: 'BA-DSR-3',
    architecture: 'business',
    capabilityArea: 'Decision Support & Reporting',
    level: 3,
    description: 'Decision support and reporting capabilities are standardized and consistently delivered. A business intelligence platform provides self-service reporting to authorized users. Standard dashboards are available for key program areas, and data definitions are consistent across reports. CMS mandatory reporting requirements are met on time.',
    checklist: [
      'A business intelligence platform provides self-service reporting to authorized program staff',
      'Standard dashboards are available for key program areas (enrollment, claims, quality)',
      'Data definitions are consistent and documented across all standard reports',
      'CMS mandatory reporting requirements (T-MSIS, HEDIS, etc.) are met on time and with high data quality'
    ],
    evidence: 'BI platform documentation; dashboard screenshots; data definition documentation; CMS reporting submission records',
    dimensionQuestion: 'To what extent does the state provide standardized, timely, and actionable decision support and reporting capabilities to Medicaid program managers, executives, and external stakeholders?'
  },
  {
    id: 'BA-DSR-4',
    architecture: 'business',
    capabilityArea: 'Decision Support & Reporting',
    level: 4,
    description: 'Decision support capabilities are actively measured and managed. Report usage, data quality, and timeliness metrics are tracked centrally. Advanced analytics including predictive modeling and trend analysis are available to program managers. Data governance ensures consistent, trusted data across all reporting.',
    checklist: [
      'Report usage and adoption metrics are tracked and used to prioritize reporting investments',
      'Data quality metrics for reporting data sources are monitored and reported',
      'Predictive modeling and trend analysis capabilities are available to program managers',
      'A data governance program ensures consistent, trusted data across all reporting',
      'Reporting performance metrics are reviewed by leadership on a regular cadence'
    ],
    evidence: 'Report usage analytics; data quality monitoring reports; predictive model documentation; data governance program documentation',
    dimensionQuestion: 'To what extent does the state provide standardized, timely, and actionable decision support and reporting capabilities to Medicaid program managers, executives, and external stakeholders?'
  },
  {
    id: 'BA-DSR-5',
    architecture: 'business',
    capabilityArea: 'Decision Support & Reporting',
    level: 5,
    description: 'Decision support and reporting capabilities are continuously optimized using advanced analytics, AI-assisted insights, and real-time data. The state provides near-real-time operational dashboards, uses machine learning to surface actionable insights, and contributes to national Medicaid data and analytics initiatives.',
    checklist: [
      'Near-real-time operational dashboards are available for critical program areas',
      'Machine learning models surface actionable insights and anomalies to program managers',
      'Reporting and analytics standards are reviewed and updated on a defined cycle',
      'The state contributes to national Medicaid data and analytics initiatives (e.g., CMS data sharing)',
      'Decision support innovations are shared with peer states and CMS'
    ],
    evidence: 'Real-time dashboard documentation; ML model documentation; analytics standards revision history; national initiative participation records',
    dimensionQuestion: 'To what extent does the state provide standardized, timely, and actionable decision support and reporting capabilities to Medicaid program managers, executives, and external stakeholders?'
  },

  // ─── Program Integrity ───────────────────────────────────────────────────────

  {
    id: 'BA-PI-1',
    architecture: 'business',
    capabilityArea: 'Program Integrity',
    level: 1,
    description: 'Program integrity activities are reactive and uncoordinated. Fraud, waste, and abuse detection relies on individual staff knowledge and manual review of complaints or referrals. There are no standardized processes for identifying, investigating, or resolving program integrity issues.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its program integrity processes to prevent, detect, and address fraud, waste, and abuse in the Medicaid program?'
  },
  {
    id: 'BA-PI-2',
    architecture: 'business',
    capabilityArea: 'Program Integrity',
    level: 2,
    description: 'Core program integrity processes have been identified and documented. Procedures for receiving and triaging fraud referrals, conducting investigations, and coordinating with law enforcement are documented. Staff responsible for program integrity are identified and trained on documented procedures.',
    checklist: [
      'Program integrity processes (referral intake, investigation, resolution) are documented in written procedures',
      'Staff responsible for program integrity are identified and trained',
      'Coordination procedures with MFCU and law enforcement are documented'
    ],
    evidence: 'Written program integrity procedures; staff role assignments; MFCU coordination documentation',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its program integrity processes to prevent, detect, and address fraud, waste, and abuse in the Medicaid program?'
  },
  {
    id: 'BA-PI-3',
    architecture: 'business',
    capabilityArea: 'Program Integrity',
    level: 3,
    description: 'Program integrity processes are standardized and consistently implemented. Automated prepayment and post-payment claims review is in place. A Surveillance and Utilization Review System (SURS) or equivalent is used to identify aberrant billing patterns. Provider screening and exclusion checks are automated.',
    checklist: [
      'Automated prepayment claims editing is implemented to prevent improper payments',
      'A SURS or equivalent system is used to identify aberrant billing patterns',
      'Provider exclusion checks are automated and performed at enrollment and on a regular basis',
      'Program integrity findings are tracked in a case management system',
      'Overpayment recovery processes are standardized and consistently applied'
    ],
    evidence: 'Claims editing system documentation; SURS documentation; exclusion check process documentation; case management system documentation; overpayment recovery records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its program integrity processes to prevent, detect, and address fraud, waste, and abuse in the Medicaid program?'
  },
  {
    id: 'BA-PI-4',
    architecture: 'business',
    capabilityArea: 'Program Integrity',
    level: 4,
    description: 'Program integrity performance is actively measured and managed. Metrics such as improper payment rates, overpayment recovery rates, and investigation resolution times are tracked centrally and reported to leadership. Data analytics are used to prioritize program integrity resources toward highest-risk areas.',
    checklist: [
      'Improper payment rates are measured and reported against CMS targets',
      'Overpayment recovery rates and amounts are tracked and reported',
      'Investigation resolution times are monitored against defined targets',
      'Data analytics prioritize program integrity resources toward highest-risk providers and services',
      'Program integrity performance metrics are reported to CMS as required'
    ],
    evidence: 'Program integrity performance dashboard; improper payment rate reports; overpayment recovery reports; CMS reporting documentation',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its program integrity processes to prevent, detect, and address fraud, waste, and abuse in the Medicaid program?'
  },
  {
    id: 'BA-PI-5',
    architecture: 'business',
    capabilityArea: 'Program Integrity',
    level: 5,
    description: 'Program integrity processes are continuously optimized using advanced analytics, machine learning, and cross-state data sharing. The state employs predictive fraud detection models, participates in national program integrity data sharing initiatives, and proactively identifies emerging fraud schemes before they result in significant improper payments.',
    checklist: [
      'Machine learning models are used to detect fraud patterns and prioritize investigations',
      'The state participates in national program integrity data sharing initiatives (e.g., MMIS data sharing)',
      'Emerging fraud schemes are proactively identified and addressed through policy and system updates',
      'Program integrity standards are reviewed and updated on a defined cycle',
      'Program integrity innovations are shared with peer states and CMS'
    ],
    evidence: 'ML fraud detection model documentation; national data sharing participation records; emerging fraud response documentation; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its program integrity processes to prevent, detect, and address fraud, waste, and abuse in the Medicaid program?'
  },

  // ─── Financial Management ────────────────────────────────────────────────────

  {
    id: 'BA-FM-1',
    architecture: 'business',
    capabilityArea: 'Financial Management',
    level: 1,
    description: 'Financial management processes are ad-hoc and largely manual. Budget development, expenditure tracking, and federal financial reporting rely on spreadsheets and individual staff knowledge. There is no standardized approach to cost allocation, rate setting, or financial forecasting.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its Medicaid financial management processes, including budgeting, cost allocation, rate setting, and federal financial reporting?'
  },
  {
    id: 'BA-FM-2',
    architecture: 'business',
    capabilityArea: 'Financial Management',
    level: 2,
    description: 'Core financial management processes have been identified and documented. Budget development, expenditure tracking, cost allocation methodologies, and federal financial reporting procedures are documented. Staff follow written procedures, though automation is limited and manual reconciliation is common.',
    checklist: [
      'Budget development and expenditure tracking processes are documented in written procedures',
      'Cost allocation methodologies are documented and approved',
      'Federal financial reporting procedures (CMS-64, CMS-37) are documented',
      'Staff responsible for financial management are identified and trained'
    ],
    evidence: 'Written financial management procedures; cost allocation methodology documentation; CMS-64/CMS-37 submission records; training records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its Medicaid financial management processes, including budgeting, cost allocation, rate setting, and federal financial reporting?'
  },
  {
    id: 'BA-FM-3',
    architecture: 'business',
    capabilityArea: 'Financial Management',
    level: 3,
    description: 'Financial management processes are standardized and consistently implemented. A financial management system supports automated expenditure tracking, cost allocation, and federal financial reporting. Rate setting processes are documented and actuarially sound. Budget-to-actual variance analysis is performed regularly.',
    checklist: [
      'A financial management system automates expenditure tracking and cost allocation',
      'Federal financial reports (CMS-64, CMS-37) are generated from the financial management system',
      'Rate setting processes are documented, actuarially sound, and consistently applied',
      'Budget-to-actual variance analysis is performed and reviewed on a regular schedule',
      'Financial reconciliation processes are standardized and documented'
    ],
    evidence: 'Financial management system documentation; CMS-64/CMS-37 submission records; rate setting documentation; variance analysis reports',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its Medicaid financial management processes, including budgeting, cost allocation, rate setting, and federal financial reporting?'
  },
  {
    id: 'BA-FM-4',
    architecture: 'business',
    capabilityArea: 'Financial Management',
    level: 4,
    description: 'Financial management performance is actively measured and managed. Financial KPIs including expenditure trends, federal match rates, and budget variance are tracked centrally and reported to leadership. Financial forecasting models are used to project future expenditures and inform budget requests.',
    checklist: [
      'Financial KPIs (expenditure trends, FMAP utilization, budget variance) are tracked and reported to leadership',
      'Financial forecasting models project future expenditures and inform budget requests',
      'Cost allocation accuracy is monitored and deviations trigger corrective action',
      'Federal financial reporting accuracy and timeliness are measured against targets',
      'Financial performance data informs rate setting and program design decisions'
    ],
    evidence: 'Financial performance dashboard; forecasting model documentation; cost allocation monitoring reports; federal reporting accuracy metrics',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its Medicaid financial management processes, including budgeting, cost allocation, rate setting, and federal financial reporting?'
  },
  {
    id: 'BA-FM-5',
    architecture: 'business',
    capabilityArea: 'Financial Management',
    level: 5,
    description: 'Financial management processes are continuously optimized using advanced analytics, real-time financial data, and value-based payment models. The state employs sophisticated actuarial modeling, participates in value-based care initiatives, and uses financial data to drive program design improvements. Financial innovations are shared with peer states and CMS.',
    checklist: [
      'Value-based payment models are implemented and financial performance under these models is tracked',
      'Advanced actuarial modeling supports rate setting and financial forecasting',
      'Real-time financial dashboards provide up-to-date visibility into program expenditures',
      'Financial management standards are reviewed and updated on a defined cycle',
      'Financial management innovations are shared with peer states and CMS'
    ],
    evidence: 'Value-based payment model documentation; actuarial model documentation; real-time financial dashboard documentation; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, automate, and continuously improve its Medicaid financial management processes, including budgeting, cost allocation, rate setting, and federal financial reporting?'
  },

  // ─── Plan Management ─────────────────────────────────────────────────────────

  {
    id: 'BA-PLM-1',
    architecture: 'business',
    capabilityArea: 'Plan Management',
    level: 1,
    description: 'Managed care plan oversight and contract management are ad-hoc and reactive. There is no standardized approach to monitoring plan performance, reviewing encounter data, or ensuring compliance with contract requirements. Plan data is not systematically collected or analyzed.',
    checklist: [],
    evidence: '',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid managed care plans, including contract oversight, encounter data validation, and quality monitoring?'
  },
  {
    id: 'BA-PLM-2',
    architecture: 'business',
    capabilityArea: 'Plan Management',
    level: 2,
    description: 'Core plan management processes have been identified and documented. Managed care contract requirements, encounter data submission requirements, and plan performance expectations are documented. Staff responsible for plan oversight are identified and follow written procedures, though monitoring is inconsistent.',
    checklist: [
      'Managed care contract requirements and performance expectations are documented',
      'Encounter data submission requirements and timelines are documented',
      'Staff responsible for plan oversight are identified and trained on documented procedures'
    ],
    evidence: 'Managed care contract documents; encounter data submission requirements; plan oversight role assignments; training records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid managed care plans, including contract oversight, encounter data validation, and quality monitoring?'
  },
  {
    id: 'BA-PLM-3',
    architecture: 'business',
    capabilityArea: 'Plan Management',
    level: 3,
    description: 'Plan management processes are standardized and consistently implemented. Encounter data validation is automated, and data quality issues are tracked and resolved with plans. Plan performance is monitored against contract requirements, and quality metrics (HEDIS, CAHPS) are collected and reviewed on a defined schedule.',
    checklist: [
      'Automated encounter data validation is implemented and data quality issues are tracked',
      'Plan performance is monitored against contract requirements on a defined schedule',
      'HEDIS and CAHPS quality metrics are collected, validated, and reviewed',
      'Corrective action processes for underperforming plans are documented and consistently applied',
      'Capitation rate setting processes are documented and actuarially sound'
    ],
    evidence: 'Encounter data validation system documentation; plan performance monitoring reports; HEDIS/CAHPS results; corrective action records; capitation rate documentation',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid managed care plans, including contract oversight, encounter data validation, and quality monitoring?'
  },
  {
    id: 'BA-PLM-4',
    architecture: 'business',
    capabilityArea: 'Plan Management',
    level: 4,
    description: 'Plan management performance is actively measured and managed. Plan performance metrics including encounter data completeness, quality measure scores, and member satisfaction are tracked centrally and compared across plans. Performance data informs contract renewal, incentive payments, and corrective action decisions.',
    checklist: [
      'Plan performance metrics are tracked centrally and compared across plans on a regular cadence',
      'Encounter data completeness and accuracy rates are monitored and reported',
      'Quality measure scores (HEDIS, CAHPS) are trended over time and benchmarked',
      'Performance data informs contract renewal, incentive payment, and corrective action decisions',
      'Plan management performance metrics are reported to CMS as required'
    ],
    evidence: 'Plan performance dashboard; encounter data quality reports; quality measure trend reports; contract renewal decision documentation; CMS reporting records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid managed care plans, including contract oversight, encounter data validation, and quality monitoring?'
  },
  {
    id: 'BA-PLM-5',
    architecture: 'business',
    capabilityArea: 'Plan Management',
    level: 5,
    description: 'Plan management processes are continuously optimized using advanced analytics, value-based contracting models, and real-time performance data. The state employs outcome-based incentive structures, uses predictive analytics to identify plan performance risks early, and shares plan management innovations with peer states and CMS.',
    checklist: [
      'Value-based contracting models with outcome-based incentives are implemented for managed care plans',
      'Predictive analytics identify plan performance risks and trigger proactive intervention',
      'Real-time plan performance dashboards provide up-to-date visibility into key metrics',
      'Plan management standards are reviewed and updated on a defined cycle using performance data',
      'Plan management innovations are shared with peer states and CMS'
    ],
    evidence: 'Value-based contract documentation; predictive analytics model documentation; real-time performance dashboard documentation; cross-state collaboration records',
    dimensionQuestion: 'To what extent does the state standardize, monitor, and continuously improve its processes for managing Medicaid managed care plans, including contract oversight, encounter data validation, and quality monitoring?'
  }

];
