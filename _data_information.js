var MITA_CRITERIA_INFORMATION = [
  /* ── Information Quality ─────────────────────────────────────────────── */
  {
    id: "IQ-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Quality",
    description: "Data quality rules have not been developed for the information asset.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Does the information used to support this capability have documented data quality rules and measures that are accessible to stakeholders and help ensure that the information is fit for use?",
    dataManagementCapability: "Data Quality"
  },
  {
    id: "IQ-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Quality",
    description: "Data quality rules have been developed and documented for the information asset and is accessible by stakeholders.",
    checklist: [
      "Each Information asset has data quality rules used to validate and assess the quality of the data have been identified and documented",
      "Each Information asset has data quality measures used to assess the quality of the data have been identified and documented"
    ],
    evidence: "Data Rule Catalog, Measure Catalog",
    dimensionQuestion: "Does the information used to support this capability have documented data quality rules and measures that are accessible to stakeholders and help ensure that the information is fit for use?",
    dataManagementCapability: "Data Quality"
  },
  {
    id: "IQ-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Quality",
    description: "Data quality rules have been implemented for the information assets, is applied as the information as it moves across the enterprise, and results produced and made available to key stakeholders.",
    checklist: [
      "Data quality rules have been implemented and is being used to validate that the information assets needed for this capability meets SMA expectations",
      "Data quality assessments have been performed to assess the quality of the information assets needed to support this capability and baseline quality scores known",
      "Target data quality scores, standards and thresholds are established that define the desired data quality scores for the target information assets needed to support this capability."
    ],
    evidence: "Data Quality Report, Measure Catalog",
    dimensionQuestion: "Does the information used to support this capability have documented data quality rules and measures that are accessible to stakeholders and help ensure that the information is fit for use?",
    dataManagementCapability: "Data Quality"
  },
  {
    id: "IQ-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Quality",
    description: "Data quality rules have been aligned to related T-MSIS rules, data anomalies and issues documented and tracked to the related information assets in a central repository. Data quality measures, standards and thresholds have been defined and included on data quality reports that are produced regularly.",
    checklist: [
      "Each information asset that impacts T-MSIS reporting has been identified and documented",
      "Data quality rules for the T-MSIS impacted information assets have been aligned to the corresponding T-MSIS rules",
      "Data quality measures for the T-MSIS impacted information assets have been aligned to the corresponding T-MSIS measures",
      "Data quality reports for the information assets that support the capability are generated on a regular basis",
      "All data quality rules and measures for the information assets that support this capability are stored in the central metadata repository"
    ],
    evidence: "Data Rule Catalog, Data Quality Report, Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Data quality Metadata Repository Change Workflow",
    dimensionQuestion: "Does the information used to support this capability have documented data quality rules and measures that are accessible to stakeholders and help ensure that the information is fit for use?",
    dataManagementCapability: "Data Quality"
  },
  {
    id: "IQ-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Quality",
    description: "The quality of the information asset adheres to Enterprise Data Quality outcomes, processes, procedures, standards, metadata and technology and are regularly assessed for opportunities to improve the quality of the information asset.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Data Quality: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Data Quality"
    ],
    evidence: "Data Quality Process Diagram, Data Quality Standard Operating Procedure, Data Quality Standard Documentation, Data Quality Metadata Requirements, Data Quality MITA Scorecard",
    dimensionQuestion: "Does the information used to support this capability have documented data quality rules and measures that are accessible to stakeholders and help ensure that the information is fit for use?",
    dataManagementCapability: "Data Quality"
  },


  /* ── Information Classification ─────────────────────────────────────── */
  {
    id: "IC-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Classification",
    description: "Data security and privacy requirements have not been documented for the information asset.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the information used to support this capability classified so that stakeholders can understand any security or privacy requirements associated with the access and use of the information?",
    dataManagementCapability: "Data Security & Privacy"
  },
  {
    id: "IC-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Classification",
    description: "Data security, sensitivity and privacy requirements have been documented for the information asset.",
    checklist: [
      "Data security, sensitivity and privacy requirements have been documented for the information asset."
    ],
    evidence: "Data Security and Privacy Requirements",
    dimensionQuestion: "Is the information used to support this capability classified so that stakeholders can understand any security or privacy requirements associated with the access and use of the information?",
    dataManagementCapability: "Data Security & Privacy"
  },
  {
    id: "IC-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Classification",
    description: "Data security, sensitivity and privacy classifications have been defined and applied to the information assets.",
    checklist: [
      "Data security, sensitivity and privacy classifications have been defined and applied to the data elements and data sets within the information assets that support this capability"
    ],
    evidence: "Physical Data Dictionary",
    dimensionQuestion: "Is the information used to support this capability classified so that stakeholders can understand any security or privacy requirements associated with the access and use of the information?",
    dataManagementCapability: "Data Security & Privacy"
  },
  {
    id: "IC-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Classification",
    description: "Data security, sensitivity and privacy classifications are tracked to the impacted policies, standards and information assets in a central metadata repository that is accessible to stakeholders to search, discover and identify impacts of data security, sensitivity and privacy classification modifications.",
    checklist: [
      "All data elements that support this capability have a privacy/sensitivity/security classification assigned in the central metadata repository",
      "All data sets that support this capability have a privacy/sensitivity/security classification assigned in the central metadata repository"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Data Classification Metadata Repository Change Workflow",
    dimensionQuestion: "Is the information used to support this capability classified so that stakeholders can understand any security or privacy requirements associated with the access and use of the information?",
    dataManagementCapability: "Data Security & Privacy"
  },
  {
    id: "IC-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Classification",
    description: "Data security, sensitivity and privacy classifications adhere to Enterprise data security & privacy outcomes, processes, procedures, standards, metadata and technology and are regularly assessed for opportunities to improve the sensitivity, privacy and security of the information asset.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Data security, sensitivity & privacy: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Data security, sensitivity & privacy"
    ],
    evidence: "Data security, sensitivity & privacy Process Diagram, Data security, sensitivity & privacy Standard Operating Procedure, Data security, sensitivity & privacy Standard Documentation, Data security, sensitivity & privacy Metadata Requirements, Data security, sensitivity & privacy MITA Scorecard",
    dimensionQuestion: "Is the information used to support this capability classified so that stakeholders can understand any security or privacy requirements associated with the access and use of the information?",
    dataManagementCapability: "Data Security & Privacy"
  },


  /* ── Information Analysis ────────────────────────────────────────────── */
  {
    id: "IA-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Analysis",
    description: "Information is used sporadically and in response to specific, immediate queries to support decision-making to support this capability.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is there advanced statistical analysis that is performed and used by stakeholders for decision-making to support this capability?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IA-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Analysis",
    description: "The measures and information assets needed to produce the reports for this capability have been identified and documented. The type of data analytics performed to support the capability primarily focuses on descriptive analytics to understand what happened in the past to inform decision-making for the capability.",
    checklist: [
      "Measures specifications that are used or produced to support this capability have been identified and documented",
      "Details about the data elements used to generate the reports have been identified and documented",
      "Details about how the measure is calculated including the data elements used have been identified and documented",
      "Basic Descriptive analytics (count, mean, average) performed to support the capability"
    ],
    evidence: "Report Catalog, Measure Catalog, Measure Specification, Descriptive Analytics Results",
    dimensionQuestion: "Is there advanced statistical analysis that is performed and used by stakeholders for decision-making to support this capability?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IA-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Analysis",
    description: "Measure standards have been established and implemented. The SMA performs diagnostic analytics to uncover the root-cause of events through examination of historical data to understand why things happened to inform decision-making for the capability.",
    checklist: [
      "Measure standards have been identified and documented",
      "Measures align to measure standards and are calculated and provided to stakeholders to support this capability",
      "Diagnostic analytics performed to support the capability"
    ],
    evidence: "Measure Standard, Example Measure Calculation, Prescriptive Analytics Results",
    dimensionQuestion: "Is there advanced statistical analysis that is performed and used by stakeholders for decision-making to support this capability?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IA-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Analysis",
    description: "The measure specifications, statistical models and other information assets are traced to the reports that use them in the central metadata repository. The SMA performs predictive analytics to predict future outcomes through the evaluation of probability estimates to inform decision-making for the capability.",
    checklist: [
      "All reports that support this capability are tracked to the data elements used to create the report in the central metadata repository",
      "All measures that support this capability are tracked to the data elements used to calculate the report in the central metadata repository",
      "Descriptive analytics performed to support the capability"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Report/Measure Metadata Repository Change Workflow, Example Predictive analytical model, Predictive Analytics Results",
    dimensionQuestion: "Is there advanced statistical analysis that is performed and used by stakeholders for decision-making to support this capability?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IA-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Analysis",
    description: "The measures and the analysis performed to support the capability adhere to enterprise business intelligence processes, procedures, standards, metadata and technology and are regularly assessed to improve the quality of the measures and analysis. The SMA performs prescriptive analytics to define actions that will affect outcomes, rather than just predicting the outcomes from actions that have occurred to inform decision-making for the capability.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Business Intelligence & Data Science: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Business Intelligence & Data Science",
      "Descriptive analytics performed to support the capability"
    ],
    evidence: "Business Intelligence & Data Science Process Diagram, Business Intelligence & Data Science Standard Operating Procedure, Business Intelligence & Data Science Standard Documentation, Business Intelligence & Data Science Metadata Requirements, Business Intelligence & Data Science MITA Scorecard, Prescribe Analytics Model, Prescribe Analytics Results",
    dimensionQuestion: "Is there advanced statistical analysis that is performed and used by stakeholders for decision-making to support this capability?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },


  /* ── Information Exchange ────────────────────────────────────────────── */
  {
    id: "IE-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Exchange",
    description: "Information assets for every exchange of information that supports this capability have not been identified and documented.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the movement and transformation of information that is exchanged with trading partners to support this capability tracked and does it adhere to structure data standards?",
    dataManagementCapability: "Data Integration and Interoperability"
  },
  {
    id: "IE-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Exchange",
    description: "Information assets for every exchange of information that supports this capability have been identified and documented.",
    checklist: [
      "Each exchange of information that supports the capability has been identified",
      "The information asset (e.g. File, Data Set, etc.) used in each exchange has been identified and documented"
    ],
    evidence: "Data Catalog, Data Flow Model",
    dimensionQuestion: "Is the movement and transformation of information that is exchanged with trading partners to support this capability tracked and does it adhere to structure data standards?",
    dataManagementCapability: "Data Integration and Interoperability"
  },
  {
    id: "IE-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Exchange",
    description: "Structure data standards that meet the business needs have been identified for every exchange of information that supports this capability and are traced to the applicable information asset.",
    checklist: [
      "Baseline structure data standards have been established for each information asset used to exchange information for this capability",
      "Target structure data standards have been established for each information asset needed to exchange information for this capability"
    ],
    evidence: "Data Catalog, Data Standard Documentation",
    dimensionQuestion: "Is the movement and transformation of information that is exchanged with trading partners to support this capability tracked and does it adhere to structure data standards?",
    dataManagementCapability: "Data Integration and Interoperability"
  },
  {
    id: "IE-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Exchange",
    description: "Detailed documentation about how data moves across the enterprise, including detailed transformation logic, has been documented, is traced to the applicable information assets maintained in a central metadata repository that is accessible to stakeholders to search, discover and identify impacts of data exchange modifications.",
    checklist: [
      "Each information asset used for exchange includes a source to target mapping that shows how data is transformed to integrate the information asset",
      "SMA can track how data moves and is transformed throughout the life of the information assets used to support this capability (e.g. Creation, Storage, etc.)",
      "All data mappings, transformations and lineage for the information assets that impact the capability are tracked in a central metadata repository"
    ],
    evidence: "Data Lineage Diagram, Map Specification, Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Data exchange Metadata Repository Change Workflow",
    dimensionQuestion: "Is the movement and transformation of information that is exchanged with trading partners to support this capability tracked and does it adhere to structure data standards?",
    dataManagementCapability: "Data Integration and Interoperability"
  },
  {
    id: "IE-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Exchange",
    description: "All information exchanges that support this capability align to enterprise data integration and interoperability outcomes, processes, policies, standards and technology and are regularly assessed for opportunities to improve the exchange of information.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Data Integration and Interoperability: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Data Integration and Interoperability"
    ],
    evidence: "Data Integration and Interoperability Process Diagram, Data Integration and Interoperability Standard Operating Procedure, Data Integration and Interoperability Standard Documentation, Data Integration and Interoperability Metadata Requirements, Data Integration and Interoperability MITA Scorecard",
    dimensionQuestion: "Is the movement and transformation of information that is exchanged with trading partners to support this capability tracked and does it adhere to structure data standards?",
    dataManagementCapability: "Data Integration and Interoperability"
  },


  /* ── Information Reporting ───────────────────────────────────────────── */
  {
    id: "IR-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Reporting",
    description: "Reports and measures that are produced to support this capability have not been identified and documented.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Are the reports that are created to support this capability documented and traceable to the specific data used to create each report?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IR-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Reporting",
    description: "Reports and measures that are produced to support this capability have been identified and documented.",
    checklist: [
      "Reports that are used or produced to support this capability have been identified and documented",
      "Measures/Metrics that are used or produced to support this capability have been identified and documented",
      "Details about the data elements used to generate the reports have been identified and documented",
      "Details about how the measure is calculated including the data elements used have been identified and documented"
    ],
    evidence: "Report Catalog, Measure Catalog, Measure Specification",
    dimensionQuestion: "Are the reports that are created to support this capability documented and traceable to the specific data used to create each report?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IR-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Reporting",
    description: "Reports and measure standards have been established and implemented and are delivered to key stakeholders to support this capability.",
    checklist: [
      "Measure standards have been identified and documented",
      "Reports are generated and provided to stakeholders to support the capability",
      "Measures align to measure standards and are calculated and provided to stakeholders to support this capability"
    ],
    evidence: "Measure Standard, Example Report, Example Measure Calculation",
    dimensionQuestion: "Are the reports that are created to support this capability documented and traceable to the specific data used to create each report?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IR-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Reporting",
    description: "Detailed measure specifications and report definitions have been documented and are tracked to the impacted information used to produce the measure and report in a central metadata repository.",
    checklist: [
      "All reports that support this capability are tracked to the data elements used to create the report in the central metadata repository",
      "All measures that support this capability are tracked to the data elements used to calculate the report in the central metadata repository"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Report/Measure Metadata Repository Change Workflow",
    dimensionQuestion: "Are the reports that are created to support this capability documented and traceable to the specific data used to create each report?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },
  {
    id: "IR-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Reporting",
    description: "Reports and measures that are used to support this capability adhere to enterprise business intelligence processes, procedures, standards, metadata and technology and are regularly assessed to improve the quality of the reports and measures.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Business Intelligence: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Business Intelligence"
    ],
    evidence: "Business Intelligence Process Diagram, Business Intelligence Standard Operating Procedure, Business Intelligence Standard Documentation, Business Intelligence Metadata Requirements, Business Intelligence MITA Scorecard",
    dimensionQuestion: "Are the reports that are created to support this capability documented and traceable to the specific data used to create each report?",
    dataManagementCapability: "Business Intelligence & Data Science"
  },


  /* ── Information Content ─────────────────────────────────────────────── */
  {
    id: "ICO-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Content",
    description: "The unstructured data, documents and content, that is used to support this capability have not been identified and documented.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the unstructured data (e.g. paper documents) that supports this capability organized, controlled and categorized so that it can be stored, published and discovered by stakeholders that need it?",
    dataManagementCapability: "Document and Content Management"
  },
  {
    id: "ICO-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Content",
    description: "The unstructured data, documents and content, that is used to support this capability have been identified and documented. Some documents exist that have not been converted to machine-readable and searchable content.",
    checklist: [
      "Unstructured data used to support this capability have been identified",
      "Some of the documents used to support this capability are paper-based and have not been converted to machine-readable content."
    ],
    evidence: "Document and Content Management Standard Documentation",
    dimensionQuestion: "Is the unstructured data (e.g. paper documents) that supports this capability organized, controlled and categorized so that it can be stored, published and discovered by stakeholders that need it?",
    dataManagementCapability: "Document and Content Management"
  },
  {
    id: "ICO-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Content",
    description: "All documents that are produced and/or used to support this capability are converted to machine-readable content and the content adheres to enterprise unstructured data standards.",
    checklist: [
      "All paper-based documents have been converted to machine readable content",
      "Enterprise established unstructured data standards"
    ],
    evidence: "Document and Content Management Standard Documentation, Document and Content Management Metadata Requirements",
    dimensionQuestion: "Is the unstructured data (e.g. paper documents) that supports this capability organized, controlled and categorized so that it can be stored, published and discovered by stakeholders that need it?",
    dataManagementCapability: "Document and Content Management"
  },
  {
    id: "ICO-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Content",
    description: "The unstructured data that supports this capability adheres to enterprise unstructured data standards and is organized, controlled and categorized so that it can be stored, published, discovered and easily accessed by stakeholders.",
    checklist: [
      "Unstructured data is categorized",
      "Unstructured data is searchable",
      "Unstructured data is available to stakeholders with the authority to access it"
    ],
    evidence: "Document and Content Management Process Diagram, Document and Content Management Standard Operating Procedure, Document and Content Management Standard Documentation, Document and Content Management Metadata Requirements",
    dimensionQuestion: "Is the unstructured data (e.g. paper documents) that supports this capability organized, controlled and categorized so that it can be stored, published and discovered by stakeholders that need it?",
    dataManagementCapability: "Document and Content Management"
  },
  {
    id: "ICO-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Content",
    description: "The unstructured data that supports this capability adheres to Enterprise document and content processes, procedures, standards, metadata and technology and are regularly assessed to improve the quality of the unstructured data.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Document and Content Management: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Document and Content Management"
    ],
    evidence: "Document and Content Management Process Diagram, Document and Content Management Standard Operating Procedure, Document and Content Management Standard Documentation, Document and Content Management Metadata Requirements, Document and Content Management MITA Scorecard",
    dimensionQuestion: "Is the unstructured data (e.g. paper documents) that supports this capability organized, controlled and categorized so that it can be stored, published and discovered by stakeholders that need it?",
    dataManagementCapability: "Document and Content Management"
  },


  /* ── Information Metadata ────────────────────────────────────────────── */
  {
    id: "IM-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Metadata",
    description: "Metadata for the information assets that support this capability have not been identified and documented.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the metadata about the information used to support this capability captured, adhere to standards and stored in a central location so that stakeholders can search and discover information that is available for them to use?",
    dataManagementCapability: "Metadata Management"
  },
  {
    id: "IM-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Metadata",
    description: "Some metadata for the information assets are defined and stored locally.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the metadata about the information used to support this capability captured, adhere to standards and stored in a central location so that stakeholders can search and discover information that is available for them to use?",
    dataManagementCapability: "Metadata Management"
  },
  {
    id: "IM-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Metadata",
    description: "All required metadata needed to support the information asset have been identified and is stored in a metadata repository, but it is managed in a silo.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the metadata about the information used to support this capability captured, adhere to standards and stored in a central location so that stakeholders can search and discover information that is available for them to use?",
    dataManagementCapability: "Metadata Management"
  },
  {
    id: "IM-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Metadata",
    description: "Metadata for the information asset adhere to enterprise standards for metadata, Ingestion of Metadata is automatic to the fullest extent possible, stored in a central repository, and is perceived and used as a strategic enterprise asset.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the metadata about the information used to support this capability captured, adhere to standards and stored in a central location so that stakeholders can search and discover information that is available for them to use?",
    dataManagementCapability: "Metadata Management"
  },
  {
    id: "IM-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Metadata",
    description: "Metadata for the information asset adhere to Enterprise Metadata processes, procedures, and technology and are assessed regularly to identify metadata improvement opportunities.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the metadata about the information used to support this capability captured, adhere to standards and stored in a central location so that stakeholders can search and discover information that is available for them to use?",
    dataManagementCapability: "Metadata Management"
  },


  /* ── Information Governance ──────────────────────────────────────────── */
  {
    id: "IG-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Governance",
    description: "Data governance roles and responsibilities have not been established or assigned to individuals for the impacted information assets.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Are there individuals assigned to data governance roles that actively participate in the governance of the information used to support this capability and are there business terms that describe the meaning of the information documented?",
    dataManagementCapability: "Data Governance"
  },
  {
    id: "IG-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Governance",
    description: "Data governance roles and responsibilities for the information asset have been identified and assigned to individuals to fulfill them, and key business terms and acronyms used to support the capability have been identified and documented.",
    checklist: [
      "SMA has established data governance roles such as Data Owner, Data Steward, Data Custodian",
      "SMA has assigned individuals to the data governance roles responsible for the information assets that support this capability",
      "Business terms and acronyms that are used to support this capability have been identified and documented."
    ],
    evidence: "Data Catalog (with assignments), Business Glossary",
    dimensionQuestion: "Are there individuals assigned to data governance roles that actively participate in the governance of the information used to support this capability and are there business terms that describe the meaning of the information documented?",
    dataManagementCapability: "Data Governance"
  },
  {
    id: "IG-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Governance",
    description: "The SMA monitors assignment of individuals assigned to govern the information assets to ensure minimal vacancy, and the assigned individuals actively participate in data the governance of the information assets.",
    checklist: [
      "Vacancy rate for the data governance roles that are assigned to support the information assets for this capability is low",
      "Participation rate of the individuals assigned to the row is high",
      "Individuals assigned to support the information asset participate in data governance meetings, review and approval of business terms and acronyms, information asset changes, etc."
    ],
    evidence: "Information Asset Assignment Vacancy Rate, Information Asset Assignment Participation Rate, Average Information Asset Approval Time",
    dimensionQuestion: "Are there individuals assigned to data governance roles that actively participate in the governance of the information used to support this capability and are there business terms that describe the meaning of the information documented?",
    dataManagementCapability: "Data Governance"
  },
  {
    id: "IG-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Governance",
    description: "The business terms, acronyms and information asset data governance role assignments are stored in a central metadata repository and is accessible to stakeholders to search and discover the information assets that are governed by the SMA.",
    checklist: [
      "Data governance roles assignments and Business glossary maintained in central metadata repository",
      "Business glossary terms mapped to other key metadata in central metadata repository",
      "Key stakeholders have access to the business glossary in central metadata repository",
      "Key stakeholders can search and find business glossary terms and definitions",
      "Key stakeholders can search and find individuals assigned to data governance roles for the information assets for this capability in the central metadata repository"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model",
    dimensionQuestion: "Are there individuals assigned to data governance roles that actively participate in the governance of the information used to support this capability and are there business terms that describe the meaning of the information documented?",
    dataManagementCapability: "Data Governance"
  },
  {
    id: "IG-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Governance",
    description: "Information assets adhere to the enterprise data governance outcomes, processes, policies, standards and technology and are regularly assessed for opportunities to improve the governance of the information asset.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Data Governance: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for data governance"
    ],
    evidence: "Data Governance Process Diagram, Data Governance Standard Operating Procedure, Data Governance Standard Documentation, Data Governance Metadata Requirements, Data Governance MITA Scorecard",
    dimensionQuestion: "Are there individuals assigned to data governance roles that actively participate in the governance of the information used to support this capability and are there business terms that describe the meaning of the information documented?",
    dataManagementCapability: "Data Governance"
  },


  /* ── Information Design ──────────────────────────────────────────────── */
  {
    id: "ID-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Design",
    description: "No or few information assets that support this capability have detailed design documentation.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Are the data dictionaries and other detailed definitions that describe the structure and relationships of the information used to support this capability defined and accessible to stakeholders?",
    dataManagementCapability: "Data Architecture, Modeling, and Design"
  },
  {
    id: "ID-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Design",
    description: "Each information asset needed to support this capability includes detailed design documentation.",
    checklist: [
      "SMA has Physical Data Models for all information assets",
      "SMA has data dictionaries for all information assets",
      "SMA has Matrix linking processes to information",
      "SMA has Matrix linking applications to Applications"
    ],
    evidence: "Physical Data Model, Physical Data Dictionary, Process to Data Matrix, Application to Data Matrix",
    dimensionQuestion: "Are the data dictionaries and other detailed definitions that describe the structure and relationships of the information used to support this capability defined and accessible to stakeholders?",
    dataManagementCapability: "Data Architecture, Modeling, and Design"
  },
  {
    id: "ID-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Design",
    description: "Enterprise Information Reference Models including target data definitions that are needed to support the capability have been identified and aligned to the detailed data definitions and/or models for each information asset.",
    checklist: [
      "SMA established Enterprise Conceptual Data Model",
      "SMA established Enterprise Logical Data Model and Data Dictionary",
      "SMA mapped concepts from Enterprise Conceptual Data Model to Physical Data Dictionary",
      "SMA mapped attributes from Enterprise Logical Data Model to Physical Data Dictionary"
    ],
    evidence: "Enterprise Conceptual Data Model, Enterprise Logical Data Model, Physical Data Dictionary",
    dimensionQuestion: "Are the data dictionaries and other detailed definitions that describe the structure and relationships of the information used to support this capability defined and accessible to stakeholders?",
    dataManagementCapability: "Data Architecture, Modeling, and Design"
  },
  {
    id: "ID-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Design",
    description: "Mappings of Enterprise Information Reference Models to physical data design documentation are maintained in a central enterprise metadata repository that is accessible to stakeholders to search, discover and identify impacts of data design modifications.",
    checklist: [
      "Enterprise Conceptual, Logical Data Model and data dictionary maintained in central metadata repository",
      "Physical Data Dictionary maintained in central metadata repository",
      "Changes to data dictionary trigger notifications to be sent to impacted stakeholders automatically"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Data design Metadata Repository Change Workflow",
    dimensionQuestion: "Are the data dictionaries and other detailed definitions that describe the structure and relationships of the information used to support this capability defined and accessible to stakeholders?",
    dataManagementCapability: "Data Architecture, Modeling, and Design"
  },
  {
    id: "ID-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Design",
    description: "The design of the information asset adheres to Enterprise Data Architecture & Modeling outcomes, processes, procedures, standards, metadata and technology and are regularly assessed to improve the quality of the unstructured data.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Data Architecture, Modeling & Design: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for data architecture, modeling & design"
    ],
    evidence: "Data Architecture, Modeling & Design Process Diagram, Data Architecture, Modeling & Design Standard Operating Procedure, Data Architecture, Modeling & Design Standard Documentation, Data Architecture, Modeling & Design Metadata Requirements, Data Architecture, Modeling & Design MITA Scorecard",
    dimensionQuestion: "Are the data dictionaries and other detailed definitions that describe the structure and relationships of the information used to support this capability defined and accessible to stakeholders?",
    dataManagementCapability: "Data Architecture, Modeling, and Design"
  },


  /* ── Reference Information ───────────────────────────────────────────── */
  {
    id: "RI-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Reference Information",
    description: "Little or no reference data that is used to support the information asset for this capability has been identified and documented, including all code sets and code values.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Does the reference data that is included in the information used to support this capability adhere to standards and is documented, controlled and stored in a location that is accessible to stakeholders?",
    dataManagementCapability: "Reference Data Management"
  },
  {
    id: "RI-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Reference Information",
    description: "The reference data that is used to support this capability has been identified and documented, and aligned to the corresponding data elements.",
    checklist: [
      "The reference data sets used in the information assets that support this capability have been documented.",
      "The reference data values for each reference data set that support this capability have been documented.",
      "The crosswalk of common reference data values across reference data sets used for data transformation have been documented",
      "The reference data sets are aligned to the corresponding data elements in the physical data dictionaries and/or reports and measures"
    ],
    evidence: "Reference Data Catalog",
    dimensionQuestion: "Does the reference data that is included in the information used to support this capability adhere to standards and is documented, controlled and stored in a location that is accessible to stakeholders?",
    dataManagementCapability: "Reference Data Management"
  },
  {
    id: "RI-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Reference Information",
    description: "Target reference data standards that meet the business needs have been identified, adopted and implemented.",
    checklist: [
      "Reference Data Standard has been adopted",
      "Reference data values in existing information assets use the reference data values identified in the reference data standard",
      "Reference data values are mapped from existing reference data values to reference data values in the adopted data standard"
    ],
    evidence: "Data Standard Document, Reference Data Catalog, Reference Data Crosswalk",
    dimensionQuestion: "Does the reference data that is included in the information used to support this capability adhere to standards and is documented, controlled and stored in a location that is accessible to stakeholders?",
    dataManagementCapability: "Reference Data Management"
  },
  {
    id: "RI-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Reference Information",
    description: "Reference data adheres to reference data metadata standards and is traced to the applicable data elements in the data dictionary in a central metadata repository that is accessible to stakeholders to search, discover and identify the impact of reference data modifications.",
    checklist: [
      "Reference data adheres to reference data metadata standards including effective start and end dates for all reference data sets, values and crosswalk",
      "Reference data is traced to the applicable data elements in the data dictionary",
      "Reference data is stored in a central metadata repository"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Reference Data Metadata Repository Change Workflow",
    dimensionQuestion: "Does the reference data that is included in the information used to support this capability adhere to standards and is documented, controlled and stored in a location that is accessible to stakeholders?",
    dataManagementCapability: "Reference Data Management"
  },
  {
    id: "RI-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Reference Information",
    description: "The reference data used to support the information asset adheres to Enterprise Reference Data outcomes, processes, procedures, standards, metadata and technology and are regularly assessed for opportunities to improve the management of reference data for the information asset.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Reference Data Management: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Reference Data Management"
    ],
    evidence: "Reference Data Management Process Diagram, Reference Data Management Standard Operating Procedure, Reference Data Management Standard Documentation, Reference Data Management Metadata Requirements, Reference Data Management MITA Scorecard",
    dimensionQuestion: "Does the reference data that is included in the information used to support this capability adhere to standards and is documented, controlled and stored in a location that is accessible to stakeholders?",
    dataManagementCapability: "Reference Data Management"
  },


  /* ── Master Information ──────────────────────────────────────────────── */
  {
    id: "MI-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Master Information",
    description: "Information assets used to support this capability do not use or contribute to Master Data.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the information used to support this capability mastered so that all entities represented in the information are unique?",
    dataManagementCapability: "Master Data Management"
  },
  {
    id: "MI-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Master Information",
    description: "Master data rules have been developed to ensure that the entities represented in the information assets are unique.",
    checklist: [
      "Data matching rules have been developed that define how to match the entities identified in the information asset to the master record",
      "Data survivorship (merge/link) rules have been developed that define how to merge and or link specific attributes about an entity identified in the information asset to create the master record"
    ],
    evidence: "Data Rule Catalog",
    dimensionQuestion: "Is the information used to support this capability mastered so that all entities represented in the information are unique?",
    dataManagementCapability: "Master Data Management"
  },
  {
    id: "MI-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Master Information",
    description: "Master data rules have been harmonized across the enterprise for common data and implemented within the information assets that support this capability. Entities represented in the information asset are unique entities that do not have duplicate records within the SMA.",
    checklist: [
      "Information asset is transactional and uses master data to uniquely identify the entity that is the subject of the transaction; or Information asset contributes to the definition of master data and is matched and integrated into the master data record",
      "SMA has a defined 'Master Data Record' established for key entities that is stored centrally and available to stakeholders with the authority to access it",
      "SMA continuously monitors the match rate for the information assets and makes modifications to master data rules as needed"
    ],
    evidence: "MDM Match Report",
    dimensionQuestion: "Is the information used to support this capability mastered so that all entities represented in the information are unique?",
    dataManagementCapability: "Master Data Management"
  },
  {
    id: "MI-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Master Information",
    description: "Master data rules are traced to the related information asset in a central metadata repository that is accessible to stakeholders to search, discover and identify the impact of master data rule modifications.",
    checklist: [
      "Master data is traced to the applicable data elements in the data dictionary",
      "Master data rules are stored in a central metadata repository"
    ],
    evidence: "Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Reference Data Metadata Repository Change Workflow",
    dimensionQuestion: "Is the information used to support this capability mastered so that all entities represented in the information are unique?",
    dataManagementCapability: "Master Data Management"
  },
  {
    id: "MI-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Master Information",
    description: "The master data used to support the information asset adheres to Enterprise Master Management outcomes, processes, procedures, standards, metadata and technology and are regularly assessed for opportunities to improve the management of master data for the information asset.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Master Data Management: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Master Data Management"
    ],
    evidence: "Master Data Management Process Diagram, Master Data Management Standard Operating Procedure, Master Data Management Standard Documentation, Master Data Management Metadata Requirements, Master Data Management MITA Scorecard",
    dimensionQuestion: "Is the information used to support this capability mastered so that all entities represented in the information are unique?",
    dataManagementCapability: "Master Data Management"
  },


  /* ── Information Storage ─────────────────────────────────────────────── */
  {
    id: "IS-1",
    level: 1,
    architecture: "information",
    capabilityArea: "Information Storage",
    description: "Data store repositories (e.g. databases) used for persistently storing and managing the information assets used for this capability have not been identified and documented.",
    checklist: [],
    evidence: "",
    dimensionQuestion: "Is the information used for this capability stored in locations that reduces duplication with defined retention and access policies?",
    dataManagementCapability: "Data Storage and Warehousing"
  },
  {
    id: "IS-2",
    level: 2,
    architecture: "information",
    capabilityArea: "Information Storage",
    description: "Data store repositories (e.g. databases) used for persistently storing and managing the information assets used for this capability have been identified and documented.",
    checklist: [
      "The databases and data stores accessed to support the capability have been defined and documented"
    ],
    evidence: "Data Catalog",
    dimensionQuestion: "Is the information used for this capability stored in locations that reduces duplication with defined retention and access policies?",
    dataManagementCapability: "Data Storage and Warehousing"
  },
  {
    id: "IS-3",
    level: 3,
    architecture: "information",
    capabilityArea: "Information Storage",
    description: "The Information assets that are used for this capability are not stored in multiple data store repositories resulting in no or low data duplication.",
    checklist: [
      "The information asset used for this capability are not stored in multiple locations across the enterprise"
    ],
    evidence: "",
    dimensionQuestion: "Is the information used for this capability stored in locations that reduces duplication with defined retention and access policies?",
    dataManagementCapability: "Data Storage and Warehousing"
  },
  {
    id: "IS-4",
    level: 4,
    architecture: "information",
    capabilityArea: "Information Storage",
    description: "The information assets have defined policies for data retention and access that define how long the information must be retained and the roles that have access to the information. The metadata about data storage and policies are stored in a central metadata repository that is accessible to stakeholders to search, discover and identify impacts of data storage modifications.",
    checklist: [
      "The information asset have defined and implemented data retention policies",
      "The information asset have defined and implemented access policies"
    ],
    evidence: "Data Retention Policy, Data Access Policy, Metadata Repository Screenshots, Metamodel, Metadata Repository Operating Model, Data Storage Metadata Repository Change Workflow",
    dimensionQuestion: "Is the information used for this capability stored in locations that reduces duplication with defined retention and access policies?",
    dataManagementCapability: "Data Storage and Warehousing"
  },
  {
    id: "IS-5",
    level: 5,
    architecture: "information",
    capabilityArea: "Information Storage",
    description: "The information assets used to support this capability adhere to enterprise data storage & warehousing outcomes, business processes, role, metadata and technology and are regularly assessed to improve the quality of the information asset.",
    checklist: [
      "SMA has established and applied to the impacted assets Enterprise Data Storage & Warehousing: Outcomes & Metrics, Processes & procedures, Policies & Standards, Metadata requirements, Technology",
      "SMA performs regular SS-A assessments for Data Storage & Warehousing"
    ],
    evidence: "Data Storage & Warehousing Process Diagram, Data Storage & Warehousing Standard Operating Procedure, Data Storage & Warehousing Standard Documentation, Data Storage & Warehousing Metadata Requirements, Data Storage & Warehousing MITA Scorecard",
    dimensionQuestion: "Is the information used for this capability stored in locations that reduces duplication with defined retention and access policies?",
    dataManagementCapability: "Data Storage and Warehousing"
  }
];