/** @format */

import NavbarComponent from "@/components/navbar/Navbar"
import "@/styles/globals.css"
import { createClient } from "@supabase/supabase-js"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your page name here",
  description: "A starter template for a next app",
}

export default async function NavLinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const url = "https://zvvhkqmwsovsajkussdz.supabase.co"
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dmhrcW13c292c2Fqa3Vzc2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MjgwNTMsImV4cCI6MjA0MDMwNDA1M30.nirFcCxRXKmF9OHuAwdR6GbE4R1i5Iu-BIV70B5B8OM"
  const supabase = createClient(url, key)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    //  redirect("/not-found")
  }
  return (
    <div className="container mx-auto my-4 min-h-screen px-3 lg:px-4">
      <NavbarComponent user={user} />
      {children}
    </div>
  )
}
