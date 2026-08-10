export const WELDING_EMAIL = 'welding.trg@eurotechworld.net'
export const WELDING_EMAIL_HREF = `mailto:${WELDING_EMAIL}`

export const WELDING_HERO_AUDIENCE = [
  'Beginners who want to become welders',
  'ITI and diploma students',
  'Working welders who want to improve their skills',
  'Candidates preparing for welding jobs in India or abroad',
  'Industry professionals who want AWS-related or advanced welding training',
] as const

export const WELDING_TRUST_LINE =
  'Hands-On Training | Multiple Welding Processes | Robotic Welding | AWS Training Options | Mohali, Punjab'

export const WELDING_FACTS = [
  {
    title: 'Training Location',
    text: 'Eurotech Training Centre, Mohali, Punjab',
  },
  {
    title: 'Training Method',
    text: 'Classroom explanation with hands-on workshop practice',
  },
  {
    title: 'Individual Welding Process',
    text: 'Typically 2 weeks for each welding process*',
  },
  {
    title: 'Structural Welding',
    text: 'Typically 4 weeks of practical training*',
  },
  {
    title: 'Robotic Welding',
    text: 'Operator and Programmer pathway with live robot practice',
  },
  {
    title: 'Practice Materials',
    text: 'Carbon steel, mild steel, stainless steel and aluminium',
  },
  {
    title: 'Training Language',
    text: 'Simple Hindi and English',
  },
  {
    title: 'Advanced Training',
    text: 'Robotic welding, AWS-related training, welding inspection and professional programmes',
  },
] as const

export const WELDING_INTRO_SKILLS = [
  'Set up welding equipment',
  'Select suitable electrodes, wire and filler materials',
  'Adjust voltage, current, gas flow and wire speed',
  'Prepare welding joints',
  'Control the torch, electrode and weld pool',
  'Identify common welding defects',
  'Follow workshop safety requirements',
  'Understand basic welding procedures and parameters',
] as const

export type WeldingCourse = {
  id: string
  title: string
  summary: string
  covers: string[]
  duration?: string
  cta: string
  note?: string
}

export const WELDING_COURSES: WeldingCourse[] = [
  {
    id: 'arc',
    title: 'ARC Welding Course – SMAW',
    summary:
      'Learn practical ARC or rod welding used in fabrication, repair, construction and structural applications.',
    covers: [
      'ARC welding-machine setup',
      'Electrode selection',
      'Current adjustment',
      'Joint preparation',
      'Welding-position practice',
      'Bead control',
      'Slag removal',
      'Defect awareness',
      'Workshop safety',
    ],
    duration: 'Approximately 2 weeks*',
    cta: 'Get ARC Welding Details',
  },
  {
    id: 'tig',
    title: 'TIG/Argon Welding Course – GTAW',
    summary:
      'Learn controlled TIG welding for clean and high-quality welds on carbon steel, stainless steel and selected aluminium applications.',
    covers: [
      'TIG machine setup',
      'Tungsten and filler selection',
      'Argon gas-flow adjustment',
      'Current and polarity settings',
      'Torch-angle control',
      'Joint preparation',
      'Weld-pool control',
      'Root-pass awareness',
      'Visual weld checking',
    ],
    duration: 'Approximately 2 weeks*',
    cta: 'Get TIG/Argon Welding Details',
  },
  {
    id: 'mig',
    title: 'MIG/MAG Welding Course – GMAW',
    summary:
      'Learn wire-feed welding commonly used in automobile, production, fabrication and manufacturing industries.',
    covers: [
      'MIG/MAG machine setup',
      'Wire and shielding-gas selection',
      'Voltage adjustment',
      'Wire-speed settings',
      'Torch movement',
      'Travel-speed control',
      'Fillet and butt-joint practice',
      'Production-welding awareness',
      'Basic troubleshooting',
    ],
    duration: 'Approximately 2 weeks*',
    cta: 'Get MIG/MAG Welding Details',
  },
  {
    id: 'fcaw',
    title: 'FCAW Welding Training',
    summary:
      'Learn Flux-Cored Arc Welding for structural fabrication and selected industrial applications.',
    covers: [
      'FCAW equipment setup',
      'Consumable selection',
      'Voltage and wire-speed settings',
      'Joint preparation',
      'Welding-position practice',
      'Slag removal',
      'Defect prevention',
      'Visual inspection',
      'Safe equipment operation',
    ],
    duration: 'Approximately 2 weeks*',
    cta: 'Get FCAW Training Details',
  },
  {
    id: 'tig-mig',
    title: 'TIG + MIG Combined Training',
    summary:
      'Develop practical skills in two widely used welding processes through one combined programme. Suitable for candidates interested in fabrication, automobile, manufacturing and production-related welding work.',
    covers: [
      'TIG/Argon welding',
      'MIG/MAG welding',
      'Machine setup for both processes',
      'Gas, wire and filler selection',
      'Parameter adjustment',
      'Joint preparation',
      'Carbon-steel and stainless-steel practice',
      'Weld-quality awareness',
    ],
    cta: 'Get TIG + MIG Course Details',
  },
  {
    id: 'structural',
    title: 'Structural Welding Training',
    summary:
      'Practical training for candidates interested in fabrication, construction and structural-engineering work.',
    covers: [
      'ARC/SMAW',
      'MIG/MAG',
      'FCAW',
      'Plate and structural-joint practice',
      'Joint preparation and fit-up',
      'Fillet and butt welds',
      'Welding positions',
      'Basic welding-symbol awareness',
      'Parameter setting',
      'Visual weld inspection',
    ],
    duration: 'Approximately 4 weeks*',
    cta: 'Get Structural Welding Details',
  },
]

