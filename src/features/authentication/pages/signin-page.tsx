import Link from "next/link";

import { SigninForm } from "@/features/authentication/forms";

export function SigninPage() {
  return (
    <main className="space-y-8">
      <h1 className="text-[2rem] leading-[2.4rem] font-bold text-gray-900">Login</h1>
      <SigninForm />
      <div className="space-y-4">
        <p className="text-center text-sm/5 text-gray-500">
          Need to create an account?{" "}
          <Link href="/sign-up" className="font-bold text-gray-900 underline hover:no-underline">
            Sign Up
          </Link>
        </p>
        <Link
          href="/forgot-password"
          className="mx-auto block max-w-max text-center text-sm/5 font-medium text-gray-900 underline hover:no-underline"
        >
          Forgot your password?
        </Link>
      </div>
    </main>
  );
}
