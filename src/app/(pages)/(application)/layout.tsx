import { cookies } from "next/headers";
import { ApplicationLayout } from "@/components/layouts";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return <ApplicationLayout defaultOpen={defaultOpen}>{children}</ApplicationLayout>;
}
