export const PL_PHONE = '9056742701'
export const PL_PHONE_DISPLAY = '+91 90567 42701'
export const PL_PHONE_HREF = 'tel:+919056742701'
export const PL_WHATSAPP_HREF = 'https://wa.me/919056742701'
export const PL_ADDRESS =
  'Plot No. 146, Sector 82, JLPL Industrial Area, Mohali, Punjab 140308'
export const PL_MAPS_HREF =
  'https://www.google.com/maps/search/?api=1&query=Plot+No.+146+Sector+82+JLPL+Industrial+Area+Mohali+Punjab+140308'
export const PL_EMAIL = 'eurotechplumbingtraining@gmail.com'
export const PL_EMAIL_HREF = `mailto:${PL_EMAIL}`

export const PL_TRUST_LINE =
  '90% Practical Training | Overseas Trade-Test Preparation | Verifiable Eurotech Certificate | Mohali, Punjab'

export const PL_HERO_COVERS = [
  'PVC, UPVC, CPVC, PPR and GI pipework',
  'Pipe measurement, cutting, fitting and joining',
  'Bathroom and sanitary installation',
  'Hot- and cold-water systems',
  'Drainage and waste-water lines',
  'Leakage and pressure testing',
  'Modern sensor fittings',
  'High-pressure plumbing systems',
  'Plumbing drawings and site terminology',
  'Fire-plumbing fundamentals',
  'Practical trade-test preparation',
] as const

export const PL_HERO_FOR = [
  'Beginners who want to become professional plumbers',
  'Working plumbers who want to improve their skills',
  'Candidates preparing for overseas plumbing jobs',
  'Candidates preparing for employer trade tests',
  'ITI and vocational students',
  'Construction and maintenance workers',
  'Diploma holders and MEP professionals',
] as const

export const PL_FACTS = [
  {
    title: 'Location',
    text: 'Eurotech Plumbing Training Institute, Mohali, Punjab',
  },
  {
    title: 'Training Method',
    text: 'Approximately 90% practical training with supporting classroom explanation',
  },
  {
    title: 'Course Duration',
    text: '15 to 40 working days, depending on the selected programme',
  },
  {
    title: 'Course Fees',
    text: 'Starting from ₹15,000',
  },
  {
    title: 'Overseas Programme',
    text: 'Advanced practical training, trade-test preparation and professional skill assessment',
  },
  {
    title: 'Entry Requirement',
    text: 'Minimum 10th preferred for practical plumbing courses',
  },
  {
    title: 'Previous Experience',
    text: 'Not required for the Basic Course',
  },
  {
    title: 'Certificate',
    text: 'Verifiable Eurotech professional training certificate after successful completion of the applicable course and assessment',
  },
] as const

export const PL_OVERSEAS_TASKS = [
  'Tool identification',
  'Pipe measurement and marking',
  'Pipe cutting',
  'Pipe fitting and joining',
  'Hot- and cold-water installation',
  'Sanitary fixture installation',
  'Drainage-system installation',
  'Leakage and pressure testing',
  'Fault identification',
  'Reading basic plumbing drawings',
  'Understanding site instructions',
  'Following health and safety requirements',
] as const

export const PL_OVERSEAS_OUTCOMES = [
  'Better practical plumbing skills',
  'Clear evidence of training',
  'A documented course scope',
  'Practical assessment results',
  'A verifiable Eurotech certificate',
  'Better preparation for employer trade tests',
] as const

export const PL_OVERSEAS_BRINGS = [
  'Foundation plumbing',
  'Advanced sanitary installation',
  'Modern pipe materials',
  'High-pressure systems',
  'Plumbing maintenance',
  'Trade-test preparation',
  'Basic drawings and site terminology',
  'Practical assessment',
  'Professional certification documentation',
] as const

