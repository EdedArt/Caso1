export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const leftNavItems: NavItem[] = [
  { label: "HOME", href: "#", active: true },
  { label: "MENU", href: "#menu" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "ORDER ONLINE", href: "#order" },
];

export const rightNavItems: NavItem[] = [
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "MENU", href: "#menu" },
  { label: "CATERING", href: "#catering" },
  { label: "COMMUNITY", href: "#community" },
  { label: "PRIVACY", href: "#privacy" },
  { label: "TERMS", href: "#terms" },
];
