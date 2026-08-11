export const RW_PHONE = '+91 73470 01401'
export const RW_PHONE_HREF = 'tel:+917347001401'
export const RW_WHATSAPP_HREF = 'https://wa.me/917347001401'
export const RW_EMAIL = 'welding.trg@eurotechworld.net'
export const RW_EMAIL_HREF = `mailto:${RW_EMAIL}`
export const RW_ADDRESS =
  'Eurotech House, Plot No. 1, Industrial Area Phase IX, Mohali, Punjab, India'
export const RW_MAPS_HREF =
  'https://www.google.com/maps/search/?api=1&query=Eurotech+House+Plot+No.+1+Industrial+Area+Phase+IX+Mohali+Punjab'

export const RW_NEXT_BATCH = 'Confirm with a training advisor'
export const RW_COURSE_FEE = 'Confirm with a training advisor'

export const RW_TRUST_LINE =
  '200+ Practical Hours | Live Robot Lab | Operator + Programmer Skills | Mohali, Punjab'

export const RW_REGIONS =
  'Punjab | Chandigarh | Haryana | Himachal Pradesh | Uttarakhand | Western Uttar Pradesh'

export const RW_HERO_POINTS = [
  'Live industrial welding robot practice',
  'Robot operation and teach-pendant programming',
  'Robotic MIG/MAG welding',
  'Point and welding-path creation',
  'Welding parameters and production setup',
  'Troubleshooting and weld inspection',
  'Certificate after successful completion',
] as const

export const RW_FACTS = [
  {
    title: 'Course',
    text: 'Robotic Welding Operator and Programmer',
  },
  {
    title: 'Training Location',
    text: 'Eurotech Training Centre, Mohali, Punjab',
  },
  {
    title: 'Practical Training',
    text: '200+ hours',
  },
  {
    title: 'Training Method',
    text: 'Simple classroom explanation with hands-on practice on live industrial robots',
  },
  {
    title: 'Welding Process',
    text: 'Robotic MIG/MAG welding—GMAW',
  },
  {
    title: 'Main Skills',
    text: 'Robot operation, teach-pendant programming, path creation, job setup, welding parameters, troubleshooting and inspection',
  },
  {
    title: 'Certificate',
    text: 'Eurotech Robotic Welding Operator and Programmer Certificate after successful completion',
  },
  {
    title: 'Optional Pathway',
    text: 'Welding operator approval aligned with EN ISO 14732, subject to the selected assessment route',
  },
  {
    title: 'Next Batch',
    text: RW_NEXT_BATCH,
  },
  {
    title: 'Course Fee',
    text: RW_COURSE_FEE,
  },
] as const

export const RW_INTRO_OUTCOMES = [
  'Operate an industrial welding robot',
  'Move and control the robotic arm safely',
  'Use a teach pendant',
  'Teach welding points',
  'Create and modify welding paths',
  'Set up a robotic welding job',
  'Adjust welding parameters',
  'Run a robotic welding programme',
  'Check weld quality',
  'Identify common welding faults',
  'Support automated welding production',
] as const

export const RW_INDUSTRIES = [
  'Automobile manufacturing',
  'Auto-component production',
  'Heavy engineering',
  'Structural fabrication',
  'Agricultural equipment',
  'Construction equipment',
  'Industrial machinery',
  'Railway manufacturing',
  'Production welding',
  'Industrial automation',
] as const

export type RwModule = {
  id: string
  title: string
  summary: string
  topics: string[]
}

