import type { Metadata as MetadataType } from "next";

declare global {
  type Metadata = MetadataType;

  type RootLayout = Readonly<{
    children: React.ReactNode;
  }>;
}
