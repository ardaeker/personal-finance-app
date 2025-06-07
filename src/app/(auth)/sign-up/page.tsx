import { SignupForm } from "@/services/auth/forms/signup-form";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex size-full items-center justify-center">
      <div className="flex w-full max-w-lg flex-col gap-y-8 rounded-xl bg-white px-5 py-6 shadow-xs sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
        <SignupForm />
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="inline-block font-bold text-gray-900 underline hover:text-gray-900/80 hover:no-underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
