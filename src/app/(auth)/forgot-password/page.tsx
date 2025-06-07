import Link from "next/link";
import { ForgotPasswordForm } from "@/services/auth/forms/forgot-password-form";

export default function Page() {
  return (
    <section className="flex size-full items-center justify-center">
      <div className="flex w-full max-w-lg flex-col gap-y-8 rounded-xl bg-white px-5 py-6 shadow-xs sm:p-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Forgot your password?</h1>
          <p className="text-sm text-gray-500">
            Please enter the email address associated with your account so we can send you a link to reset your
            password.
          </p>
        </div>
        <ForgotPasswordForm />
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
