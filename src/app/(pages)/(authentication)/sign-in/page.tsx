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
          <InputGroup>
            <Input type="email" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" data-slot="icon">
              <path d="m14.354 14.146-3.13-3.129a5.507 5.507 0 1 0-.707.707l3.13 3.13a.5.5 0 0 0 .707-.708ZM2.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
            </svg>
          </InputGroup>
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
