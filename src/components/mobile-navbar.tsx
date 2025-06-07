"use client";
import Link from "next/link";
import { SVGProps } from "react";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils/classNames";
import { ArrowsDownUp, ChartDonut, House, JarFill, Receipt } from "@/assets/icons";

const navigationList = [
  { id: 0, title: "Overview", href: "/", Icon: (props: SVGProps<SVGSVGElement>) => <House {...props} /> },
  {
    id: 1,
    title: "Transactions",
    href: "/transactions",
    Icon: (props: SVGProps<SVGSVGElement>) => <ArrowsDownUp {...props} />,
  },
  { id: 2, title: "Budgets", href: "/budgets", Icon: (props: SVGProps<SVGSVGElement>) => <ChartDonut {...props} /> },
  { id: 3, title: "Pots", href: "/pots", Icon: (props: SVGProps<SVGSVGElement>) => <JarFill {...props} /> },
  {
    id: 4,
    title: "Recurring bills",
    href: "/recurring-bills",
    Icon: (props: SVGProps<SVGSVGElement>) => <Receipt {...props} />,
  },
];

export function MobileNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed right-0 bottom-0 left-0 xl:hidden">
      <div className="h-13 w-full rounded-t-lg bg-gray-900 px-4 pt-2 md:h-18.5 md:px-10">
        <nav className="h-full">
          <ul className="flex h-full items-center justify-between">
            {navigationList.map(({ id, title, href, Icon }) => {
              const isActiveRoute = pathname === href;

              return (
                <li
                  key={id}
                  className={classNames(
                    "flex size-full items-center justify-center rounded-t-lg border-b-4 border-transparent",
                    isActiveRoute && "bg-beige-100 border-green-500",
                  )}
                >
                  <Link href={href} className="flex w-full flex-col items-center gap-y-1">
                    <Icon className={classNames("size-6", isActiveRoute ? "fill-green-500" : "fill-gray-300")} />
                    <span
                      className={classNames(
                        "text-xs font-bold max-md:sr-only",
                        isActiveRoute ? "text-gray-900" : "text-gray-300",
                      )}
                    >
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
