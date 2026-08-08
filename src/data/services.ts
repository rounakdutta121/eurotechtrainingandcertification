export const SERVICE_OPTIONS = [
  'Robotic Welding',
  'CE Mark Certification',
  'Plumbing Training',
  'Welding Training Courses',
] as const

export type ServiceOption = (typeof SERVICE_OPTIONS)[number]

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/robotic-welding-course', label: 'Robotic Welding' },
  { to: '/ce-mark', label: 'CE Mark' },
  { to: '/plumbing-training', label: 'Plumbing' },
  { to: '/welding-training-courses', label: 'Welding' },
] as const

export const SERVICE_PAGES = [
  {
    to: '/robotic-welding-course',
    title: 'Robotic Welding',
    service: 'Robotic Welding' as ServiceOption,
    blurb:
      'Operate and program industrial welding robots used in automobile, manufacturing, and engineering companies.',
    image: '/images/program-robotic.png',
    tone: 'robotic',
  },
  {
    to: '/ce-mark',
    title: 'CE Mark Certification',
    service: 'CE Mark Certification' as ServiceOption,
    blurb:
      'Get your products CE marked for European market compliance with NANDO-approved notified body support.',
    image: '/images/program-ce.png',
    tone: 'ce',
  },
  {
    to: '/plumbing-training',
    title: 'Plumbing Training',
    service: 'Plumbing Training' as ServiceOption,
    blurb:
      'Hands-on, industry-focused plumbing training with IEB UK certification pathways in Mohali.',
    image: '/images/program-plumbing.png',
    tone: 'plumbing',
  },
  {
    to: '/welding-training-courses',
    title: 'Welding Training',
    service: 'Welding Training Courses' as ServiceOption,
    blurb:
      'AWS-affiliated welder training, NDT Level-II, and corporate welding programs for global careers.',
    image: '/images/program-welding.png',
    tone: 'welding',
  },
] as const

export const CONTACT = {
  phone: '+91 73470 01401',
  phoneHref: 'tel:+917347001401',
  email: 'info@eurotechworld.net',
  emailHref: 'mailto:info@eurotechworld.net',
  address:
    '3rd Floor, Plot No: 146A, Sector 82, JLPL Industrial Area, Mohali, Punjab',
  logo: 'https://www.eurotechworld.net/wp-content/uploads/2019/08/cropped-Eurotechworld-logo.jpg',
}
