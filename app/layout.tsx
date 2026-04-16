import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maple Financial — Alternative Mortgage Lending for Canadian Brokers",
  description:
    "Partner with Maple Financial. One submission. One Broker Relationship Manager. Near Prime, Flex, and Alt solutions funded by an NHA-approved lender. Invitation-only.",
  openGraph: {
    title: "Maple Financial",
    description:
      "Grow your alternative mortgage business with Canada's most broker-focused lender.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
