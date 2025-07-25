import React, { forwardRef } from "react";
import * as Headless from "@headlessui/react";
import { classNames } from "@/utils/class-names";

const styles = {
  base: [
    "relative isolate inline-flex items-baseline justify-center gap-x-3 rounded-lg border text-sm/6 font-bold px-[calc(--spacing(4)-1px)] py-[calc(--spacing(3)-1px)] focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-gray-700 data-disabled:opacity-50 transition-colors",
  ],
  primary: ["border-transparent bg-gray-900 hover:bg-gray-500 text-white"],
  secondary: ["border-transparent bg-beige-100 hover:bg-transparent hover:border-beige-500 text-gray-900"],
  destroy: ["border-transparent bg-red-500 hover:bg-red-500/80 text-white"],
  tertiary: [
    "border-transparent bg-transparent text-gray-500 hover:text-gray-900 *:data-[slot=icon]:size-3 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:fill-gray-500 hover:*:data-[slot=icon]:fill-gray-900",
  ],
};

type ButtonProps = (
  | { secondary?: never; tertiary?: never; destroy?: never }
  | { secondary: true; tertiary?: never; destroy?: never }
  | { secondary?: never; tertiary: true; destroy?: never }
  | { secondary?: never; tertiary?: never; destroy: true }
) & { className?: string; children: React.ReactNode } & Omit<Headless.ButtonProps, "as" | "className">;

export const Button = forwardRef(function Button(
  { secondary, tertiary, destroy, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classes = classNames(
    styles.base,
    secondary ? styles.secondary : tertiary ? styles.tertiary : destroy ? styles.destroy : classNames(styles.primary),
    className,
  );

  return (
    <Headless.Button {...props} className={classNames(classes, "cursor-pointer")} ref={ref}>
      {children}
    </Headless.Button>
  );
});
