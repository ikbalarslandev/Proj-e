import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//layout components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proj-e",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen  ">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <section className="flex-1 flex ">{children}</section>
            <Footer />
          </div>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