export const ROBOTIC_INCLUDE_GROUPS = [
  {
    title: 'Robot & cell',
    items: [
      'Industrial robot safety',
      'Robotic welding-cell awareness',
      'Live robot operation',
      'Robot jogging and movement',
    ],
  },
  {
    title: 'Programming',
    items: [
      'Teach-pendant practice',
      'Point and path creation',
      'Basic robot programming',
    ],
  },
  {
    title: 'Welding setup',
    items: [
      'Welding-job setup',
      'Production setup',
      'Voltage and current settings',
      'Gas-flow and wire-speed settings',
      'Torch-position and path adjustment',
    ],
  },
  {
    title: 'Quality & troubleshooting',
    items: [
      'Weld-defect identification',
      'Production troubleshooting',
      'Basic weld inspection',
    ],
  },
] as const

export const ROBOTIC_WHO = [
  'ITI welders',
  'Diploma and engineering students',
  'Experienced manual welders',
  'Production workers',
  'Maintenance technicians',
  'Welding supervisors',
  'Automobile-industry professionals',
  'Candidates interested in industrial automation',
] as const

export const ROBOTIC_CAREERS = [
  'Robotic Welding Operator',
  'Robotic Welding Technician',
  'Welding Robot Programmer',
  'Production Technician',
  'Automation Technician',
  'Robotic Welding Quality Inspector',
] as const

export const AWS_OPTIONS = [
  'AWS CWI preparatory training',
  'AWS Certified Welding Sales Representative training',
  'AWS welding-code awareness',
  'Welding inspector training',
  'Welder qualification preparation',
  'Welding procedure awareness',
  'Welding quality-control training',
  'Welding documentation',
  'WPS and PQR awareness',
  'Training for engineers, supervisors and quality professionals',
] as const

export const AWS_WHO = [
  'Experienced welders',
  'Welding inspectors',
  'QA/QC professionals',
  'Mechanical engineers',
  'Welding supervisors',
  'Fabrication professionals',
  'Diploma and engineering graduates',
  'Professionals seeking internationally recognised welding knowledge',
] as const

export const AWS_WHY = [
  'Welding processes',
  'Welding inspection',
  'Code requirements',
  'Welding discontinuities',
  'WPS and PQR',
  'Welder qualification',
  'Quality control',
  'Safety and professional responsibility',
] as const

