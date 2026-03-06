import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/cloudsofsushi',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/sushmitanitk',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://x.com/',
    label: 'X',
    icon: faTwitter,
  },
  {
    link: 'mailto:sushmita7988@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