export const RW_MODULES: RwModule[] = [
  {
    id: 'mig',
    title: 'Module 1: Robotic MIG/MAG Welding',
    summary:
      'Build the welding knowledge required before programming the robot.',
    topics: [
      'MIG/MAG process fundamentals',
      'Welding-wire selection',
      'Shielding-gas selection',
      'Torch positioning',
      'Contact-tip-to-work distance',
      'Joint preparation',
      'Welding-path setup',
      'Weld-quality awareness',
    ],
  },
  {
    id: 'programming',
    title: 'Module 2: Robot Operation and Programming',
    summary: 'Learn how to control and program an industrial welding robot.',
    topics: [
      'Robot axes and movements',
      'Coordinate systems',
      'Teach-pendant operation',
      'Robot jogging',
      'Teaching points',
      'Path creation',
      'Programme structure',
      'Basic welding programmes',
      'Job setup',
      'Running and modifying programmes',
    ],
  },
  {
    id: 'safety',
    title: 'Module 3: Safety and Daily Maintenance',
    summary: 'Learn to work safely around live robotic welding equipment.',
    topics: [
      'Emergency-stop systems',
      'Robot safety zones',
      'Safety fencing and interlocks',
      'Safe cell entry',
      'Daily safety checks',
      'Torch and wire-feeder inspection',
      'Basic maintenance',
      'Fault identification',
      'Safe fault recovery',
    ],
  },
  {
    id: 'quality',
    title: 'Module 4: Weld Quality and Troubleshooting',
    summary: 'Learn to identify common weld problems and correct their causes.',
    topics: [
      'Weld-quality checking',
      'Porosity',
      'Weak or incomplete fusion',
      'Burn-through',
      'Excessive spatter',
      'Poor weld shape',
      'Wire-feed faults',
      'Arc instability',
      'Incorrect travel speed',
      'Programme correction',
      'Parameter correction',
    ],
  },
]

export const RW_PRACTICAL = [
  'Start and shut down the robotic welding cell safely',
  'Operate the robotic arm',
  'Use the teach pendant',
  'Move the robot through different axes',
  'Work with different coordinate systems',
  'Teach welding points',
  'Create welding paths',
  'Modify robot movements',
  'Set up a robotic welding job',
  'Enter welding parameters',
  'Run welding programmes',
  'Monitor production',
  'Inspect completed welds',
  'Identify common defects',
  'Correct parameter problems',
  'Perform daily equipment checks',
  'Troubleshoot common production faults',
] as const

export const RW_PARAMETERS = [
  {
    title: 'Voltage',
    text: 'Controls arc length and influences weld stability and bead shape.',
  },
  {
    title: 'Current',
    text: 'Controls welding heat, fusion and penetration.',
  },
  {
    title: 'Gas Flow',
    text: 'Protects the welding area and helps prevent contamination and porosity.',
  },
  {
    title: 'Wire-Feed Speed',
    text: 'Controls the supply of welding wire and affects deposition and current.',
  },
  {
    title: 'Robot Travel Speed',
    text: 'Controls how quickly the torch moves along the programmed welding path.',
  },
  {
    title: 'Torch Position',
    text: 'Influences penetration, bead shape and joint coverage.',
  },
  {
    title: 'Tool Centre Point—TCP',
    text: 'Helps position the welding torch accurately along the programmed path.',
  },
  {
    title: 'Welding Path',
    text: 'Determines where and how the robot performs the weld.',
  },
] as const

export const RW_SAFETY = [
  'Emergency-stop operation',
  'Robot safety zones',
  'Safety fencing and interlocks',
  'Safe working distance',
  'Personal protective equipment',
  'Arc-flash awareness',
  'Welding-fume and ventilation awareness',
  'Daily equipment checks',
  'Safe programme testing',
  'Safe fault recovery',
] as const

export const RW_DEFECTS = [
  'Porosity',
  'Incomplete fusion',
  'Burn-through',
  'Excessive spatter',
  'Poor bead shape',
  'Wire-feed problems',
  'Arc instability',
] as const

export const RW_CAUSE_AREAS = [
  'Robot programme',
  'Welding parameters',
  'Shielding gas',
  'Consumables',
  'Torch position',
  'Wire feeder',
  'Workpiece fit-up',
  'Fixturing',
] as const

export const RW_WHO = [
  'ITI welders',
  'Experienced manual welders',
  'Diploma students',
  'Mechanical engineering students',
  'Electrical and electronics students',
  'Automobile engineering students',
  'Production engineering students',
  'Mechatronics students',
  'Manufacturing-industry workers',
  'Production technicians',
  'Maintenance personnel',
  'Welding supervisors',
  'Industry professionals',
  'Employers training their workforce',
] as const

export const RW_STATES = [
  'Punjab',
  'Chandigarh',
  'Haryana',
  'Himachal Pradesh',
  'Uttarakhand',
  'Western Uttar Pradesh',
  'Delhi NCR',
  'Other parts of India',
] as const

export const RW_CITIES =
  'Students commonly travel from Chandigarh, Panchkula, Ambala, Baddi, Solan, Una, Ludhiana, Patiala, Dehradun, Roorkee and Saharanpur for practical training.'

