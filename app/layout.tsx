import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Adwadie | Sell,& Buy, With a third Party",
  description: "A marketplace for selling and buying products with a third party involved . Remember , safety first! . when buying or selling anything online. We have our ai agents  hold your cash till you confirm delivery before sending the money to the seller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
