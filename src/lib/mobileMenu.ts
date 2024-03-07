interface Icon {
  href: string;
  icon: string;
  activeIcon?: string;
}

interface DesktopIcon {
  href: string;
  icon: string;
}

interface Nav {
  href: string;
  name: string;
}

interface Project {
  id: number;
  icon: string;
  image: string;
  title: string;
  description: string;
  link: string;
  github: string;
}

export const mobileMenuIcons: Icon[] = [
  {
    href: "/",
    icon: "icons/Home - Outline",
    activeIcon: "icons/Home - Fill",
  },
  {
    href: "/about",
    icon: "icons/User - Outline",
    activeIcon: "icons/User - Fill",
  },
  {
    href: "/work",
    icon: "icons/Bag - Outline",
    activeIcon: "icons/Bag - Fill",
  },
  {
    href: "/notebook",
    icon: "icons/Pen - Outline",
    activeIcon: "icons/Pen - Fill",
  },
  {
    href: "/contact",
    icon: "icons/Message - Outline",
    activeIcon: "icons/Message - Fill",
  },
];

export const desktopNav: Nav[] = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/work",
    name: "Work",
  },
  {
    href: "/notebook",
    name: "Notebook",
  },
  {
    href: "/contact",
    name: "Contact",
  },
  {
    href: "/stack",
    name: "Tech Stack",
  },
  {
    href: "/bookshelf",
    name: "Bookshelf",
  },
];

export const desktopIcon: DesktopIcon[] = [
  {
    href: "/aiiomide/linkedin",
    icon: "icons/LinkedIn",
  },
  {
    href: "https://github.com/ayothegod",
    icon: "icons/Github",
  },
  {
    href: "http://x.com/aiiomide",
    icon: "icons/X",
  },
];

export const mockProjects: Project[] = [
  {
    id: 1,
    icon: "icons/Behance",
    image: "src/assets/tech/subbi.png",
    title: "Subbi –– The free subscriptions manager",
    description:
      "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    link: "http://ayomide.me",
    github: "https://github.com/ayothegod",
  },
  {
    id: 2,
    icon: "icons/Discord",
    image: "src/assets/tech/Parrotxt.png",
    title: "AsciiFolders",
    description:
      "Generate ASCII directory trees from any folder on your machine, customize the way the tree looks, how deep it should go and whether or not to include hidden files",
    link: "http://ayomide.me",
    github: "https://github.com/ayothegod",
  },
  {
    id: 3,
    icon: "icons/Dribbble",
    image: "src/assets/tech/React Docs.png",
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    link: "http://ayomide.me",
    github: "https://github.com/ayothegod",
  },
];
interface KnowMe {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const knowMe: KnowMe[] = [
  {
    id: 1,
    image: "src/assets/tech/My project 2.png",
    title: "About me",
    description: "Who i am and what i do",
    link: "http://ayomide.me",
  },
  {
    id: 2,
    image: "src/assets/tech/Tech Stack.png",
    title: "Tech Stack",
    description: "The dev tools and apps i use",
    link: "http://ayomide.me",
  },
  {
    id: 3,
    image: "src/assets/tech/geist.png",
    title: "Notebook",
    description: "My thoughts, insights, and reflections",
    link: "http://ayomide.me",
  },
  {
    id: 4,
    image: "src/assets/tech/Bookshelf.png",
    title: "Bookshelf",
    description: "Books and pieces of wisdom i've enjoyed reading",
    link: "http://ayomide.me",
  },
];

interface FooterLink {
  title: string;
  href: string;
}

export const footerLinks: FooterLink[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Tech Stack",
    href: "/stack",
  },
  {
    title: "Bookshelf",
    href: "/bookshelf",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export const footerSocials: FooterLink[] = [
  {
    title: "Github",
    href: "https://github.com/ayothegod",
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/aiiomide",
  },
  {
    title: "Discord",
    href: "https://discord.gg/aiiomide",
  },
  {
    title: "Whatsapp",
    href: "/whatsapp",
  },
];
