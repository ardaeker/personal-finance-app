"use client";
import { ApplicationLayout } from "@/components/layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ApplicationLayout>{children}</ApplicationLayout>;
}
