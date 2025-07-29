"use client";

import Link from "next/link";
import { useId, useState } from "react";
import * as Icons from "@/assets/icons";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { classNames } from "@/utils/class-names";

function NavbarItemLabel(props: Omit<React.HTMLAttributes<HTMLSpanElement>, "className">) {
  return <span className="hidden text-xs leading-4.5 font-bold transition-colors duration-300 md:block" {...props} />;
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
          "relative flex size-full items-center justify-center *:data-[slot=icon]:size-5 *:data-[slot=icon]:transition-colors *:data-[slot=icon]:duration-300 md:flex-col md:gap-x-1",
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

type SidebarItemLabelProps = {
  isExpended: boolean;
  children: React.ReactNode;
};

function SidebarItemLabel({ isExpended, children }: SidebarItemLabelProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isExpended ? (
        <motion.span
          key="sidebar-item-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.1, delay: isExpended ? 0.1 : 0 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className={classNames("block flex-1 text-base font-bold transition-colors duration-300")}
        >
          {children}
        </motion.span>
      ) : (
        <span className="sr-only">{children}</span>
      )}
    </AnimatePresence>
  );
}

type SidebarNavigationItem = {
  href: string;
  current: boolean;
  children: React.ReactNode;
};

function SidebarNavigationItem({ href, current, children }: SidebarNavigationItem) {
  return (
    <span className="relative size-full cursor-pointer">
      {current && (
        <motion.span
          layoutId="sidebar-current-indicator"
          className="bg-beige-100 absolute top-0 right-4 bottom-0 left-0 rounded-r-xl"
        >
          <span className="absolute top-0 bottom-0 left-0 w-1 bg-green-500" />
        </motion.span>
      )}
      <Link
        href={href}
        className={classNames(
          "relative flex h-14 items-center gap-x-4 px-6 py-4 *:data-[slot=icon]:size-6 *:data-[slot=icon]:min-h-6 *:data-[slot=icon]:min-w-6 *:data-[slot=icon]:transition-colors *:data-[slot=icon]:duration-300",
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

type SidebarNavigationProps = {
  isExpended: boolean;
};

function SidebarNavigation({ isExpended }: SidebarNavigationProps) {
  const id = useId();
  const pathname = usePathname();
  return (
    <LayoutGroup id={id}>
      <nav className={classNames("flex flex-col gap-y-1")}>
        <SidebarNavigationItem href="/" current={pathname === "/"}>
          <Icons.House />
          <SidebarItemLabel isExpended={isExpended}>Overview</SidebarItemLabel>
        </SidebarNavigationItem>
        <SidebarNavigationItem href="/transactions" current={pathname.startsWith("/transactions")}>
          <Icons.ArrowsDownUp />
          <SidebarItemLabel isExpended={isExpended}>Transactions</SidebarItemLabel>
        </SidebarNavigationItem>
        <SidebarNavigationItem href="/budgets" current={pathname.startsWith("/budgets")}>
          <Icons.ChartDonut />
          <SidebarItemLabel isExpended={isExpended}>Budgets</SidebarItemLabel>
        </SidebarNavigationItem>
        <SidebarNavigationItem href="/pots" current={pathname.startsWith("/pots")}>
          <Icons.JarFill />
          <SidebarItemLabel isExpended={isExpended}>Pots</SidebarItemLabel>
        </SidebarNavigationItem>
        <SidebarNavigationItem href="/recurring-bills" current={pathname.startsWith("/recurring-bills")}>
          <Icons.Receipt />
          <SidebarItemLabel isExpended={isExpended}>Recurring bills</SidebarItemLabel>
        </SidebarNavigationItem>
      </nav>
    </LayoutGroup>
  );
}

type SidebarProps = {
  isExpended: boolean;
  setIsExpended: (value: boolean) => void;
};

function Sidebar({ isExpended, setIsExpended }: SidebarProps) {
  return (
    <motion.div
      initial={{ width: isExpended ? 300 : 88 }}
      animate={{ width: isExpended ? 300 : 88, transition: { duration: 0.2, delay: isExpended ? 0 : 0.1 } }}
      className="h-full overflow-hidden rounded-r-2xl bg-gray-900"
    >
      <div className="flex h-full flex-col gap-y-6">
        <div className="px-8 py-10">
          {isExpended ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={122} height={22} fill="none">
              <path
                fill="#fff"
                d="M8.192 21.44H2.176v-11.2H0V5.312h2.304C2.944 2.272 5.92 0 11.2 0h1.28v4.288h-2.24c-1.664 0-2.464.16-2.432 1.024h4.672v4.928H8.192v11.2ZM20.105 3.84h-6.016V0h6.016v3.84Zm0 17.6h-6.016V5.312h6.016V21.44ZM28.362 21.44h-6.016V5.312h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112V21.44h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752v8.32ZM48.445 21.76c-3.648 0-5.696-1.664-5.696-4.416 0-2.272 1.568-3.904 5.216-4.256l6.56-.64v-.32c0-1.632-.704-1.888-2.848-1.888-1.984 0-2.592.384-2.592 1.728v.128h-6.016v-.064c0-4.288 3.584-7.04 9.056-7.04 5.632 0 8.352 2.752 8.352 7.264v9.184h-5.632v-3.392h-.32c-.608 2.272-2.592 3.712-6.08 3.712Zm.352-4.8c0 .512.512.608 1.44.608 2.912 0 4.096-.352 4.256-1.792l-4.928.576c-.544.064-.768.256-.768.608ZM68.596 21.44H62.58V5.312h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112V21.44h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752v8.32ZM92.519 21.76c-5.729 0-9.377-3.168-9.377-8.384 0-5.248 3.648-8.384 9.377-8.384 5.503 0 9.023 2.816 9.023 7.136v.512h-5.984v-.256c0-1.664-1.216-2.016-3.168-2.016-2.207 0-3.264.48-3.264 3.008 0 2.496 1.056 2.976 3.264 2.976 1.953 0 3.168-.32 3.168-1.984v-.288h5.984v.544c0 4.288-3.52 7.136-9.023 7.136ZM112.462 21.76c-5.472 0-9.312-2.336-9.312-8.384 0-5.248 3.808-8.384 9.184-8.384 5.568 0 9.12 2.784 9.12 7.968 0 .544-.032.96-.096 1.536h-12.64c.096 1.952.96 2.496 3.52 2.496 2.432 0 3.072-.416 3.072-1.376v-.352h6.016v.384c0 3.584-3.424 6.112-8.864 6.112Zm-.256-12.16c-2.208 0-3.136.48-3.392 1.856h6.816c-.224-1.376-1.184-1.856-3.424-1.856Z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={13} height={22} fill="none">
              <path
                fill="#fff"
                d="M8.452 21.44H2.436v-11.2H.26V5.312h2.304C3.204 2.272 6.18 0 11.46 0h1.28v4.288H10.5c-1.664 0-2.464.16-2.432 1.024h4.672v4.928H8.452v11.2Z"
              />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <SidebarNavigation isExpended={isExpended} />
        </div>
        <button onClick={() => setIsExpended(!isExpended)} className="flex h-14 items-center gap-x-4 px-8 py-10">
          <motion.svg
            initial={{ rotate: isExpended ? -180 : 0 }}
            animate={{ rotate: isExpended ? -180 : 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className="min-h-5 min-w-5"
            fill="none"
          >
            <path
              fill="#B3B3B3"
              d="M6 14.5v-9a.75.75 0 0 1 .75-.75H9V1a.75.75 0 0 1 1.28-.53l9 9a.748.748 0 0 1 0 1.06l-9 9A.749.749 0 0 1 9 19v-3.75H6.75A.75.75 0 0 1 6 14.5Zm-2.25.75a.75.75 0 0 0 .75-.75v-9a.75.75 0 1 0-1.5 0v9a.75.75 0 0 0 .75.75Zm-3 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 .75.75Z"
            />
          </motion.svg>
          <AnimatePresence mode="wait" initial={false}>
            {isExpended ? (
              <motion.span
                key="sidebar-item-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.1, delay: isExpended ? 0.1 : 0 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className={classNames("block text-base font-bold text-gray-300 transition-colors duration-300")}
              >
                {isExpended ? "Minimize Menu" : "Expand Menu"}
              </motion.span>
            ) : (
              <span className="sr-only">{isExpended ? "Minimize Menu" : "Expand Menu"}</span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export function ApplicationLayout({ children }: ApplicationLayoutProps) {
  const [isExpended, setIsExpended] = useState(true);

  return (
    <div className="relative min-h-screen xl:flex">
      <div className="hidden xl:block">
        <Sidebar isExpended={isExpended} setIsExpended={setIsExpended} />
      </div>
      <div className="pb-13 md:pb-18.5 xl:flex-1 xl:pb-0">{children}</div>
      <div className="fixed right-0 bottom-0 left-0 xl:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
