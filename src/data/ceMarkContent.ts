export const CE_HERO_POINTS = [
  'Product-specific regulatory assessment',
  'Testing through an NABL-accredited laboratory',
  'Technical-file and Declaration of Conformity support',
  'Coordination with relevant European Notified Bodies',
] as const

export const CE_INTRO_HELPS = [
  'Whether CE marking applies to your product',
  'Which EU directives or regulations are relevant',
  'Which harmonised standards should be considered',
  'What product testing may be required',
  'Whether manufacturer self-assessment is permitted',
  'Whether a Notified Body must be involved',
  'Which technical documents must be prepared',
  'What the expected timeline and cost may be',
] as const

export const CE_SERVICES = [
  {
    title: 'Regulatory Applicability Assessment',
    text: 'We review your product, intended use, technical characteristics and target market to identify the applicable European regulations, directives and conformity-assessment requirements.',
  },
  {
    title: 'Directives and Standards Identification',
    text: 'Our specialists help identify the relevant European legislation and harmonised EN, IEC or ISO standards that may be used to demonstrate conformity.',
  },
  {
    title: 'Product Testing',
    text: 'Eurotech helps determine and coordinate the testing required for your product. Testing services are provided within the applicable laboratory scope or coordinated with an appropriately qualified external facility.',
    items: [
      'Electrical-safety testing',
      'Electromagnetic compatibility testing',
      'Radio and wireless testing',
      'Mechanical-safety testing',
      'Ingress-protection testing',
      'Chemical and material testing',
      'RoHS testing',
      'Environmental testing',
      'Product-performance testing',
    ],
  },
  {
    title: 'Risk Assessment',
    text: 'We assist with identifying reasonably foreseeable hazards, evaluating product risks and documenting the controls used to eliminate or reduce those risks.',
  },
  {
    title: 'Technical Documentation',
    text: 'Eurotech helps prepare, organise or review the technical evidence needed to demonstrate conformity.',
    items: [
      'Product description and intended use',
      'Design and manufacturing drawings',
      'Product specifications',
      'Bill of materials',
      'Critical component details',
      'Risk assessment',
      'Applicable standards',
      'Test reports',
      'Product labels',
      'User instructions',
      'Manufacturing information',
      'Quality-control records',
      'EU Declaration of Conformity',
    ],
  },
  {
    title: 'CE Conformity Assessment',
    text: 'We help determine and support the appropriate CE conformity-assessment route based on the product and applicable legislation.',
  },
  {
    title: 'Notified Body Coordination',
    text: 'Where European legislation requires an independent assessment, Eurotech assists with application preparation, document submission and coordination with an appropriately designated European Notified Body.',
  },
  {
    title: 'Declaration and Labelling Support',
    text: 'Following completion of the applicable conformity requirements, we assist with reviewing the EU Declaration of Conformity, CE marking, product label, packaging, warnings and accompanying instructions.',
  },
] as const

export const CE_EXPORT_SUPPORT = [
  'CE marking requirements for exporters',
  'European product-compliance assessment',
  'Applicable directives and regulations',
  'Harmonised-standards mapping',
  'Product-testing coordination',
  'Technical-file preparation',
  'Risk-assessment support',
  'EU Declaration of Conformity',
  'Labelling and instruction review',
  'Notified Body coordination, where required',
  'EU Authorised Representative guidance, where applicable',
] as const

export type CeCategory = {
  id: string
  title: string
  text: string
  image: string
  detail: string
  directives: string[]
  services: string[]
  products: string[]
}

