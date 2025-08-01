import Link from "next/link";
import { SignupForm } from "@/features/authentication/forms";

export function SignupPage() {
  return (
    <main className="space-y-8">
      <h1 className="text-[2rem] leading-[2.4rem] font-bold text-gray-900">Sign Up</h1>
      <SignupForm />
      <p className="text-center text-sm/5 text-gray-500">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-bold text-gray-900 underline hover:no-underline">
          Login
        </Link>
      </p>
    </main>
  );
}
