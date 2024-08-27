/** @format */

import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Template Next App",
  description: "A starter template for a next app",
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto my-4 min-h-screen px-3 lg:px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
