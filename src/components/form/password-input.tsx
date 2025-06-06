"use client";

import { Form as RForm } from "radix-ui";
import { Eye, EyeSlash } from "@/assets/icons";
import { classNames } from "@/utils/classNames";
import { useCallback, useEffect, useRef, useState } from "react";

interface PasswordInputProps extends Omit<RForm.FormControlProps, "asChild" | "type"> {}

export function PasswordInput(props: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleTogglePassword = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, [isVisible]);

  // TODO: Handle focus state

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.focus();
  //   }
  // }, [isVisible]);

  return (
    <span className="relative isolate block w-full">
      <span
        className={classNames([
          "relative block w-full",
          "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-gray-500",
          "has-disabled:opacity-50 has-disabled:before:bg-gray-900/5 has-disabled:before:shadow-none",
          "has-data-invalid:before:shadow-red-500/10",
        ])}
      >
        <RForm.Control
          ref={ref}
          className={classNames([
            "relative block w-full appearance-none rounded-lg px-[calc(--spacing(5)-1px)] py-[calc(--spacing(3)-1px)] pr-13",
            "placeholder:text-beige-500 text-sm text-gray-900",
            "border border-gray-500/20 hover:border-gray-500/30",
            "bg-transparent",
            "focus:outline-hidden",
            "data-invalid:border-red-500 data-invalid:data-hover:border-red-500",
            "disabled:border-gray-900/20",
            "data-disabled:border-zinc-950/20",
          ])}
          type={isVisible ? "text" : "password"}
          {...props}
        />
      </span>
      <button
        type="button"
        onClick={handleTogglePassword}
        aria-label={isVisible ? "Hide password" : "Show password"}
        className={classNames([
          "absolute top-1/2 right-3 z-10 h-7 w-7.5 -translate-y-1/2",
          "flex items-center justify-center rounded-lg",
          "bg-transparent hover:bg-gray-100",
          "sm:focus-within:ring-1 sm:focus-within:ring-gray-500",
          "border border-gray-500/30 hover:border-gray-500/40",
          "focus:outline-hidden",
        ])}
      >
        {isVisible ? <EyeSlash className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </span>
  );
}
