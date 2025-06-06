import { Form as RForm } from "radix-ui";

interface SubmitProps extends RForm.FormSubmitProps {}

export function Submit(props: SubmitProps) {
  return <RForm.Submit {...props} />;
}
