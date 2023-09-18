import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import RIgthSideBar from "@/components/shared/RIgthSideBar";
import LeftSideBar from "@/components/shared/LeftSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A NextJs13 metadata Threads Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container ">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RIgthSideBar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