export const PL_OVERSEAS_FOCUS = [
  {
    title: 'Professional Tool Handling',
    text: 'Select and safely use the correct tool for each plumbing task.',
  },
  {
    title: 'Pipework Skills',
    text: 'Measure, cut, prepare and join PVC, UPVC, CPVC, PPR and GI pipes.',
  },
  {
    title: 'Water-Supply Systems',
    text: 'Install and test hot- and cold-water distribution lines.',
  },
  {
    title: 'Sanitary Installation',
    text: 'Install taps, valves, washbasins, sinks, toilets, flush tanks, showers and related fixtures.',
  },
  {
    title: 'Drainage Systems',
    text: 'Install waste lines, traps and drainage pipes with appropriate alignment and slope.',
  },
  {
    title: 'Leakage and Pressure Testing',
    text: 'Check pipework and connections before handing over the system.',
  },
  {
    title: 'Repair and Maintenance',
    text: 'Identify common faults, leaks, blockages and damaged components.',
  },
  {
    title: 'Drawing Awareness',
    text: 'Understand basic plumbing symbols, layouts and site drawings.',
  },
  {
    title: 'Site Terminology',
    text: 'Learn commonly used professional plumbing and construction terms in English.',
  },
  {
    title: 'Trade-Test Practice',
    text: 'Complete plumbing tasks under time, quality and safety conditions similar to employer skill tests.',
  },
  {
    title: 'Practical Assessment',
    text: 'Demonstrate selected plumbing activities under trainer assessment.',
  },
] as const

export const PL_OVERSEAS_FOR = [
  'Candidates preparing for Gulf or Middle East plumbing opportunities',
  'Candidates planning to approach international recruiters',
  'Working plumbers who need stronger professional documentation',
  'Candidates who previously learned informally without certification',
  'Plumbing helpers who want to progress towards technician roles',
  'Candidates willing to invest in more complete skill development',
] as const

export type PlumbingCourse = {
  id: string
  title: string
  summary: string
  duration: string
  fee: string
  eligibility: string
  extra?: string
  learn: string[]
  bestFor: string
  cta: string
}

