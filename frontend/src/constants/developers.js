import monishaPhoto from 'assets/illustrations/monishaMemoji.png';
import mangalPhoto from 'assets/illustrations/mangal.png';
import linkedInIcon from 'assets/icons/linkedin.svg';
import githubIcon from 'assets/icons/github.svg';
import earthIcon from 'assets/icons/earth.svg';
import emailIcon from 'assets/icons/email.svg';

export const developers = [
  {
    name: 'Mangalprada Malay',
    role: 'Backend Developer',
    email: {
      id: 'malaydsg@gmail.com',
      icon: emailIcon,
    },
    links: [
      {
        iconLink: 'https://github.com/mangalprada',
        alt: 'Github',
        icon: githubIcon,
      },
      {
        iconLink: 'https://www.linkedin.com/in/mangalprada/',
        alt: 'LinkedIn',
        icon: linkedInIcon,
      },
      {
        iconLink: 'https://skillora.ai/',
        alt: 'Skillora',
        icon: earthIcon,
      },
    ],
    photoSrc: mangalPhoto,
    bio: 'A developer with an entrepreneurial drive to make impactful projects.',
  },
  {
    name: 'Monisha Tarkar',
    role: 'Frontend Developer',
    exp: '3.5 yrs',
    links: [
      {
        iconLink: 'https://github.com/monisha16',
        alt: 'Github',
        icon: githubIcon,
      },
      {
        iconLink: 'https://www.linkedin.com/in/monisha-tarkar/',
        alt: 'LinkedIn',
        icon: linkedInIcon,
      },
      {
        iconLink: 'https://monisha-tarkar.netlify.app/',
        alt: 'Potfolio',
        icon: earthIcon,
      },
    ],
    email: {
      id: 'monishatarkar1625@gmail.com',
      icon: emailIcon,
    },
    photoSrc: monishaPhoto,
    bio: 'Coffee-fueled developer on a mission to build seamless user experiences.',
  },
];
