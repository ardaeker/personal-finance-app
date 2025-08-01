import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Description, Field, Label } from "@/components/form/field";

export function SignupForm() {
  return (
    <form className="space-y-4">
      <Field>
        <Label>Name</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="email" />
      </Field>
      <Field>
        <Label>Create Password</Label>
        <Input type="password" />
        <Description>Passwords must be at least 8 characters</Description>
      </Field>
      <Button className="mt-4 w-full">Create Account</Button>
    </form>
  );
}