export const PL_COURSES: PlumbingCourse[] = [
  {
    id: 'basic',
    title: 'Plumbing Basic Course',
    summary:
      'A short practical course for beginners who want to understand tools, materials and essential pipework.',
    duration: '15 working days',
    fee: '₹15,000',
    eligibility: 'Minimum 10th preferred',
    learn: [
      'Core plumbing principles',
      'Plumbing tools',
      'Pipe and fitting identification',
      'Measurement and marking',
      'Basic pipe cutting',
      'Pipe fitting and joining',
      'Water-supply fundamentals',
      'Basic leakage checking',
      'Plumbing safety',
    ],
    bestFor:
      'Beginners who want to understand basic plumbing before progressing to a professional programme.',
    cta: 'Get Basic Course Details',
  },
  {
    id: 'foundation',
    title: 'Plumbing Foundation Course',
    summary:
      'A detailed practical programme covering pipework, water supply, sanitary fixtures and drainage systems.',
    duration: '30 working days',
    fee: '₹25,000',
    eligibility: 'Minimum 10th preferred',
    learn: [
      'Everything covered in the Basic Course',
      'PVC, UPVC, CPVC, PPR and GI pipework',
      'Advanced pipe fitting and joining',
      'Water-supply installation',
      'Taps and valves',
      'Washbasin and sink installation',
      'Toilet and flush-tank installation',
      'Bathroom plumbing',
      'Drainage-system layouts',
      'Leakage checking',
      'Repair and maintenance basics',
    ],
    bestFor:
      'Candidates who want broad practical plumbing skills for employment or self-employment.',
    cta: 'Get Foundation Course Details',
  },
  {
    id: 'hitech',
    title: 'Hi-Tech Plumbing Course',
    summary:
      'An advanced programme covering modern fixtures, pressure systems and more complex plumbing installations.',
    duration: '40 working days',
    fee: '₹35,000',
    eligibility: 'Minimum 10th preferred',
    learn: [
      'Everything covered in the Foundation Course',
      'Modern plumbing tools',
      'Sensor taps and fittings',
      'Concealed plumbing systems',
      'High-pressure water systems',
      'Advanced sanitary fixtures',
      'Water-storage connections',
      'Pressure testing',
      'Fault identification',
      'Leakage diagnosis',
      'Modern building-plumbing practices',
    ],
    bestFor:
      'Working plumbers and candidates preparing for professional or overseas plumbing roles.',
    cta: 'Get Hi-Tech Course Details',
  },
  {
    id: 'design',
    title: 'Plumbing Design and Drafting',
    summary:
      'A professional programme for candidates interested in plumbing layouts, calculations and MEP drawings.',
    duration: '40 working days',
    fee: '₹35,000',
    eligibility: 'Diploma preferred',
    extra: 'Basic AutoCAD knowledge preferred',
    learn: [
      'Plumbing design fundamentals',
      'Water-supply layouts',
      'Drainage layouts',
      'Pipe routing',
      'Fixture positioning',
      'System sizing',
      'Basic calculations',
      'Plumbing symbols',
      'Blueprint reading',
      'AutoCAD drafting',
      'Drawing preparation',
      'MEP coordination',
      'Material-estimation awareness',
    ],
    bestFor:
      'Diploma holders, engineers, plumbing supervisors, draftsmen and MEP professionals.',
    cta: 'Get Design and Drafting Details',
  },
  {
    id: 'fire',
    title: 'Fire Plumbing Course',
    summary:
      'A specialised programme covering pipework used in fire-protection systems.',
    duration: '30 working days',
    fee: 'Contact Eurotech',
    eligibility: 'Open to plumbers, pipe fitters and technicians',
    learn: [
      'Fire-fighting system fundamentals',
      'Wet-riser systems',
      'Dry-riser systems',
      'Fire sprinkler installation',
      'Fire-pump basics',
      'Hydrant-system layouts',
      'Fire-water piping',
      'Valves and fittings',
      'Testing awareness',
      'Safety requirements',
    ],
    bestFor:
      'Plumbers, pipe fitters, maintenance workers and technicians seeking additional fire-plumbing knowledge.',
    cta: 'Get Fire Plumbing Details',
  },
]

export const PL_PRACTICAL = [
  'Plumbing-tool identification',
  'Measuring and marking',
  'Pipe cutting',
  'Threading',
  'PVC and UPVC joining',
  'CPVC installation',
  'PPR heat fusion',
  'GI pipe fitting',
  'Tap and valve installation',
  'Washbasin fitting',
  'Kitchen-sink fitting',
  'Toilet and flush-tank installation',
  'Shower installation',
  'Hot- and cold-water lines',
  'Water-tank connections',
  'Geyser connections',
  'Drainage-pipe installation',
  'Correct drainage slope',
  'Trap installation',
  'Leakage testing',
  'Pressure testing',
  'Blockage identification',
  'Repair and maintenance',
  'Basic plumbing drawings',
  'Material-estimation awareness',
] as const

export const PL_MATERIALS = [
  {
    title: 'PVC',
    text: 'Commonly used in drainage and waste-water applications.',
  },
  {
    title: 'UPVC',
    text: 'Used in selected water-supply, drainage and building-plumbing systems.',
  },
  {
    title: 'CPVC',
    text: 'Commonly used for hot- and cold-water supply.',
  },
  {
    title: 'PPR',
    text: 'Used in pressurised hot- and cold-water installations.',
  },
  {
    title: 'GI',
    text: 'Used in selected water-supply, industrial and fire-plumbing applications.',
  },
] as const

export const PL_FIXTURES = [
  'Taps and faucets',
  'Stop valves',
  'Angle valves',
  'Washbasins',
  'Kitchen sinks',
  'Toilets and commodes',
  'Flush tanks',
  'Urinals',
  'Showers',
  'Health faucets',
  'Floor traps',
  'Bottle traps',
  'Gully traps',
  'Water tanks',
  'Geyser connections',
  'Sensor taps',
  'Concealed fittings',
] as const

