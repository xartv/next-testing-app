"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navigation.css";
import { useSession, signOut } from "next-auth/react";

export type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  const isAuth = session.status === "authenticated";

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
  return (
    <>
      {content}
      {isAuth && (
        <>
          <Link href={"/profile"}>Profile</Link>
          <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign Out
          </Link>
        </>
      )}
      {!isAuth && <Link href="/api/auth/signin">Sign In</Link>}
    </>
  );
};
