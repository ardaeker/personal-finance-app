import type React from "react";
import * as Headless from "@headlessui/react";
import { classNames } from "@/utils/class-names";

export function Field({ className, ...props }: { className?: string } & Omit<Headless.FieldProps, "as" | "className">) {
  return (
    <Headless.Field
      {...props}
      className={classNames(
        className,
        "[&>[data-slot=label]+[data-slot=control]]:mt-2",
        "[&>[data-slot=label]+[data-slot=description]]:mt-1",
        "[&>[data-slot=description]+[data-slot=control]]:mt-3",
        "[&>[data-slot=control]+[data-slot=description]]:mt-3",
        "[&>[data-slot=control]+[data-slot=error]]:mt-3",
        "*:data-[slot=label]:font-medium",
      )}
    />
  );
}

export function Label({ className, ...props }: { className?: string } & Omit<Headless.LabelProps, "as" | "className">) {
  return (
    <Headless.Label
      data-slot="label"
      {...props}
      className={classNames(className, "text-sm/6 text-gray-500 select-none data-disabled:opacity-50")}
    />
  );
}

export function Description({
  className,
  ...props
}: { className?: string } & Omit<Headless.DescriptionProps, "as" | "className">) {
  return (
    <Headless.Description
      data-slot="description"
      {...props}
      className={classNames(className, "text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6")}
    />
  );
}

export function ErrorMessage({
  className,
  ...props
}: { className?: string } & Omit<Headless.DescriptionProps, "as" | "className">) {
  return (
    <Headless.Description
      data-slot="error"
      {...props}
      className={classNames(className, "text-base/6 text-red-500 data-disabled:opacity-50 sm:text-sm/6")}
    />
  );
}