export const RW_CAREERS = [
  {
    title: 'Robotic Welding Operator',
    text: 'Operate robotic welding cells and monitor production.',
  },
  {
    title: 'Robotic Welding Technician',
    text: 'Set up equipment and resolve common production problems.',
  },
  {
    title: 'Robot Programmer',
    text: 'Create and modify robot movements, welding paths and basic production programmes.',
  },
  {
    title: 'Welding Cell Technician',
    text: 'Support the operation and daily maintenance of automated welding cells.',
  },
  {
    title: 'Automation Technician',
    text: 'Assist with industrial robots and automated manufacturing systems.',
  },
  {
    title: 'Production Technician',
    text: 'Operate and monitor equipment used in manufacturing.',
  },
  {
    title: 'Welding Quality Inspector',
    text: 'Check weld quality and support production requirements, subject to suitable inspection training and experience.',
  },
] as const

export const RW_CERT_POINTS = [
  'Course scope',
  'Practical training hours',
  'Certificate name',
  'Assessment requirements',
  'Practical-test requirements',
  'Issuing organisation',
  'Optional qualification route',
  'Additional assessment fee, if applicable',
] as const

export const RW_WHY = [
  {
    title: 'Live Industrial Robots',
    text: 'Practise on physical industrial robotic welding equipment—not classroom theory alone.',
  },
  {
    title: '200+ Practical Hours',
    text: 'Build confidence through structured and supervised robot-lab practice.',
  },
  {
    title: 'Operator and Programmer Skills',
    text: 'Learn robot operation, teach-pendant control, path creation and basic programming.',
  },
  {
    title: 'Welding and Automation Together',
    text: 'Understand the welding process behind the robot’s movements.',
  },
  {
    title: 'Parameter-Setting Practice',
    text: 'Learn voltage, current, gas flow, wire speed, travel speed and torch-position settings.',
  },
  {
    title: 'Production Troubleshooting',
    text: 'Identify whether problems come from the programme, parameters, consumables or job setup.',
  },
  {
    title: 'Weld-Quality Awareness',
    text: 'Recognise common robotic welding defects and their possible causes.',
  },
  {
    title: 'Safety-First Training',
    text: 'Learn industrial robot and welding safety before operating a live cell.',
  },
  {
    title: 'Mohali Training Centre',
    text: 'Attend hands-on training close to Chandigarh and the industrial regions of North India.',
  },
] as const

export const RW_CORPORATE_FOR = [
  'Robotic welding operators',
  'Welding technicians',
  'Production teams',
  'Maintenance personnel',
  'Welding supervisors',
  'Quality personnel',
  'Automation teams',
] as const

export const RW_CORPORATE_FOCUS = [
  'Cell operation',
  'Operator safety',
  'Teach-pendant skills',
  'Job setup',
  'Parameter control',
  'Production troubleshooting',
  'Weld-quality awareness',
  'Daily maintenance',
  'Operator assessment',
] as const

export const RW_JOIN_STEPS = [
  {
    title: 'Send Your Details',
    text: 'Complete the enquiry form, call us or contact us through WhatsApp.',
  },
  {
    title: 'Speak with a Training Advisor',
    text: 'Discuss your education, work experience and career goal.',
  },
  {
    title: 'Confirm the Course',
    text: 'Receive verified information about the fee, schedule, practical hours and certificate.',
  },
  {
    title: 'Visit the Robot Lab',
    text: 'Visit the Mohali training centre if you want to see the equipment before enrolling.',
  },
  {
    title: 'Begin Practical Training',
    text: 'Start supervised training on live industrial welding robots.',
  },
] as const

export const RW_GALLERY = [
  { label: 'Industrial welding robots', image: '/images/rw-gallery-robots.png' },
  { label: 'Live robotic MIG/MAG welding', image: '/images/rw-gallery-migweld.png' },
  { label: 'Teach-pendant practice', image: '/images/rw-gallery-teach.png' },
  { label: 'Welding-cell safety systems', image: '/images/rw-gallery-cell.png' },
  { label: 'Parameter-setting practice', image: '/images/rw-gallery-settings.png' },
  { label: 'Trainer-guided practical work', image: '/images/rw-gallery-coach.png' },
] as const

