import { Logo } from "@/components/logo";
import { Authentication as Illustration } from "@/assets/illustrations";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="3xl:mx-auto 3xl:flex 3xl:max-w-360 3xl:items-center 3xl:justify-center">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        {/* Mobile */}
        <div className="flex items-center justify-center rounded-b-lg bg-gray-900 px-10 py-6 lg:hidden" aria-hidden>
          <Logo />
        </div>

        {/* Desktop */}
        <div className="hidden w-150 items-center justify-center p-5 lg:flex" aria-hidden>
          <div className="3xl:max-h-240 relative size-full overflow-hidden rounded-xl bg-gray-900">
            <Illustration className="absolute inset-0" />
            <div className="relative flex h-full flex-col justify-between p-10">
              <Logo />
              <div className="space-y-6">
                <span className="block text-[2rem] leading-[2.4rem] font-bold text-balance text-white">
                  Keep track of your money and save for your future
                </span>
                <span className="block text-sm leading-[1.3125rem] text-white">
                  Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to
                  savings pots easily.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 py-6 sm:px-10 sm:py-8">
          <div className="w-full max-w-140 rounded-xl bg-white px-5 py-6 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
