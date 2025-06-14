import "@/assets/styles/globals.css";
import { sans } from "@/assets/fonts";
import { classNames } from "@/utils/classNames";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={classNames(sans.variable, "antialiased")}>{children}</body>
    </html>
  );
}
