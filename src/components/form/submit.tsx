import { Form as RForm } from "radix-ui";

interface SubmitProps extends Omit<RForm.FormSubmitProps, "asChild"> {}

export function Submit(props: SubmitProps) {
  return <RForm.Submit {...props} />;
}
