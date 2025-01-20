/** @format */

import LinkComponent from "@/components/ui/link/Link"
import "@/styles/globals.css"
import Image from "next/image"
import logo from "../../../public/images/logo.svg"

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
