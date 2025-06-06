import Image from "next/image";

function FinanceLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={121.45} height={21.76} fill="none" {...props}>
      <path
        fill="#fff"
        d="M8.192 21.44H2.176v-11.2H0V5.312h2.304C2.944 2.272 5.92 0 11.2 0h1.28v4.288h-2.24c-1.664 0-2.464.16-2.432 1.024h4.672v4.928H8.192v11.2ZM20.105 3.84h-6.016V0h6.016v3.84Zm0 17.6h-6.016V5.312h6.016V21.44ZM28.362 21.44h-6.016V5.312h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112V21.44h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752v8.32ZM48.445 21.76c-3.648 0-5.696-1.664-5.696-4.416 0-2.272 1.568-3.904 5.216-4.256l6.56-.64v-.32c0-1.632-.704-1.888-2.848-1.888-1.984 0-2.592.384-2.592 1.728v.128h-6.016v-.064c0-4.288 3.584-7.04 9.056-7.04 5.632 0 8.352 2.752 8.352 7.264v9.184h-5.632v-3.392h-.32c-.608 2.272-2.592 3.712-6.08 3.712Zm.352-4.8c0 .512.512.608 1.44.608 2.912 0 4.096-.352 4.256-1.792l-4.928.576c-.544.064-.768.256-.768.608ZM68.596 21.44H62.58V5.312h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112V21.44h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752v8.32ZM92.519 21.76c-5.729 0-9.377-3.168-9.377-8.384 0-5.248 3.648-8.384 9.377-8.384 5.503 0 9.023 2.816 9.023 7.136v.512h-5.984v-.256c0-1.664-1.216-2.016-3.168-2.016-2.207 0-3.264.48-3.264 3.008 0 2.496 1.056 2.976 3.264 2.976 1.953 0 3.168-.32 3.168-1.984v-.288h5.984v.544c0 4.288-3.52 7.136-9.023 7.136ZM112.462 21.76c-5.472 0-9.312-2.336-9.312-8.384 0-5.248 3.808-8.384 9.184-8.384 5.568 0 9.12 2.784 9.12 7.968 0 .544-.032.96-.096 1.536h-12.64c.096 1.952.96 2.496 3.52 2.496 2.432 0 3.072-.416 3.072-1.376v-.352h6.016v.384c0 3.584-3.424 6.112-8.864 6.112Zm-.256-12.16c-2.208 0-3.136.48-3.392 1.856h6.816c-.224-1.376-1.184-1.856-3.424-1.856Z"
      />
    </svg>
  );
}

export default function Layout({ children }: Layout) {
  return (
    <main className="flex min-h-screen flex-col xl:flex-row">
      <header className="xl:p-5">
        <div className="rounded-b-lg bg-gray-900 max-xl:px-10 max-xl:py-6 xl:h-full xl:overflow-hidden xl:rounded-xl">
          {/* Mobile Header */}
          <div className="flex items-center justify-center xl:hidden">
            <h1 className="sr-only xl:hidden">Finance</h1>
            <FinanceLogo aria-hidden="true" />
          </div>
          {/* Desktop Header */}
          <div className="relative isolate hidden h-full w-full max-w-140 flex-col justify-between p-10 xl:flex">
            <Image src="/images/auth-illustration.png" alt="" className="-z-10 hidden xl:block" fill priority />
            <div>
              <h1 className="hidden xl:sr-only">Finance</h1>
              <FinanceLogo aria-hidden="true" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Keep track of your money and save for your future</h2>
              <p className="text-sm text-white">
                Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to
                savings pots easily.
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Page Content */}
      <div className="flex-1 px-4 py-6 md:px-10 md:py-8">{children}</div>
    </main>
  );
}
