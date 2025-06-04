import { Form as RForm } from "radix-ui";

interface LabelProps extends Omit<RForm.FormLabelProps, "asChild"> {}

export function Label(props: LabelProps) {
  return <RForm.Label {...props} />;
}