export const WPS_TOPICS = [
  'Welding Procedure Specification—WPS',
  'Procedure Qualification Record—PQR',
  'Welding parameters',
  'Material identification',
  'Consumable selection',
  'Welding positions',
  'Essential welding variables',
  'Basic welding symbols',
  'Acceptance and rejection awareness',
  'Weld-defect identification',
  'Visual inspection',
  'Welder qualification requirements',
] as const

export const WPS_PATHWAYS = [
  'AWS requirements',
  'ISO 9606-1',
  'ASME Section IX',
  'EN ISO 14732 for welding operators',
] as const

export const PRACTICAL_ITEMS = [
  'Welding-machine setup',
  'Current and voltage adjustment',
  'Shielding-gas flow',
  'Wire-speed settings',
  'Electrode and filler selection',
  'Joint preparation and fit-up',
  'Torch and electrode movement',
  'Welding-position control',
  'Bead and weld-pool control',
  'Carbon-steel welding',
  'Mild-steel welding',
  'Stainless-steel welding',
  'Aluminium-welding awareness and practice',
  'Visual defect identification',
  'Weld-quality checking',
  'Safe use of welding equipment',
  'Basic equipment troubleshooting',
] as const

export const PRACTICAL_ADVANCED = [
  'Live robot operation',
  'Teach-pendant programming',
  'Robotic path creation',
  'Automated welding parameters',
  'WPS-following awareness',
  'Welding inspection',
  'Code-based decision-making',
] as const

export const PRACTICE_MATERIALS = [
  {
    title: 'Carbon Steel',
    text: 'Commonly used in industrial fabrication, structural work and piping applications.',
  },
  {
    title: 'Mild Steel',
    text: 'Widely used in general fabrication, construction and workshop jobs.',
  },
  {
    title: 'Stainless Steel',
    text: 'Used where clean welds, controlled heat input and corrosion resistance are important.',
  },
  {
    title: 'Aluminium',
    text: 'Requires different preparation, settings and welding control compared with steel.',
  },
] as const

export const WHO_CAN_JOIN = [
  {
    title: 'Beginners',
    text: 'Learn basic welding safety, machine operation, joint preparation and practical welding skills.',
  },
  {
    title: 'ITI and Diploma Students',
    text: 'Improve practical ability and prepare for industrial work or trade tests.',
  },
  {
    title: 'Working Welders',
    text: 'Upgrade your skills in TIG, MIG/MAG, FCAW, structural or robotic welding.',
  },
  {
    title: 'Overseas Job Candidates',
    text: 'Prepare for welding trade tests commonly conducted by Indian and overseas employers.',
  },
  {
    title: 'Industry Professionals',
    text: 'Explore AWS-related training, welding inspection, code awareness and advanced technical programmes.',
  },
  {
    title: 'Companies',
    text: 'Request customised welder, robotic welding, inspection or production-team training.',
  },
] as const

export const CAREER_INDUSTRIES = [
  'Fabrication workshops',
  'Manufacturing plants',
  'Automobile and auto-component companies',
  'Construction projects',
  'Structural-steel companies',
  'Heavy-engineering industries',
  'Industrial maintenance',
  'Oil and gas projects',
  'Pipeline work',
  'Shipbuilding and repair',
  'Robotic production cells',
  'Welding inspection and quality departments',
] as const

export const CAREER_ROLES = [
  'ARC/SMAW Welder',
  'TIG/Argon Welder',
  'MIG/MAG Welder',
  'FCAW Welder',
  'Structural Welder',
  'Fabrication Welder',
  'Production Welder',
  'Pipe Welder, after suitable specialised training',
  'Robotic Welding Operator',
  'Robotic Welding Technician',
  'Welding Robot Programmer',
  'Welding Supervisor',
  'Welding Inspector, after suitable training and experience',
  'Welding Quality Professional',
] as const

