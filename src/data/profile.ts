/**

 * YOUR IDENTITY - start here.

 *

 * Everything that says who you are lives in this file: name, handle, photo,

 * socials, email and the Home headline. Every value below is a PLACEHOLDER.

 * Replace the text, or hand this file to your AI assistant and tell it what

 * to put in each field.

 *

 * Page-specific copy (projects, services, testimonials, FAQs) lives in the

 * other files in src/data/ and at the top of each view component.

 */



import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'



export type SocialLink = {

  label: string

  href: string

  iconPath: string

}



/** A proof fact on the phone's Home: a glyph, a short value, a caption. */

export type Stat = { value: string; label: string; Icon: Icon }



export type Profile = {

  name: string

  /** First name, used in "Hi, I'm ___." on About. */

  firstName: string

  handle: string

  /** Short role line under the handle on phones. */

  role: string

  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */

  avatarSrc: string

  /** Tooltip / screen-reader label on the verified tick next to your name. */

  verifiedLabel: string

  email: string

  location: string

  /** Three short proof facts shown on phones under the Home lede. */

  stats: Stat[]

  displayName: { line1: string; line2: string }

  hero: {

    body: string

    portraitSrc: string

    portraitAlt: string

  }

  socials: SocialLink[]

}



export const profile: Profile = {

  name: 'Georgia Rachel',

  firstName: 'Georgia',

  handle: '@georgiarachel07',

  role: 'AI Â· Infrastructure Â· Fullstack',

  avatarSrc: '/georgia-rachel-pond-portfolio/avatar.svg',

  verifiedLabel: 'Computer Engineering Â· Summa Cum Laude',

  email: 'georgiarachelbusiness@gmail.com',

  location: 'Philippines Â· UTC+8',

  // Pick any icon from https://phosphoricons.com and import it above.

  stats: [

    { value: '03', label: 'Compute nodes', Icon: Briefcase },

    { value: '14', label: 'Credentials', Icon: SealCheck },

    { value: 'UTC+8', label: 'Philippines', Icon: Clock },

  ],

  // The intro types this line, then flies it into the Home headline.

  // Keep it short: two halves, 5-8 words total.

  displayName: { line1: 'Built from', line2: 'the metal up.' },

  hero: {

    body: 'AI systems, infrastructure engineering & fullstack development. From bare-metal clusters to autonomous voice agents. Curious about every layer.',

    portraitSrc: '/georgia-rachel-pond-portfolio/avatar.svg',

    portraitAlt: 'Georgia Rachel monogram',

  },

  socials: [

    { label: 'GitHub profile', href: 'https://github.com/georgiarachel07', iconPath: '/georgia-rachel-pond-portfolio/icons/gr-github.svg' },

    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/georgia-rachel-pernia/', iconPath: '/georgia-rachel-pond-portfolio/icons/linkedin.svg' },

    { label: 'Email Georgia', href: 'mailto:georgiarachelbusiness@gmail.com', iconPath: '/georgia-rachel-pond-portfolio/icons/gr-mail.svg' },

  ],

}

