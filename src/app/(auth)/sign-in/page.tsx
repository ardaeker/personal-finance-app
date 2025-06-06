import { SigninForm } from "@/services/auth/forms/signin-form";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex size-full items-center justify-center">
      <div className="flex w-full max-w-lg flex-col gap-y-8 rounded-xl bg-white px-5 py-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        <SigninForm />
        <p className="text-center text-sm text-gray-500">
          Need to create an account?{" "}
          <Link
            href="/sign-up"
            className="inline-block font-bold text-gray-900 underline hover:text-gray-900/80 hover:no-underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
