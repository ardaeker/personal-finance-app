import { ResetPasswordForm } from "@/services/auth/forms/reset-password";

export default function Page() {
  return (
    <section className="flex size-full items-center justify-center">
      <div className="flex w-full max-w-lg flex-col gap-y-8 rounded-xl bg-white px-5 py-6 shadow-xs sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Reset your password</h1>
        <ResetPasswordForm />
      </div>
    </section>
  );
}
