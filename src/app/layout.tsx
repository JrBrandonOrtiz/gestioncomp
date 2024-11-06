import type { Metadata } from "next";
import "../styles/global.scss";
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GestionCompany",
  description: "CompanyGo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
