import { Button } from "@/components/button";
import { Field } from "@/components/form/field";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { PasswordInput } from "@/components/form/password-input";
import { Submit } from "@/components/form/submit";

export function SigninForm() {
  return (
    <Form>
      <Field name="email">
        <Label>Email</Label>
        <Input type="email" required />
      </Field>
      <Field name="password">
        <Label>Password</Label>
        <PasswordInput required />
      </Field>
      <Submit asChild>
        <Button className="mt-4 w-full">Login</Button>
      </Submit>
    </Form>
  );
}
