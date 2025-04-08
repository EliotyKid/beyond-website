import type { Metadata } from "next";
import SideHeader from "../components/SideHeader/index"

export const metadata: Metadata = {
  title: "Beyond",
  description: "Beyond Company creating a new universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideHeader/>
        {children}
      </body>
    </html>
  );
}
