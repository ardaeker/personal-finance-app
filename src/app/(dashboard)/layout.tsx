import { MobileNavbar } from "@/components/mobile-navbar";

export default function Layout({ children }: Layout) {
  return (
    <div>
      <div>{children}</div>
      <MobileNavbar />
    </div>
  );
}
