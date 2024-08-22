/** @format */

import NavbarComponent from "@/components/Navbar"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Template Next App",
  description: "A starter template for a next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto sm:my-8 sm:px-6 lg:px-8">
          <NavbarComponent />
          {children}
        </div>
      </body>
    </html>
  )
}
