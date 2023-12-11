import { NavLink, Navigation } from "./Navigation";

const navItems: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};
