import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Field, Label } from "@/components/form/field";

export function SigninForm() {
  return (
    <form className="space-y-4">
      <Field>
        <Label>Email</Label>
        <Input type="email" />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" />
      </Field>
      <Button className="mt-4 w-full">Login</Button>
    </form>
  );
}