export const TRADE_TEST_HELP = [
  'Process-specific welding practice',
  'Machine setup',
  'Parameter adjustment',
  'Joint-preparation practice',
  'Welding-position practice',
  'WPS-following awareness',
  'Weld-defect identification',
  'Workshop-safety training',
  'Practical assessment',
  'Basic interview guidance',
] as const

export const WHY_EUROTECH_WELD = [
  {
    title: 'Practical Workshop Training',
    text: 'Learn through supervised practice on welding machines, materials and equipment.',
  },
  {
    title: 'Manual and Robotic Welding',
    text: 'Develop conventional welding skills or progress towards robotic welding operation and programming.',
  },
  {
    title: 'Multiple Welding Processes',
    text: 'Choose ARC, TIG/Argon, MIG/MAG, FCAW, combined or structural welding.',
  },
  {
    title: 'Beginner-Friendly Instruction',
    text: 'Technical concepts are explained through simple language and demonstrations.',
  },
  {
    title: 'Industrial Material Practice',
    text: 'Receive exposure to carbon steel, mild steel, stainless steel and aluminium according to your course.',
  },
  {
    title: 'Welding-Parameter Awareness',
    text: 'Understand how voltage, current, gas flow, wire speed and travel speed affect weld quality.',
  },
  {
    title: 'International-Code Awareness',
    text: 'Learn the basic role of WPS, PQR, AWS, ISO 9606-1, EN ISO 14732 and ASME-related pathways.',
  },
  {
    title: 'AWS Training Options',
    text: 'Eligible professionals can explore AWS-related welding, inspection and certification-preparation programmes.',
  },
  {
    title: 'Robotic Welding Pathway',
    text: 'Upgrade from manual welding to robot operation, programming and automated production setup.',
  },
  {
    title: 'Training in Punjab',
    text: 'Attend practical training at Eurotech’s Mohali training centre.',
  },
] as const

export const JOIN_STEPS = [
  {
    title: 'Send Your Details',
    text: 'Complete the form, call us or contact us on WhatsApp.',
  },
  {
    title: 'Speak with a Training Advisor',
    text: 'Tell us about your education, welding experience and career goal.',
  },
  {
    title: 'Select Your Course',
    text: 'Choose manual welding, structural welding, robotic welding or AWS-related training.',
  },
  {
    title: 'Confirm the Details',
    text: 'Receive clear information about the course scope, fee, duration, batch, assessment and certificate.',
  },
  {
    title: 'Begin Your Training',
    text: 'Attend the training and complete the required practical or professional learning activities.',
  },
] as const

export const GALLERY_ITEMS = [
  { label: 'ARC welding practice', image: '/images/weld-gallery-arc.png' },
  { label: 'TIG/Argon welding', image: '/images/weld-gallery-tig.png' },
  { label: 'MIG/MAG machine setup', image: '/images/weld-gallery-mig.png' },
  { label: 'Live robotic welding cell', image: '/images/weld-gallery-robotic.png' },
  { label: 'Trainer-guided practice', image: '/images/weld-gallery-trainer.png' },
  { label: 'Finished weld samples', image: '/images/weld-gallery-samples.png' },
] as const

export const WELDING_TESTIMONIALS = [
  {
    quote:
      'I joined with almost no workshop experience. The ARC and MIG practice at Eurotech helped me understand machine setup, joint preparation and bead control. The trainers corrected my technique every day, which made a real difference.',
    name: 'Harpreet Singh',
    meta: 'ARC & MIG Welding | Ludhiana',
  },
  {
    quote:
      'The robotic welding lab was the strongest part of my training. Working with a live robot, teach pendant and production setup gave me confidence I could not get from theory alone. I now feel ready for automation roles.',
    name: 'Ananya Sharma',
    meta: 'Robotic Welding Operator & Programmer | Chandigarh',
  },
  {
    quote:
      'As a working welder, I wanted clearer knowledge of inspection, WPS and AWS-related requirements. The sessions were practical and easy to follow. I better understand weld quality, documentation and what employers look for.',
    name: 'Ravi Kumar',
    meta: 'AWS & Welding Inspection Pathway | Mohali',
  },
] as const

