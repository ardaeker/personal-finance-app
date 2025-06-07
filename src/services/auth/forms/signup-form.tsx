import { Button } from "@/components/button";
import { Description } from "@/components/form/description";
import { Field } from "@/components/form/field";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { Message } from "@/components/form/message";
import { PasswordInput } from "@/components/form/password-input";
import { Submit } from "@/components/form/submit";

export function SignupForm() {
  return (
    <Form>
      <Field name="name">
        <Label>Name</Label>
        <Input type="text" pattern="^[A-Za-zÀ-ÖØ-öø-ÿĀ-žḀ-ỿ]{2,}[A-Za-zÀ-ÖØ-öø-ÿĀ-žḀ-ỿ'’\- ]*$" required />
        <Message match="valueMissing">Please enter your name.</Message>
        <Message match="patternMismatch">Please provide a valid name.</Message>
      </Field>
      <Field name="email">
        <Label>Email</Label>
        <Input type="email" required />
        <Message match="valueMissing">Please enter your email address.</Message>
        <Message match="typeMismatch">Enter a valid email (e.g. name@example.com).</Message>
      </Field>
      <Field name="password">
        <Label>Password</Label>
        <Description>Passwords must be at least 8 characters</Description>
        <PasswordInput minLength={8} pattern="^\S+$" required />
        <Message match="valueMissing">Please enter your password.</Message>
        <Message match="tooShort">Your password must be at least 8 characters long.</Message>
        <Message match="patternMismatch">Spaces are not allowed in your password.</Message>
      </Field>
      <Submit asChild>
        <Button className="mt-4 w-full">Create Account</Button>
      </Submit>
    </Form>
  );
}
