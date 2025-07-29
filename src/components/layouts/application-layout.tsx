"use client";

import Link from "next/link";
import { useCallback, useId, useState } from "react";
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
          <svg xmlns="http://www.w3.org/2000/svg" width="122" height="22" viewBox="0 0 122 22" fill="none">
            <path
              d="M8.192 21.44H2.176V10.24H0V5.312H2.304C2.944 2.272 5.92 0 11.2 0H12.48V4.288H10.24C8.576 4.288 7.776 4.448 7.808 5.312H12.48V10.24H8.192V21.44Z"
              fill="white"
            />
            <AnimatePresence mode="wait" initial={false}>
              {isExpended && (
                <motion.g
                  key="logo-animation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <path
                    d="M20.1047 3.84H14.0887V0H20.1047V3.84ZM20.1047 21.44H14.0887V5.312H20.1047V21.44Z"
                    fill="white"
                  />
                  <path
                    d="M28.3622 21.44H22.3462V5.312H27.9783V10.208H28.2983C28.6502 7.52 30.4103 4.992 34.7303 4.992C39.0823 4.992 41.1302 7.616 41.1302 11.104V21.44H35.1143V13.312C35.1143 11.072 34.2822 10.368 31.6582 10.368C29.0022 10.368 28.3622 11.04 28.3622 13.12V21.44Z"
                    fill="white"
                  />
                  <path
                    d="M48.4447 21.76C44.7967 21.76 42.7487 20.096 42.7487 17.344C42.7487 15.072 44.3167 13.44 47.9647 13.088L54.5247 12.448V12.128C54.5247 10.496 53.8208 10.24 51.6768 10.24C49.6927 10.24 49.0848 10.624 49.0848 11.968V12.096H43.0687V12.032C43.0687 7.744 46.6527 4.992 52.1247 4.992C57.7567 4.992 60.4767 7.744 60.4767 12.256V21.44H54.8447V18.048H54.5247C53.9167 20.32 51.9327 21.76 48.4447 21.76ZM48.7967 16.96C48.7967 17.472 49.3087 17.568 50.2367 17.568C53.1487 17.568 54.3327 17.216 54.4927 15.776L49.5648 16.352C49.0208 16.416 48.7967 16.608 48.7967 16.96Z"
                    fill="white"
                  />
                  <path
                    d="M68.596 21.44H62.58V5.312H68.212V10.208H68.532C68.884 7.52 70.644 4.992 74.964 4.992C79.316 4.992 81.364 7.616 81.364 11.104V21.44H75.348V13.312C75.348 11.072 74.516 10.368 71.892 10.368C69.236 10.368 68.596 11.04 68.596 13.12V21.44Z"
                    fill="white"
                  />
                  <path
                    d="M92.5185 21.76C86.7905 21.76 83.1425 18.592 83.1425 13.376C83.1425 8.128 86.7905 4.992 92.5185 4.992C98.0225 4.992 101.542 7.808 101.542 12.128V12.64H95.5585V12.384C95.5585 10.72 94.3425 10.368 92.3905 10.368C90.1825 10.368 89.1265 10.848 89.1265 13.376C89.1265 15.872 90.1825 16.352 92.3905 16.352C94.3425 16.352 95.5585 16.032 95.5585 14.368V14.08H101.542V14.624C101.542 18.912 98.0225 21.76 92.5185 21.76Z"
                    fill="white"
                  />
                  <path
                    d="M112.462 21.76C106.99 21.76 103.15 19.424 103.15 13.376C103.15 8.128 106.958 4.992 112.334 4.992C117.902 4.992 121.454 7.776 121.454 12.96C121.454 13.504 121.422 13.92 121.358 14.496H108.718C108.814 16.448 109.678 16.992 112.238 16.992C114.67 16.992 115.31 16.576 115.31 15.616V15.264H121.326V15.648C121.326 19.232 117.902 21.76 112.462 21.76ZM112.206 9.6C109.998 9.6 109.07 10.08 108.814 11.456H115.63C115.406 10.08 114.446 9.6 112.206 9.6Z"
                    fill="white"
                  />
                </motion.g>
              )}
            </AnimatePresence>
          </svg>
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

type ApplicationLayoutProps = {
  defaultOpen: boolean;
  children: React.ReactNode;
};

export function ApplicationLayout({ defaultOpen, children }: ApplicationLayoutProps) {
  const [isExpended, setIsExpended] = useState(defaultOpen);

  const handleSidebarExpend = useCallback(
    (value: boolean) => {
      setIsExpended(value);

      document.cookie = `sidebar_state=${value}; path=/; max-age=60 * 60 * 24 * 7`;
    },
    [isExpended],
  );

  return (
    <div className="relative min-h-screen xl:flex">
      <div className="hidden xl:block">
        <Sidebar isExpended={isExpended} setIsExpended={handleSidebarExpend} />
      </div>
      <div className="pb-13 md:pb-18.5 xl:mx-auto xl:max-w-285 xl:flex-1 xl:pb-0">
        <div className="px-4 py-6 md:px-10 md:py-8">{children}</div>
      </div>
      <div className="fixed right-0 bottom-0 left-0 xl:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
