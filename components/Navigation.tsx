"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navigation.css";

export type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  const content = navLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.label}
        href={link.href}
        className={isActive ? "link_active" : "link"}
      >
        {link.label}
      </Link>
    );
  });
  return <>{content}</>;
};
