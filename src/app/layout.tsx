import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BivekiTeam Project Management",
  description:
    "BivekiTeam — это удобный инструмент управления проектами для веб-студий, помогающий командам эффективно отслеживать задачи, распределять роли и контролировать ход работы.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
