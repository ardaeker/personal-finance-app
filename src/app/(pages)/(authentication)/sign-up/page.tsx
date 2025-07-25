import Link from "next/link";
import { Button } from "@/components/form/button";
import { Description, Field, Label } from "@/components/form/field";
import { Input } from "@/components/form/input";

export default function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-[2rem] leading-[2.4rem] font-bold text-gray-900">Sign Up</h1>
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
      <p className="text-center text-sm/5 text-gray-500">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-bold text-gray-900 underline hover:no-underline">
          Login
        </Link>
      </p>
    </main>
  );
}