export const PL_TRADE_TEST = [
  'Completing tasks within a set time',
  'Selecting the correct tools',
  'Measuring accurately',
  'Cutting pipes cleanly',
  'Preparing joints',
  'Joining different pipe materials',
  'Installing fixtures',
  'Setting drainage slopes',
  'Testing for leakage',
  'Identifying faults',
  'Reading basic layouts',
  'Maintaining a safe work area',
  'Explaining completed work in basic professional English',
] as const

export const PL_TERMS = [
  'Plumbing tools',
  'Pipe materials',
  'Fittings',
  'Valves',
  'Fixtures',
  'Water supply',
  'Drainage',
  'Hot-water systems',
  'Testing',
  'Measurements',
  'Safety instructions',
  'Drawings',
  'Maintenance',
  'Handover',
] as const

export const PL_CERT_POINTS = [
  'Candidate’s name',
  'Course title',
  'Training duration',
  'Skills or modules covered',
  'Assessment status',
  'Certificate number',
  'Issue date',
  'Issuing organisation',
  'Verification method, where available',
] as const

export const PL_CERT_EXTRA = [
  'Additional trade tests',
  'Local licences',
  'Apprenticeship experience',
  'Qualification assessment',
  'Work-experience evidence',
  'Health and safety training',
  'Language tests',
  'Local code knowledge',
] as const

export const PL_WHO = [
  'Beginners seeking a professional trade',
  'Working plumbers upgrading their skills',
  'Plumbers who learned informally without documentation',
  'Candidates preparing for overseas opportunities',
  'Candidates preparing for employer trade tests',
  'ITI students',
  'Construction workers',
  'Facility-maintenance workers',
  'Plumbing helpers',
  'Self-employed technicians',
  'Contractors',
  'Diploma holders',
  'MEP professionals',
] as const

export const PL_CAREER_INDUSTRIES = [
  'Residential construction',
  'Commercial buildings',
  'Hotels',
  'Hospitals',
  'Shopping centres',
  'Factories',
  'Facility-management companies',
  'Building maintenance',
  'MEP contracting',
  'Fire-protection projects',
  'Infrastructure projects',
  'International construction projects',
] as const

export const PL_CAREER_ROLES = [
  'Plumber',
  'Plumbing Technician',
  'Maintenance Plumber',
  'Sanitary Fitter',
  'Pipe Fitter',
  'Plumbing Installer',
  'Plumbing Supervisor, with suitable experience',
  'MEP Plumbing Draftsman',
  'Fire-Plumbing Technician',
  'Self-Employed Plumbing Technician',
] as const

export const PL_WHY = [
  {
    title: '90% Practical Training',
    text: 'Spend most of the course developing real plumbing skills.',
  },
  {
    title: 'Real Tools and Materials',
    text: 'Practise with common pipes, fittings, fixtures and plumbing tools.',
  },
  {
    title: 'Beginner to Professional Pathways',
    text: 'Start with basic plumbing or choose an advanced overseas-career programme.',
  },
  {
    title: 'Trade-Test Preparation',
    text: 'Practise common employer-assessment activities.',
  },
  {
    title: 'Modern Plumbing Skills',
    text: 'Learn sensor fittings, pressure systems, concealed plumbing and advanced installations.',
  },
  {
    title: 'Professional Documentation',
    text: 'Receive clear course and assessment documentation after successful completion.',
  },
  {
    title: 'Certificate Verification',
    text: 'Ask about Eurotech’s certificate-verification process before enrolment.',
  },
  {
    title: 'Design and Fire-Plumbing Options',
    text: 'Add advanced skills through specialist courses.',
  },
  {
    title: 'Mohali Training Centre',
    text: 'Attend practical training close to Chandigarh and major North Indian states.',
  },
] as const

export const PL_STATES = [
  'Punjab',
  'Chandigarh',
  'Haryana',
  'Himachal Pradesh',
  'Uttarakhand',
  'Western Uttar Pradesh',
  'Delhi NCR',
  'Other parts of India',
] as const

