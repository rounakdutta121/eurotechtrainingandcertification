export type CeIndustry = {
  id: string
  title: string
  detail: string
  keyProducts: string[]
  services: string[]
  directives: string[]
}

/** Sourced from https://eurotechworld.net/ce-main/ industry detail content */
export const CE_INDUSTRIES: CeIndustry[] = [
  {
    id: 'electrical',
    title: 'Electrical & Electronics',
    detail: 'Consumer electronics, industrial controls, lighting equipment',
    keyProducts: [
      'Consumer electronics',
      'Industrial controls',
      'Lighting equipment',
      'Appliances',
    ],
    services: [
      'Directive Identification (LVD, EMC, RoHS)',
      'Technical documentation and compliance file preparation',
      'Product testing (electrical safety, electromagnetic compatibility)',
      'Declaration of Conformity drafting',
      'Affixing guidance for CE mark and packaging',
      'End-to-end advisory throughout the process',
    ],
    directives: [
      'Low Voltage Directive (LVD)',
      'EMC Directive',
      'RoHS Directive',
    ],
  },
  {
    id: 'medical',
    title: 'Medical Devices',
    detail: 'Diagnostic tools, surgical instruments, implantables',
    keyProducts: [
      'Diagnostic tools',
      'Surgical instruments',
      'Implantables',
      'Medical equipment',
    ],
    services: [
      'Classification under relevant EU directives (MDD, IVDD, AIMDD)',
      'Product and risk assessment',
      'Technical documentation (design, test results, risk analysis)',
      'Notified Body assessment for Class II & III devices',
      'Market access strategies and certification guidance',
      'Post-market surveillance support',
    ],
    directives: [
      'Medical Device Directive (MDD)',
      'IVDD',
      'AIMDD',
    ],
  },
  {
    id: 'pressure',
    title: 'Pressure Equipment',
    detail: 'Boilers, vessels, pressure accessories',
    keyProducts: [
      'Boilers',
      'Pressure vessels',
      'Gas cylinders',
      'Piping systems',
    ],
    services: [
      'Pressure Equipment Directive (PED) compliance assessment',
      'Category determination and conformity procedures',
      'Technical documentation preparation',
      'Notified Body coordination when required',
      'Installation and maintenance guidance',
      'Periodic inspection support',
    ],
    directives: [
      'Pressure Equipment Directive (PED)',
      'Simple Pressure Vessels Directive',
    ],
  },
  {
    id: 'construction',
    title: 'Construction Products',
    detail: 'Building materials, doors, insulation',
    keyProducts: [
      'Building materials',
      'Doors & windows',
      'Insulation',
      'Structural components',
    ],
    services: [
      'Assessment to CPR 305/2011 requirements',
      'Testing to harmonized standards or EADs',
      'Declaration of Performance preparation',
      'Coordination of necessary evaluations and certifications',
      'Continuous support for compliance documentation',
      'Market surveillance preparation',
    ],
    directives: ['Construction Products Regulation (CPR)'],
  },
  {
    id: 'machinery',
    title: 'Machinery',
    detail: 'Industrial machines, automation systems, farming equipment',
    keyProducts: [
      'Industrial machines',
      'Automation systems',
      'Farming equipment',
      'Manufacturing tools',
    ],
    services: [
      'Machinery Directive compliance assessment',
      'Risk assessment and safety analysis',
      'Technical file compilation',
      'Declaration of Conformity preparation',
      'CE marking guidance and implementation',
      'User manual and documentation support',
    ],
    directives: [
      'Machinery Directive',
      'ATEX Directive (if applicable)',
    ],
  },
  {
    id: 'ppe',
    title: 'Personal Protective Equipment',
    detail: 'Protective gloves, helmets, respiratory devices',
    keyProducts: [
      'Safety gloves',
      'Protective helmets',
      'Respiratory devices',
      'Protective eyewear',
    ],
    services: [
      'PPE Regulation compliance assessment',
      'Category classification (I, II, III)',
      'Technical documentation preparation',
      'Type examination and testing coordination',
      'Quality assurance procedures',
      'Market access and distribution guidance',
    ],
    directives: ['PPE Regulation (EU) 2016/425'],
  },
  {
    id: 'toys',
    title: 'Toys & Leisure',
    detail: "Children's toys, sporting goods",
    keyProducts: [
      "Children's toys",
      'Sporting goods',
      'Playground equipment',
      'Educational toys',
    ],
    services: [
      'Toy Safety Directive compliance',
      'Age-appropriate safety assessment',
      'Chemical and physical testing coordination',
      'Technical documentation preparation',
      'Warning labels and instructions guidance',
      'Market surveillance preparation',
    ],
    directives: [
      'Toy Safety Directive',
      'General Product Safety Directive',
    ],
  },
  {
    id: 'measuring',
    title: 'Measuring Instruments',
    detail: 'Water/gas meters, weighing devices',
    keyProducts: [
      'Water meters',
      'Gas meters',
      'Weighing devices',
      'Laboratory instruments',
    ],
    services: [
      'Measuring Instruments Directive (MID) compliance',
      'Accuracy class determination',
      'Type approval and verification procedures',
      'Technical documentation support',
      'Notified Body coordination',
      'Market access strategies',
    ],
    directives: [
      'Measuring Instruments Directive (MID)',
      'Non-automatic Weighing Instruments Directive',
    ],
  },
  {
    id: 'environmental',
    title: 'Environmental & Energy',
    detail: 'Solar panels, monitoring instruments',
    keyProducts: [
      'Solar panels',
      'Wind turbines',
      'Environmental monitoring',
      'Energy systems',
    ],
    services: [
      'Renewable Energy Directive compliance',
      'Environmental impact assessment',
      'Energy efficiency testing and documentation',
      'Technical file preparation',
      'Performance declaration support',
      'Sustainability certification guidance',
    ],
    directives: [
      'Renewable Energy Directive',
      'Energy Efficiency Directive',
      'EcoDesign Directive',
    ],
  },
]
