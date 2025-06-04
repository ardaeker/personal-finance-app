import { Form as RForm } from "radix-ui";

interface FieldProps extends Omit<RForm.FormFieldProps, "asChild"> {}

export function Field(props: FieldProps) {
  return <RForm.Field className="group space-y-2" {...props} />;
}
