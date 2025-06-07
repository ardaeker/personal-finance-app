import { Form as RForm } from "radix-ui";

interface FormProps extends Omit<RForm.FormProps, "asChild"> {}

export function Form(props: FormProps) {
  return <RForm.Form className="space-y-5" {...props} />;
}
