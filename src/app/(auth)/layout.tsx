/** @format */

import LinkComponent from "@/components/ui/link/Link"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import logo from "../../../public/images/logo.svg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Account",
  description: "View, create, and sign in to accounts",
}

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container m-auto flex min-h-screen flex-col items-center border-x-2 border-lightBorder bg-lightBackground px-6 md:w-fit lg:px-8 dark:border-darkBorder dark:bg-darkBackground">
      <LinkComponent href="/">
        <Image
          src={logo}
          width={150}
          alt="pulsating brand logo"
          className="my-6 animate-pulse"
        />
      </LinkComponent>
      {children}
    </div>
  )
}
