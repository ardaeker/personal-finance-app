import { Button } from "@/components/button";
import { Field } from "@/components/form/field";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { Message } from "@/components/form/message";
import { PasswordInput } from "@/components/form/password-input";
import { Submit } from "@/components/form/submit";

export function SigninForm() {
  return (
    <Form>
      <Field name="email">
        <Label>Email</Label>
        <Input type="email" required />
        <Message match="valueMissing">Please enter your email address.</Message>
        <Message match="typeMismatch">Enter a valid email (e.g. name@example.com).</Message>
      </Field>

      <Field name="password">
        <Label>Password</Label>
        <PasswordInput required />
        <Message match="valueMissing">Please enter your password.</Message>
      </Field>
      <Submit asChild>
        <Button className="mt-4 w-full">Login</Button>
      </Submit>
    </Form>
  );
}
