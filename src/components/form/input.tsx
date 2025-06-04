import { Form as RForm } from "radix-ui";

interface InputProps extends Omit<RForm.FormControlProps, "asChild"> {}

export function Input(props: InputProps) {
  return <RForm.Control {...props} />;
}

interface InputGroupProps {
  children: React.ReactNode;
}

export function InputGroup({ children }: InputGroupProps) {
  return <span>{children}</span>;
}
