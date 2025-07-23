import * as Icons from "@/assets/icons";
import React, { forwardRef } from "react";
import * as Headless from "@headlessui/react";
import { classNames } from "@/utils/class-names";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";

export function InputGroup({ children }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="control"
      className="relative isolate block *:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-1/2 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-4 *:data-[slot=icon]:-translate-y-1/2 *:data-[slot=icon]:text-gray-900 has-[[data-slot=icon]:last-child]:[&_input]:pr-10 [&>[data-slot=icon]:last-child]:right-5"
    >
      {children}
    </span>
  );
}

export const Input = forwardRef(function Input(
  {
    className,
    ...props
  }: {
    className?: string;
    type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  } & Omit<Headless.InputProps, "as" | "className">,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const inputClassNames =
    "relative block w-full appearance-none rounded-lg px-[calc(--spacing(5)-1px)] py-[calc(--spacing(3)-1px)] placeholder:text-beige-500 text-base/6 text-gray-900 md:text-sm/6 border-beige-500/70 data-hover:border-beige-500 border bg-transparent focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20";

  return (
    <span
      data-slot="control"
      className={classNames(
        "relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10 sm:focus-within:after:ring-2 sm:focus-within:after:ring-gray-700",
        className,
      )}
    >
      {props.type === "password" ? (
        <PasswordToggleField.Root>
          <Headless.Input
            as={PasswordToggleField.Input as typeof Headless.Input}
            ref={ref}
            type="password"
            autoCapitalize="none"
            {...props}
            className={classNames(inputClassNames, "pr-10")}
          />

          <PasswordToggleField.Toggle className="absolute top-1/2 right-5 flex h-4 w-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm outline-gray-700 focus-visible:outline-2 focus-visible:outline-offset-3">
            <PasswordToggleField.Slot
              visible={<Icons.EyeSlash className="h-4 w-4 fill-gray-700" />}
              hidden={<Icons.Eye className="h-4 w-4 fill-gray-700" />}
            />
          </PasswordToggleField.Toggle>
        </PasswordToggleField.Root>
      ) : (
        <Headless.Input ref={ref} {...props} className={inputClassNames} />
      )}
    </span>
  );
});
