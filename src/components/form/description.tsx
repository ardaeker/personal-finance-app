import { Form as RForm } from "radix-ui";

interface DescriptionProps extends Omit<RForm.FormMessageProps, "asChild" | "match"> {}

export function Description(props: DescriptionProps) {
  return <RForm.Message className="block text-sm text-gray-500 group-has-disabled:opacity-50" {...props} />;
}
