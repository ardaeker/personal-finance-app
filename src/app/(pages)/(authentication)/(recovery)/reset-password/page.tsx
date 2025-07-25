import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Description, Field, Label } from "@/components/form/field";

export default function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-[2rem] leading-[2.4rem] font-bold text-gray-900">Reset your password</h1>
      <form className="space-y-4">
        <Field>
          <Label>Password</Label>
          <Input type="password" />
          <Description>Passwords must be at least 8 characters</Description>
        </Field>
        <Field>
          <Label>Confirm Password</Label>
          <Input type="password" />
        </Field>
        <Button className="mt-4 w-full">Reset Password</Button>
      </form>
    </main>
  );
}
