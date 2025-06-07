import { MobileNavbar } from "@/components/mobile-navbar";

export default function Layout({ children }: Layout) {
  return (
    <div>
      <div className="pb-13 md:pb-18.5">{children}</div>
      <MobileNavbar />
    </div>
  );
}
