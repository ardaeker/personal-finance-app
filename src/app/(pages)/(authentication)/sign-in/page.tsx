import { Button } from "@/components/form/button";
import { Field, Label } from "@/components/form/field";
import { Input, InputGroup } from "@/components/form/input";
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-[2rem] leading-[2.4rem] font-bold text-gray-900">Login</h1>
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
      <p className="text-center text-sm/5 text-gray-500">
        Need to create an account?{" "}
        <Link href="/sign-up" className="font-bold text-gray-900 underline hover:no-underline">
          Sign Up
        </Link>
      </p>
    </main>
  );
}
