import React from "react";
import { FormNav, NavList, NavItem } from "../../styles/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export const UserFormNav = () => {
  const pathname = useRouter().pathname;

  return (
    <FormNav>
      <NavList>
        <NavItem current={pathname === "/signup" ? true : false}>
          <Link href="/signup">
            <a>User</a>
          </Link>
        </NavItem>
        <NavItem current={pathname === "/signup/privacy" ? true : false}>
          <Link href="/signup/privacy">
            <a>Privacy</a>
          </Link>
        </NavItem>
        <NavItem current={pathname === "/signup/done" ? true : false}>
          <Link href="/signup/done">
            <a>Done</a>
          </Link>
        </NavItem>
      </NavList>
    </FormNav>
  );
};