export const CE_CATEGORIES: CeCategory[] = [
  {
    id: 'machinery',
    title: 'Machinery and Industrial Equipment',
    text: 'CE certification support for machinery, industrial equipment, production lines, control systems and related safety requirements.',
    image: '/images/ce-cat-machinery.png',
    detail:
      'Eurotech supports machinery manufacturers with applicability mapping under the Machinery Directive 2006/42/EC and the Machinery Regulation (EU) 2023/1230 (applicable from 20 January 2027). Many machines also need Low Voltage, EMC or ATEX assessment when used with electrical systems or in explosive atmospheres. We help confirm whether manufacturer self-assessment is allowed or higher-risk routes require Notified Body involvement.',
    directives: [
      'Machinery Directive 2006/42/EC',
      'Machinery Regulation (EU) 2023/1230 (from 20 Jan 2027)',
      'Low Voltage / EMC where electrically powered',
      'ATEX where used in explosive atmospheres',
    ],
    services: [
      'Machinery risk assessment',
      'Applicable standards identification',
      'Electrical-safety and functional testing coordination',
      'Technical documentation and conformity assessment',
      'Notified Body coordination for higher-risk machinery',
    ],
    products: [
      'Industrial machines and automation systems',
      'Production lines and manufacturing tools',
      'Farming and packaging equipment',
      'Control systems and partly completed machinery',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical and Electronic Products',
    text: 'CE marking support for electrical equipment, electronic products, appliances, laboratory equipment, control panels and industrial electrical systems.',
    image: '/images/ce-cat-electrical.png',
    detail:
      'Electrical products commonly fall under the Low Voltage Directive (2014/35/EU) for equipment rated 50-1000 V AC or 75-1500 V DC, together with the EMC Directive (2014/30/EU) and often RoHS. Connected products may also need the Radio Equipment Directive. Eurotech helps map the correct instruments, coordinate testing within laboratory scope, and prepare the technical evidence behind the EU Declaration of Conformity.',
    directives: [
      'Low Voltage Directive (LVD) 2014/35/EU',
      'EMC Directive 2014/30/EU',
      'RoHS Directive 2011/65/EU',
      'Radio Equipment Directive where wireless',
    ],
    services: [
      'Electrical-safety testing coordination',
      'EMC assessment support',
      'RoHS evidence review',
      'Technical-file and Declaration of Conformity support',
      'Labelling and instruction review',
    ],
    products: [
      'Consumer and industrial electronics',
      'Lighting and control panels',
      'Laboratory and measuring equipment',
      'Industrial electrical systems and appliances',
    ],
  },
  {
    id: 'medical',
    title: 'Medical Devices and IVDs',
    text: 'Regulatory pathway and documentation support for applicable medical devices and in-vitro diagnostic devices under EU MDR or IVDR.',
    image: '/images/ce-cat-medical.png',
    detail:
      'Medical devices and IVDs are governed by MDR (EU) 2017/745 and IVDR (EU) 2017/746. Classification drives the conformity route: most devices above Class I require Notified Body assessment. Eurotech supports pathway mapping, technical documentation readiness, quality-system preparation, testing coordination and engagement with suitably designated European Notified Bodies.',
    directives: [
      'Medical Devices Regulation (MDR) (EU) 2017/745',
      'In Vitro Diagnostic Medical Devices Regulation (IVDR) (EU) 2017/746',
    ],
    services: [
      'Device classification guidance',
      'Technical documentation preparation or review',
      'Quality-system readiness support',
      'Testing coordination',
      'Notified Body application and coordination',
    ],
    products: [
      'Diagnostic tools and instruments',
      'Surgical and procedural devices',
      'Implantables (where in scope)',
      'In-vitro diagnostic devices',
    ],
  },
  {
    id: 'pressure',
    title: 'Pressure Equipment',
    text: 'PED certification and CE marking support for applicable pressure vessels, boilers, piping, assemblies and pressure accessories.',
    image: '/images/ce-cat-pressure.png',
    detail:
      'Pressure equipment falls under the Pressure Equipment Directive (PED) 2014/68/EU and, where relevant, the Simple Pressure Vessels Directive 2014/29/EU. Category determines whether manufacturer assessment is enough or a Notified Body must be involved (typically category II and above). Eurotech helps classify equipment, plan testing and documentation, and coordinate conformity assessment.',
    directives: [
      'Pressure Equipment Directive (PED) 2014/68/EU',
      'Simple Pressure Vessels Directive 2014/29/EU',
    ],
    services: [
      'PED category assessment',
      'Material and design documentation support',
      'Testing and inspection coordination',
      'Technical-file preparation',
      'Notified Body coordination where required',
    ],
    products: [
      'Pressure vessels and boilers',
      'Piping systems and assemblies',
      'Pressure accessories',
      'Simple pressure vessels',
    ],
  },
  {
    id: 'ppe',
    title: 'Personal Protective Equipment',
    text: 'Classification, testing, technical-documentation and conformity-assessment support for products covered by the European PPE Regulation.',
    image: '/images/ce-cat-ppe.png',
    detail:
      'PPE is covered by Regulation (EU) 2016/425. Category I products may follow manufacturer assessment, while Category II and III generally require Notified Body involvement. Eurotech supports classification, applicable standards selection, testing coordination, technical documentation and the conformity route that matches your product risk.',
    directives: ['Personal Protective Equipment Regulation (EU) 2016/425'],
    services: [
      'PPE category classification',
      'Standards and testing plan',
      'Technical documentation support',
      'Conformity assessment route selection',
      'Notified Body coordination for Category II/III',
    ],
    products: [
      'Protective clothing and gloves',
      'Eye, face and hearing protection',
      'Respiratory protective devices',
      'Fall-protection and specialty PPE',
    ],
  },
  {
    id: 'toys',
    title: 'Toys and Children’s Products',
    text: 'Support with applicable toy-safety requirements, risk assessment, chemical or mechanical testing, documentation and CE marking.',
    image: '/images/ce-cat-toys.png',
    detail:
      "Toys placed on the EU market must meet the Toy Safety Directive 2009/48/EC. Requirements typically cover mechanical and physical properties, flammability, chemical restrictions and labelling. Eurotech helps assess applicability, coordinate mechanical and chemical testing, prepare documentation and support CE marking for toys and related children’s products.",
    directives: ['Toy Safety Directive 2009/48/EC'],
    services: [
      'Toy-safety applicability review',
      'Risk assessment support',
      'Mechanical and chemical testing coordination',
      'Labelling and warnings review',
      'Technical documentation and DoC support',
    ],
    products: [
      'Children’s toys and educational toys',
      'Activity and play sets',
      'Playground equipment (where in scope)',
      'Leisure products for children',
    ],
  },
  {
    id: 'construction',
    title: 'Construction Products',
    text: 'CE marking support for applicable construction products under the Construction Products Regulation, including relevant testing, assessment and documentation.',
    image: '/images/ce-cat-construction.png',
    detail:
      'Construction products follow the Construction Products framework — Regulation (EU) No 305/2011, transitioning toward Regulation (EU) 2024/3110. Manufacturers typically prepare a Declaration of Performance with CE marking and declared performance information. Eurotech supports assessment, testing and documentation for products within scope.',
    directives: [
      'Construction Products Regulation (EU) No 305/2011',
      'Construction Products Regulation (EU) 2024/3110 (transition)',
    ],
    services: [
      'CPR applicability and AVCP route guidance',
      'Performance assessment and testing coordination',
      'Declaration of Performance support',
      'CE marking and labelling guidance',
      'Technical documentation review',
    ],
    products: [
      'Building materials and insulation',
      'Doors, windows and facades',
      'Structural components',
      'Fire and safety-related construction products',
    ],
  },
  {
    id: 'radio',
    title: 'Wireless and Radio Equipment',
    text: 'Compliance support for wireless products, connected devices, radio equipment and telecom equipment under applicable Radio Equipment Directive requirements.',
    image: '/images/ce-cat-radio.png',
    detail:
      'Products that intentionally transmit or receive radio waves generally fall under the Radio Equipment Directive (RED) 2014/53/EU. Many connected products also need LVD and EMC evidence. Eurotech helps identify the RED route, coordinate radio and EMC testing, and organise technical documentation for wireless and IoT products entering the EU market.',
    directives: [
      'Radio Equipment Directive (RED) 2014/53/EU',
      'Low Voltage Directive where mains powered',
      'EMC Directive 2014/30/EU',
    ],
    services: [
      'RED applicability mapping',
      'Radio and wireless testing coordination',
      'EMC and electrical-safety alignment',
      'Technical-file preparation',
      'Labelling and user-information review',
    ],
    products: [
      'Wireless and connected devices',
      'IoT and telecom equipment',
      'Radio modules and gateways',
      'Smart appliances with RF interfaces',
    ],
  },
  {
    id: 'lifts',
    title: 'Lifts and Elevators',
    text: 'Support with applicable requirements for lifts, elevators and safety components under relevant European legislation.',
    image: '/images/ce-cat-lifts.png',
    detail:
      'Lifts and many safety components are covered by the Lifts Directive 2014/33/EU. Conformity assessment commonly involves a Notified Body. Eurotech assists with regulatory mapping, technical documentation, testing coordination and Notified Body engagement for lift installations and related safety components.',
    directives: ['Lifts Directive 2014/33/EU'],
    services: [
      'Lifts Directive applicability review',
      'Technical documentation support',
      'Safety-component assessment coordination',
      'Notified Body application support',
      'Declaration and marking guidance',
    ],
    products: [
      'Passenger and goods lifts',
      'Elevator systems',
      'Lift safety components',
      'Related control and protection devices',
    ],
  },
  {
    id: 'atex',
    title: 'ATEX Equipment',
    text: 'Assessment and certification coordination for equipment intended for use in potentially explosive atmospheres.',
    image: '/images/ce-cat-atex.png',
    detail:
      'ATEX Directive 2014/34/EU covers equipment and protective systems for potentially explosive atmospheres. Equipment group and category decide whether Notified Body EU-type examination is mandatory. Eurotech helps determine ATEX applicability, coordinate assessment for gas or dust environments, prepare technical documentation and work with designated Notified Bodies for the required categories.',
    directives: ['ATEX Directive 2014/34/EU'],
    services: [
      'ATEX group and category assessment',
      'Explosion-protection documentation support',
      'Testing and type-examination coordination',
      'Notified Body coordination for Categories 1/2 and M1/M2',
      'Marking and instructions review',
    ],
    products: [
      'Electrical equipment for hazardous areas',
      'Mechanical equipment used in Ex zones',
      'Protective systems and safety devices',
      'Pumps, valves and process equipment for Ex atmospheres',
    ],
  },
]

export const CE_PROCESS = [
  {
    title: 'Share Your Product Information',
    text: 'Provide your product specifications, intended use, technical datasheet, product images and available test reports.',
  },
  {
    title: 'Initial Product Review',
    text: 'Our team reviews your product category, target market and current compliance status.',
  },
  {
    title: 'Regulatory Pathway Assessment',
    text: 'We identify the applicable European legislation, standards, conformity-assessment route and likely testing requirements.',
  },
  {
    title: 'Compliance Gap Analysis',
    text: 'Existing product documentation and test evidence are reviewed to identify missing information, technical gaps or additional requirements.',
  },
  {
    title: 'Product Testing',
    text: 'Applicable tests are completed within the appropriate laboratory scope or coordinated with a suitable external laboratory.',
  },
  {
    title: 'Technical-File Preparation',
    text: 'The required technical documentation is prepared, organised or reviewed to demonstrate product conformity.',
  },
  {
    title: 'Conformity Assessment',
    text: 'The applicable conformity assessment is completed through manufacturer assessment or an appropriately designated Notified Body, depending on the legislation.',
  },
  {
    title: 'Declaration and CE Marking',
    text: 'After successful completion of the applicable requirements, the manufacturer prepares and signs the EU Declaration of Conformity and affixes the CE marking.',
  },
] as const

export const CE_DELIVERABLES = [
  'CE applicability assessment',
  'Applicable EU legislation report',
  'Standards applicability matrix',
  'Compliance gap report',
  'Product-testing plan',
  'Risk-assessment support',
  'Technical-file checklist',
  'Technical-documentation preparation or review',
  'Product-label review',
  'User-manual review',
  'EU Declaration of Conformity support',
  'Notified Body coordination',
  'Project timeline',
  'Product-specific quotation',
  'Regular project-status updates',
] as const

export const CE_WHY = [
  {
    title: 'Operating Since 2008',
    text: 'Eurotech has extensive experience in certification, product compliance, testing and professional training.',
  },
  {
    title: 'Product-Specific Approach',
    text: 'We review the actual product before recommending testing, documentation or a conformity-assessment route.',
  },
  {
    title: 'NABL-Accredited Testing Capability',
    text: 'Applicable testing services are available through Eurotech’s NABL-accredited laboratory within its approved scope.',
  },
  {
    title: 'European Notified Body Network',
    text: 'Where third-party assessment is required, Eurotech coordinates with suitably designated European Notified Bodies according to the applicable product and legislation.',
  },
  {
    title: 'Clear Scope and Quotation',
    text: 'You receive a defined scope explaining the proposed services, responsibilities, deliverables, estimated timeline and cost.',
  },
  {
    title: 'Dedicated Project Coordination',
    text: 'A dedicated point of contact helps coordinate communication between your organisation, testing team and relevant conformity-assessment organisations.',
  },
  {
    title: 'International Presence',
    text: 'With nine offices across five countries, Eurotech supports manufacturers in India and international markets.',
  },
  {
    title: 'Transparent Communication',
    text: 'You receive clear updates about documentation gaps, testing requirements, pending activities and next steps.',
  },
] as const

export const CE_NOTIFIED_BODIES = [
  'ECM, Italy — Notified Body 1282',
  'Eurocert, Greece — Notified Body 1128',
  'Dedal — Notified Body 1922',
  'IEP Turkey — Notified Body 2284',
] as const

export const CE_CLIENTS = [
  {
    name: 'Accupack Engineering',
    text: 'Eurotech supported the assessment of packaging machinery, applicable requirements, technical-file preparation and coordination of the conformity route.',
  },
  {
    name: 'Neat Wind Industries',
    text: 'The project included identifying machinery compliance gaps, strengthening documentation and coordinating the applicable assessment process.',
  },
  {
    name: 'Waves Aircon',
    text: 'Eurotech helped identify applicable product requirements, determine the necessary evidence and organise the technical documentation for air-handling equipment.',
  },
] as const

export const CE_COST_FACTORS = [
  'Product category and intended use',
  'Applicable European legislation',
  'Product risk classification',
  'Number of models or variants',
  'Required laboratory tests',
  'Existing test reports',
  'Technical-documentation readiness',
  'Requirement for Notified Body involvement',
  'Factory assessment requirements',
  'Additional registration or representative services',
] as const

export const CE_QUOTE_INCLUDES = [
  'An initial understanding of the compliance pathway',
  'Likely testing requirements',
  'Technical-documentation requirements',
  'Estimated project timeline',
  'Product-specific quotation',
] as const

export const CE_FAQS = [
  {
    q: 'What is CE certification?',
    a: 'CE marking indicates that a manufacturer declares its product conforms to applicable European legal requirements. The conformity process depends on the product category and applicable EU legislation.',
  },
  {
    q: 'How can I obtain CE certification in India?',
    a: 'Begin with a product assessment to identify the applicable EU requirements, standards, testing needs and conformity-assessment route. Eurotech can support the assessment, testing, documentation and coordination process.',
  },
  {
    q: 'Is CE marking required for products exported from India?',
    a: 'If a product is covered by legislation requiring CE marking and is placed on the EU or EEA market, the applicable requirements must be fulfilled regardless of where the product was manufactured.',
  },
  {
    q: 'Does Eurotech issue CE certificates?',
    a: 'Eurotech provides certification, testing, technical-documentation and conformity-assessment support within its applicable scope. Where European legislation requires an authorised Notified Body, the relevant assessment and certification are undertaken through a suitably designated body.',
  },
  {
    q: 'Is a Notified Body always required?',
    a: 'No. Some products allow manufacturer self-assessment. Other products or higher-risk categories require assessment by an authorised European Notified Body.',
  },
  {
    q: 'What is the CE certification cost in India?',
    a: 'The cost depends on the product, applicable legislation, required testing, existing technical evidence and whether third-party assessment is required. Eurotech provides a quotation after reviewing the product.',
  },
  {
    q: 'How long does the CE marking process take?',
    a: 'The timeline depends on product complexity, document readiness, laboratory-testing requirements and Notified Body availability. An estimated timeline will be provided after the initial assessment.',
  },
  {
    q: 'What documents are required?',
    a: 'Common documents include product specifications, design drawings, component details, risk assessments, test reports, manufacturing information, labels, user instructions and the EU Declaration of Conformity.',
  },
  {
    q: 'Can one CE assessment cover multiple product models?',
    a: 'Related models may sometimes be assessed as a product family when their design, components, intended use and risk profile are sufficiently similar. The models must be reviewed before the scope can be confirmed.',
  },
  {
    q: 'Is CE marking a quality certification?',
    a: 'No. CE marking demonstrates conformity with applicable European legal requirements. It is not a general quality award or product endorsement.',
  },
  {
    q: 'Does CE marking expire?',
    a: 'CE marking does not generally have a single universal expiry period. However, product changes, legislation updates, revised standards or certificate conditions may require the conformity assessment and technical documentation to be reviewed.',
  },
  {
    q: 'Can Eurotech help with an EU Authorised Representative?',
    a: 'Eurotech can assess whether an EU Authorised Representative is required and provide or coordinate the appropriate regulatory support based on the product category.',
  },
] as const
