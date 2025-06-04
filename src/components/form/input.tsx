import { classNames } from "@/utils/classNames";
import { Form as RForm } from "radix-ui";

interface InputProps extends Omit<RForm.FormControlProps, "asChild"> {}

export function Input(props: InputProps) {
  return (
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
        className={classNames([
          "relative block w-full appearance-none rounded-lg px-[calc(--spacing(5)-1px)] py-[calc(--spacing(3)-1px)]",
          "placeholder:text-beige-500 text-sm text-gray-900",
          "border border-gray-500/40 hover:border-gray-500/60",
          "bg-transparent",
          "focus:outline-hidden",
          "data-invalid:border-red-500 data-invalid:data-hover:border-red-500",
          "disabled:border-gray-900/20",
          "data-disabled:border-zinc-950/20",
        ])}
        {...props}
      />
    </span>
  );
}

interface InputGroupProps {
  children: React.ReactNode;
}

export function InputGroup({ children }: InputGroupProps) {
  return <span>{children}</span>;
}
