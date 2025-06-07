import { Button } from "@/components/button";
import { Description } from "@/components/form/description";
import { Field } from "@/components/form/field";
import { Form } from "@/components/form/form";
import { Label } from "@/components/form/label";
import { Message } from "@/components/form/message";
import { PasswordInput } from "@/components/form/password-input";
import { Submit } from "@/components/form/submit";

export function ResetPasswordForm() {
  return (
    <Form>
      <Field name="password">
        <Label>Password</Label>
        <Description>Passwords must be at least 8 characters</Description>
        <PasswordInput minLength={8} pattern="^\S+$" required />
        <Message match="valueMissing">Please enter your password.</Message>
        <Message match="tooShort">Your password must be at least 8 characters long.</Message>
        <Message match="patternMismatch">Spaces are not allowed in your password.</Message>
      </Field>
      <Field name="password-confirm">
        <Label>Password confirm</Label>
        <PasswordInput minLength={8} pattern="^\S+$" required />
        <Message match="valueMissing">Please enter your password.</Message>
        <Message match="tooShort">Your password must be at least 8 characters long.</Message>
        <Message match="patternMismatch">Spaces are not allowed in your password.</Message>
      </Field>
      <Submit asChild>
        <Button className="mt-4 w-full">Reset password</Button>
      </Submit>
    </Form>
  );
}
