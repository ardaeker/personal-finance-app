import { Form as RForm } from "radix-ui";

interface DescriptionProps extends Omit<RForm.FormMessageProps, "asChild" | "match"> {}

export function Description(props: DescriptionProps) {
  return <RForm.Message {...props} />;
}
