import { Form as RForm } from "radix-ui";

interface LabelProps extends Omit<RForm.FormLabelProps, "asChild"> {}

export function Label(props: LabelProps) {
  return (
    <RForm.Label
      className="inline-block text-sm font-bold text-gray-500 select-none group-has-disabled:opacity-50"
      {...props}
    />
  );
}
