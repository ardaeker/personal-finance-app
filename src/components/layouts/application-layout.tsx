"use client";

import Link from "next/link";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "motion/react";
import { classNames } from "@/utils/class-names";

const routes = [
  {
    title: "Overview",
    href: "/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" {...props}>
        <path d="M21.3 10.833V19.5a1.5 1.5 0 0 1-1.5 1.5h-3.75a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3.75a1.5 1.5 0 0 1-1.5 1.5H4.8a1.5 1.5 0 0 1-1.5-1.5v-8.667a1.5 1.5 0 0 1 .485-1.105l7.5-7.076.01-.01a1.5 1.5 0 0 1 2.029.01l7.5 7.076a1.5 1.5 0 0 1 .476 1.105Z" />
      </svg>
    ),
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
        <path d="M12.093 16.213a.751.751 0 0 1-.162.818l-3 3a.748.748 0 0 1-1.062 0l-3-3a.75.75 0 0 1 .53-1.281h2.25V4.5a.75.75 0 0 1 1.5 0v11.25h2.25a.75.75 0 0 1 .694.463ZM20.93 6.97l-3-3a.75.75 0 0 0-1.062 0l-3 3a.75.75 0 0 0 .53 1.281h2.25V19.5a.75.75 0 0 0 1.5 0V8.25h2.25a.75.75 0 0 0 .532-1.28Z" />
      </svg>
    ),
  },
  {
    title: "Budgets",
    href: "/budgets",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
        <path d="M2.82 10.832a9.592 9.592 0 0 1 2.186-5.04 1.5 1.5 0 0 1 2.215-.103l2.594 2.65a1.488 1.488 0 0 1 .158 1.92 2.4 2.4 0 0 0-.346.726.375.375 0 0 1-.359.265H3.193a.376.376 0 0 1-.373-.418Zm10.56-8.576a1.5 1.5 0 0 0-1.63 1.494v3.813a1.487 1.487 0 0 0 1.242 1.477 3 3 0 0 1 .507 5.79.381.381 0 0 0-.249.357v6.116a.375.375 0 0 0 .418.375 9.782 9.782 0 0 0 8.582-9.54c.07-5.089-3.826-9.43-8.87-9.882Zm-1.888 12.572a3.001 3.001 0 0 1-1.819-1.821.38.38 0 0 0-.356-.257H3.193a.374.374 0 0 0-.375.417 9.76 9.76 0 0 0 8.514 8.514.375.375 0 0 0 .417-.375v-6.119a.38.38 0 0 0-.257-.36Z" />
      </svg>
    ),
  },
  {
    title: "Pots",
    href: "/pots",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
        <path d="M17.35 4.576V3a1.5 1.5 0 0 0-1.5-1.5h-7.5A1.5 1.5 0 0 0 6.85 3v1.576a3.755 3.755 0 0 0-3 3.674v10.5A3.75 3.75 0 0 0 7.6 22.5h9a3.75 3.75 0 0 0 3.75-3.75V8.25a3.755 3.755 0 0 0-3-3.674ZM11.35 3h1.5v1.5h-1.5V3Zm-3 0h1.5v1.5h-1.5V3Zm4.5 14.25V18a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 1 1 0-1.5h2.25a.75.75 0 1 0 0-1.5h-1.5a2.25 2.25 0 0 1 0-4.5V9a.75.75 0 1 1 1.5 0v.75h.75a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 1 0 0 1.5h1.5a2.25 2.25 0 0 1 0 4.5Zm3-12.75h-1.5V3h1.5v1.5Z" />
      </svg>
    ),
  },
  {
    title: "Recurring bills",
    href: "/recurring-bills",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
        <path d="M20.95 3.75H4.45a1.5 1.5 0 0 0-1.5 1.5V19.5a.75.75 0 0 0 1.086.67L6.7 18.838l2.664 1.332a.75.75 0 0 0 .672 0l2.664-1.332 2.664 1.332a.75.75 0 0 0 .672 0l2.664-1.332 2.664 1.332a.75.75 0 0 0 1.086-.67V5.25a1.5 1.5 0 0 0-1.5-1.5ZM17.2 13.5h-9a.75.75 0 1 1 0-1.5h9a.75.75 0 0 1 0 1.5Zm0-3h-9a.75.75 0 1 1 0-1.5h9a.75.75 0 0 1 0 1.5Z" />
      </svg>
    ),
  },
];

function MobileNavbarItem({ route, current }: { current?: boolean; route: (typeof routes)[0] }) {
  return (
    <span key={route.href} className="relative size-full flex-1">
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="bg-beige-100 absolute inset-0 rounded-t-lg border-b-4 border-green-500"
        />
      )}

      <div className="h-11 w-full md:h-16.5">
        <Link
          href={route.href}
          aria-label={`Go to ${route.title} page`}
          data-current={current ? "true" : undefined}
          className="relative flex size-full items-center justify-center md:flex-col md:gap-x-1"
        >
          <route.icon
            className={classNames(
              "h-5 w-5 transition-colors duration-200",
              current ? "fill-green-500" : "fill-gray-300",
            )}
            aria-hidden
          />
          <span
            className={classNames(
              "hidden text-xs leading-4.5 font-bold transition-colors duration-200 md:block",
              current ? "text-gray-900" : "text-gray-300",
            )}
          >
            {route.title}
          </span>
        </Link>
      </div>
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
          {routes.map((route) => {
            const current = route.href === "/" ? pathname === "/" : pathname.startsWith(route.href);
            return <MobileNavbarItem key={route.href} route={route} current={current} />;
          })}
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
