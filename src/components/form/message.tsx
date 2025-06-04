import { Form as RForm } from "radix-ui";

interface MessageProps extends Omit<RForm.FormMessageProps, "asChild"> {}

export function Message(props: MessageProps) {
  return <RForm.Message {...props} />;
}
