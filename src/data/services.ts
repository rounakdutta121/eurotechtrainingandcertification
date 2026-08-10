export const SERVICE_OPTIONS = [
  'Robotic Welding',
  'CE Mark Certification',
  'Plumbing Training',
  'Welding Training Courses',
] as const

export type ServiceOption = (typeof SERVICE_OPTIONS)[number]

export type NavLinkItem = {
  to: string
  label: string
}

export type NavItem =
  | (NavLinkItem & { children?: undefined })
  | {
      label: string
      children: readonly NavLinkItem[]
    }

export const TRAINING_LINKS = [
  { to: '/robotic-welding-course', label: 'Robotic Welding' },
  { to: '/welding-training-courses', label: 'Welding' },
  { to: '/plumbing-training', label: 'Plumbing' },
] as const

export const NAV_ITEMS: readonly NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/ce-mark', label: 'CE Mark' },
  { label: 'Trainings', children: TRAINING_LINKS },
] as const

/** Flat page links for footer and simple maps */
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/ce-mark', label: 'CE Mark' },
  ...TRAINING_LINKS,
] as const

export const SERVICE_PAGES = [
  {
    to: '/robotic-welding-course',
    title: 'Robotic Welding',
    service: 'Robotic Welding' as ServiceOption,
    outcome: 'Live robot lab · Job-ready skills',
    blurb:
      'Operate and program industrial welding robots used in automobile, manufacturing, and engineering companies.',
    image: '/images/program-robotic.png',
    tone: 'robotic',
  },
  {
    to: '/ce-mark',
    title: 'CE Mark Certification',
    service: 'CE Mark Certification' as ServiceOption,
    outcome: 'EU market access · NANDO support',
    blurb:
      'Get your products CE marked for European market compliance with NANDO-approved notified body support.',
    image: '/images/program-ce.png',
    tone: 'ce',
  },
  {
    to: '/plumbing-training',
    title: 'Plumbing Training',
    service: 'Plumbing Training' as ServiceOption,
    outcome: 'IEB UK path · Hands-on Mohali',
    blurb:
      'Hands-on, industry-focused plumbing training with IEB UK certification pathways in Mohali.',
    image: '/images/program-plumbing.png',
    tone: 'plumbing',
  },
  {
    to: '/welding-training-courses',
    title: 'Welding Training',
    service: 'Welding Training Courses' as ServiceOption,
    outcome: 'AWS Miami partner · Global careers',
    blurb:
      'AWS-affiliated welder training, NDT Level-II, and corporate welding programs for global careers.',
    image: '/images/program-welding.png',
    tone: 'welding',
  },
] as const

export const CONTACT = {
  phone: '+91 90565 44487',
  phoneHref: 'tel:+919056544487',
  whatsappHref: 'https://wa.me/919056544487',
  email: 'info@eurotechworld.net',
  emailHref: 'mailto:info@eurotechworld.net',
  address:
    '3rd Floor, Plot No: 146A, Sector 82, JLPL Industrial Area, Mohali, Punjab',
  addressShort: 'Mohali, Punjab',
  logo: 'https://www.eurotechworld.net/wp-content/uploads/2019/08/cropped-Eurotechworld-logo.jpg',
  social: {
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
}
