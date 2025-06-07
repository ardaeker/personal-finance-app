import { Button } from "@/components/button";
import { Description } from "@/components/form/description";
import { Field } from "@/components/form/field";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { Message } from "@/components/form/message";
import { PasswordInput } from "@/components/form/password-input";
import { Submit } from "@/components/form/submit";
import Link from "next/link";

export function SigninForm() {
  return (
    <Form>
      <Field name="email">
        <Label>Email</Label>
        <Input type="email" tabIndex={1} required />
        <Message match="valueMissing">Please enter your email address.</Message>
        <Message match="typeMismatch">Enter a valid email (e.g. name@example.com).</Message>
      </Field>

      <Field name="password">
        <div className="flex items-center justify-between">
          <Label>Password</Label>
          <Link
            href="/forgot-password"
            className="text-xs font-bold text-gray-500 underline hover:text-gray-500/80 hover:no-underline"
          >
            Forgot password?
          </Link>
        </div>
        <PasswordInput tabIndex={2} required />
        <Message match="valueMissing">Please enter your password.</Message>
      </Field>
      <Submit tabIndex={4} asChild>
        <Button className="mt-4 w-full">Login</Button>
      </Submit>
    </Form>
  );
}