export const CERTIFICATE_POINTS = [
  'Course name',
  'Training scope',
  'Certificate name',
  'Issuing organisation',
  'Eligibility requirements',
  'Assessment requirements',
  'Practical test, if applicable',
  'Examination route, if applicable',
] as const

export const WELDING_FAQS = [
  {
    q: 'Which welding course is best for beginners?',
    a: 'ARC/SMAW is a common starting point. TIG or MIG/MAG may be suitable if you already know the type of industry or job you want to enter. Our training team can guide you.',
  },
  {
    q: 'How long is the welding course?',
    a: 'An individual welding-process course is typically around two weeks. Structural welding training is typically around four weeks. Robotic and AWS-related programmes have separate durations.',
  },
  {
    q: 'What is the course fee?',
    a: 'Fees depend on the process, training duration, materials, practical hours and certification pathway. Submit the form for current fees.',
  },
  {
    q: 'Is the training practical?',
    a: 'Yes. Practical welder and robotic welding programmes include hands-on training. AWS professional programmes may combine technical instruction, examination preparation and practical activities.',
  },
  {
    q: 'Do you teach ARC, TIG, MIG and FCAW?',
    a: 'Yes. Eurotech provides ARC/SMAW, TIG/GTAW, MIG/MAG/GMAW and FCAW training, subject to batch availability.',
  },
  {
    q: 'Is Argon welding the same as TIG welding?',
    a: 'The term “Argon welding” is commonly used for TIG/GTAW when argon is used as the shielding gas.',
  },
  {
    q: 'Which materials will I practise on?',
    a: 'Depending on the course, practice can include carbon steel, mild steel, stainless steel and aluminium.',
  },
  {
    q: 'Is robotic welding training available?',
    a: 'Yes. Eurotech offers Robotic Welding Operator and Programmer training covering live robot operation, teach-pendant practice, path creation, programming and production setup.',
  },
  {
    q: 'Do you provide AWS training?',
    a: 'Yes. Eurotech offers selected AWS-related professional training pathways. Eligibility, examinations and certification requirements depend on the specific programme.',
  },
  {
    q: 'Is Eurotech an AWS member?',
    a: 'Eurotech is an Educational Institution Member of the American Welding Society. Membership does not mean every Eurotech course is AWS-certified.',
  },
  {
    q: 'Will I receive an AWS certificate?',
    a: 'Only an applicable official AWS programme and certification process can lead to an AWS credential. The admissions team will clearly explain whether your selected programme is Eurotech training, AWS examination preparation or part of an official credential route.',
  },
  {
    q: 'Do you provide 6G welding training?',
    a: 'Availability of 6G or specialised pipe-welding practice depends on the current programme and batch. Contact the training team for confirmation.',
  },
  {
    q: 'Can someone with limited education join?',
    a: 'Yes. Selected practical welding courses are suitable for candidates with limited formal education. Advanced AWS or inspection programmes may have separate entry requirements.',
  },
  {
    q: 'Can this training help with overseas opportunities?',
    a: 'Training can improve practical welding skills and help candidates prepare for employer trade tests. A job, salary, visa or overseas placement cannot be guaranteed.',
  },
  {
    q: 'Where is the training conducted?',
    a: 'Training is conducted at the Eurotech Training Centre in Mohali, Punjab.',
  },
  {
    q: 'How can I enrol?',
    a: 'Call or WhatsApp our training team, or email welding.trg@eurotechworld.net.',
  },
] as const

export const WELDING_COURSE_OPTIONS = [
  'ARC/SMAW Welding',
  'TIG/Argon Welding',
  'MIG/MAG Welding',
  'FCAW Welding',
  'TIG + MIG Combined Training',
  'Structural Welding',
  'Robotic Welding Operator and Programmer',
  'AWS Welding Training',
  'Welding Inspector Training',
  'Not Sure—Need Guidance',
] as const
