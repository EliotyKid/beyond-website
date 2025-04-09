import type { Metadata } from "next";
import "./global.css"
import SideHeader from "../components/SideHeader/index"
import { cooperHewitt } from "./fonts";

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
      <body className={cooperHewitt.className}>
        <SideHeader/>
        {children}
      </body>
    </html>
  );
}
