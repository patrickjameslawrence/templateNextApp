/** @format */

import { PrimaryLinkComponent } from "@/components/ui/Link"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import logo from "../../../public/images/logo.svg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Account",
  description: "A starter template for a next app",
}

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-lightBackground border-lightBorder dark:bg-darkBackground dark:border-darkBorder container m-auto flex min-h-screen flex-col items-center border-x-2 px-6 md:w-fit lg:px-8">
          <PrimaryLinkComponent href="/">
            <Image
              src={logo}
              width={150}
              alt="pulsating brand logo"
              className="my-6 animate-pulse"
            />
          </PrimaryLinkComponent>
          {children}
        </div>
      </body>
    </html>
  )
}