export const RW_TESTIMONIALS = [
  {
    quote:
      'Working on a live welding robot changed how I see my career. Teach-pendant practice, path creation and production setup gave me skills I could not learn from a simulator.',
    name: 'Gurpreet Kaur',
    meta: 'Robotic Welding Operator and Programmer | Chandigarh',
  },
  {
    quote:
      'I came as a manual welder. The trainers explained jogging, coordinates and welding parameters in simple language. After 200+ hours in the lab, I feel ready for automation work.',
    name: 'Amanpreet Singh',
    meta: 'Robotic Welding Course | Ludhiana',
  },
  {
    quote:
      'We sent our production team to Eurotech for robotic welding training. The focus on safety, job setup and troubleshooting was practical and immediately useful on the shop floor.',
    name: 'Sandeep Mehra',
    meta: 'Production Supervisor | Auto-component manufacturer, Mohali',
  },
] as const

export const RW_FAQS = [
  {
    q: 'What is robotic welding?',
    a: 'Robotic welding uses an industrial robot to control and move the welding torch along a programmed path. The operator sets up the job, programme and welding parameters and monitors weld quality.',
  },
  {
    q: 'Where is the course conducted?',
    a: `The course is conducted at ${RW_ADDRESS}.`,
  },
  {
    q: 'Is the course practical?',
    a: 'Yes. The programme includes more than 200 hours of hands-on training on live industrial welding robots.',
  },
  {
    q: 'Which welding process is taught?',
    a: 'The programme focuses primarily on robotic MIG/MAG welding, also known as GMAW.',
  },
  {
    q: 'Will I learn robot programming?',
    a: 'Yes. Candidates learn teach-pendant operation, robot movement, point teaching, path creation, basic programming and job setup.',
  },
  {
    q: 'Do I need previous welding experience?',
    a: 'Previous experience is helpful but is not compulsory for the standard Eurotech training pathway. The course introduces the necessary fundamentals before progressing to robot operation and programming.',
  },
  {
    q: 'Can candidates from neighbouring states join?',
    a: 'Yes. The programme welcomes candidates from Punjab, Chandigarh, Haryana, Himachal Pradesh, Uttarakhand, western Uttar Pradesh and other parts of India.',
  },
  {
    q: 'What certificate will I receive?',
    a: 'Successful candidates receive the Eurotech Robotic Welding Operator and Programmer Certificate for the applicable training pathway.',
  },
  {
    q: 'Is EN ISO 14732 approval available?',
    a: 'An optional welding-operator approval aligned with EN ISO 14732 may be available. Confirm the assessment, issuing organisation and additional fee before enrolling.',
  },
  {
    q: 'Is this an AWS CRAW certification?',
    a: 'No. This programme provides Eurotech’s Robotic Welding Operator and Programmer training. AWS CRAW is a separate credential with its own education, experience, application and examination requirements.',
  },
  {
    q: 'What jobs can I apply for?',
    a: 'Relevant roles may include robotic welding operator, robotic welding technician, welding cell technician, robot programmer, automation technician and production technician. Selection depends on employer requirements and candidate capability.',
  },
  {
    q: 'Do you guarantee employment?',
    a: 'No. Eurotech provides practical training, assessment and career guidance. Employment and salary depend on candidate performance and employer requirements.',
  },
  {
    q: 'What is the course fee?',
    a: `The current fee is ${RW_COURSE_FEE}. Confirm what is included before enrolling.`,
  },
  {
    q: 'When does the next batch start?',
    a: `The next batch begins on ${RW_NEXT_BATCH}. Seats are limited because robot-lab practice must be scheduled for each candidate.`,
  },
  {
    q: 'How can I enrol?',
    a: `Call ${RW_PHONE} or email ${RW_EMAIL}.`,
  },
] as const

export const RW_EXPERIENCE_OPTIONS = [
  'Beginner',
  'ITI Welder',
  'Experienced Manual Welder',
  'Diploma Student',
  'Engineering Student',
  'Production or Industry Professional',
] as const

export const RW_FINAL_SKILLS = [
  'Live robot operation',
  'Teach-pendant programming',
  'Point and path creation',
  'Robotic MIG/MAG welding',
  'Welding-job setup',
  'Parameter adjustment',
  'Production troubleshooting',
  'Weld-quality inspection',
] as const
