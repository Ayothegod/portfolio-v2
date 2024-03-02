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

export const mockProjects = [
  {
    icon: "",
    image: "",
    title:"Subbi –– The free subscriptions manager",
    description:"Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    link:"http://ayomide.me",
    github:"http://ayomide.me"
  }
]