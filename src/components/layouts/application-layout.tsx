"use client";

import Link from "next/link";
import { useId } from "react";
import * as Icons from "@/assets/icons";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "motion/react";
import { classNames } from "@/utils/class-names";

function NavbarItemLabel(props: Omit<React.HTMLAttributes<HTMLSpanElement>, "className">) {
  return <span className="hidden text-xs leading-4.5 font-bold transition-colors duration-200 md:block" {...props} />;
}

function MobileNavbarItem({ href, current, children }: { href: string; current?: boolean; children: React.ReactNode }) {
  return (
    <span key={href} className="relative size-full flex-1 cursor-pointer">
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="bg-beige-100 absolute inset-0 rounded-t-lg border-b-4 border-green-500"
        />
      )}

      <Link
        href={href}
        data-current={current ? "true" : undefined}
        className={classNames(
          "relative flex size-full items-center justify-center *:data-[slot=icon]:size-5 *:data-[slot=icon]:transition-colors *:data-[slot=icon]:duration-200 md:flex-col md:gap-x-1",
          current
            ? "text-gray-900 *:data-[slot=icon]:fill-green-500"
            : "text-gray-300 *:data-[slot=icon]:fill-gray-300",
        )}
      >
        {children}
      </Link>
    </span>
  );
}

function MobileNavbar() {
  let id = useId();
  const pathname = usePathname();

  return (
    <LayoutGroup id={id}>
      <div>
        <nav className="flex h-13 w-full items-center justify-between rounded-t-lg bg-gray-900 px-4 pt-2 md:h-18.5 md:px-10">
          <MobileNavbarItem href="/" current={pathname === "/"}>
            <Icons.House />
            <NavbarItemLabel>Overview</NavbarItemLabel>
          </MobileNavbarItem>
          <MobileNavbarItem href="/transactions" current={pathname.startsWith("/transactions")}>
            <Icons.ArrowsDownUp />
            <NavbarItemLabel>Transactions</NavbarItemLabel>
          </MobileNavbarItem>
          <MobileNavbarItem href="/budgets" current={pathname.startsWith("/budgets")}>
            <Icons.ChartDonut />
            <NavbarItemLabel>Budgets</NavbarItemLabel>
          </MobileNavbarItem>
          <MobileNavbarItem href="/pots" current={pathname.startsWith("/pots")}>
            <Icons.JarFill />
            <NavbarItemLabel>Pots</NavbarItemLabel>
          </MobileNavbarItem>
          <MobileNavbarItem href="/recurring-bills" current={pathname.startsWith("/recurring-bills")}>
            <Icons.Receipt />
            <NavbarItemLabel>Recurring bills</NavbarItemLabel>
          </MobileNavbarItem>
        </nav>
      </div>
    </LayoutGroup>
  );
}

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export function ApplicationLayout({ children }: ApplicationLayoutProps) {
  return (
    <div className="relative">
      <div className="pb-13 md:pb-18.5 xl:pb-0">{children}</div>
      <div className="fixed right-0 bottom-0 left-0 xl:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
