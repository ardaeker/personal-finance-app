import { Button } from "@/components/button";
import { Description } from "@/components/form/description";
import { Field } from "@/components/form/field";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { PasswordInput } from "@/components/form/password-input";
import { Submit } from "@/components/form/submit";

export function SignupForm() {
  return (
    <Form>
      <Field name="name">
        <Label>Name</Label>
        <Input type="text" required />
      </Field>
      <Field name="email">
        <Label>Email</Label>
        <Input type="email" required />
      </Field>
      <Field name="password">
        <Label>Password</Label>
        <Description>Passwords must be at least 8 characters</Description>
        <PasswordInput required />
      </Field>
      <Submit asChild>
        <Button className="mt-4 w-full">Create Account</Button>
      </Submit>
    </Form>
  );
}
