import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Field, Label } from "@/components/form/field";
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-[2rem] leading-[2.4rem] font-bold text-gray-900">Forgot your password?</h1>
      <p className="text-sm text-gray-500">
        Please enter your email address below and we will send you a link to reset your password.
      </p>
      <form className="space-y-4">
        <Field>
          <Label>Email</Label>
          <Input type="email" />
        </Field>
        <Button className="mt-4 w-full">Send Reset Link</Button>
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
