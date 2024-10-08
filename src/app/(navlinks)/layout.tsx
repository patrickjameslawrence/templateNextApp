/** @format */

import NavbarComponent from "@/components/navbar/Navbar"
import "@/styles/globals.css"
import { createClient } from "@/utils/supabase/server"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { redirect } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your page name here",
  description: "A starter template for a next app",
}

export default async function NavLinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/not-found")
  }

  return (
    <div className="container mx-auto my-4 min-h-screen px-3 lg:px-4">
      <NavbarComponent user={user} />
      {children}
    </div>
  )
}