export const PL_JOIN_STEPS = [
  {
    title: 'Send Your Details',
    text: `Complete the enquiry form or call ${PL_PHONE}.`,
  },
  {
    title: 'Discuss Your Career Goal',
    text: 'Tell the advisor whether you want to work in India, apply abroad, start a business or learn design.',
  },
  {
    title: 'Select Your Programme',
    text: 'Choose Basic, Foundation, Hi-Tech, Overseas Career, Design and Drafting, or Fire Plumbing.',
  },
  {
    title: 'Confirm the Details',
    text: 'Receive written information about the fee, duration, practical scope, assessment and certificate.',
  },
  {
    title: 'Begin Training',
    text: 'Attend the Mohali training centre and complete the required practical activities.',
  },
] as const

export const PL_FAQS = [
  {
    q: 'Which course is best for someone planning to work abroad?',
    a: 'Candidates preparing for overseas opportunities should consider the Foundation Course, Hi-Tech Course or Professional Overseas Plumbing Programme. The right choice depends on existing skills and employer requirements.',
  },
  {
    q: 'Is the certificate valid abroad?',
    a: 'The Eurotech certificate remains valid as a record of completed training. Its acceptance for employment, licensing, immigration or professional registration depends on the employer and destination-country requirements.',
  },
  {
    q: 'Will the certificate guarantee an overseas job?',
    a: 'No. The certificate documents your training. Employment depends on your practical skills, experience, trade-test performance, visa eligibility and employer selection.',
  },
  {
    q: 'Does the course include trade-test preparation?',
    a: 'The professional overseas pathway can include practice for tool identification, pipe fitting, fixture installation, drainage, leakage testing and other common practical assessments.',
  },
  {
    q: 'Will I learn professional plumbing terminology in English?',
    a: 'The programme may introduce common English terms used for tools, pipes, fittings, fixtures, drawings, measurements and safety instructions.',
  },
  {
    q: 'Which pipe materials are covered?',
    a: 'Training may include PVC, UPVC, CPVC, PPR and GI pipes.',
  },
  {
    q: 'Is practical training included?',
    a: 'Yes. Eurotech provides approximately 90% practical training with supporting classroom explanation.',
  },
  {
    q: 'What are the course fees?',
    a: 'Basic Course: ₹15,000. Foundation Course: ₹25,000. Hi-Tech Course: ₹35,000. Design and Drafting: ₹35,000. Fire Plumbing: Contact Eurotech. Professional Overseas Plumbing Programme: Contact Eurotech. Confirm the exact inclusions before payment.',
  },
  {
    q: 'Can beginners join?',
    a: 'Yes. Beginners can start with the Basic Course. Candidates preparing for overseas opportunities may need additional advanced training and practice.',
  },
  {
    q: 'Can experienced plumbers join?',
    a: 'Yes. Experienced plumbers can choose the Hi-Tech or Professional Overseas Plumbing Programme for skill assessment, documentation and trade-test preparation.',
  },
  {
    q: 'Where is the training conducted?',
    a: `Training is conducted at ${PL_ADDRESS}.`,
  },
  {
    q: 'How can I enrol?',
    a: `Call ${PL_PHONE} or complete the enquiry form.`,
  },
] as const

export const PL_COURSE_OPTIONS = [
  'Plumbing Basic Course',
  'Plumbing Foundation Course',
  'Hi-Tech Plumbing Course',
  'Professional Overseas Plumbing Programme',
  'Plumbing Design and Drafting',
  'Fire Plumbing Course',
  'Not Sure—Need Guidance',
] as const

export const PL_FINAL_SKILLS = [
  'Pipe fitting and joining',
  'Water-supply systems',
  'Sanitary installation',
  'Drainage systems',
  'Modern plumbing',
  'Leakage and pressure testing',
  'Plumbing drawings',
  'Trade-test preparation',
  'Professional site terminology',
] as const
