// app/fonts.ts
import localFont from "next/font/local";

export const cooperHewitt = localFont({
  src: [
    {
      path: "../../public/fonts/CooperHewitt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cooper",
  display: "swap",
});
