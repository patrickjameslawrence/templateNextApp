/** @format */

"use client"

import NavbarComponent from "@/components/navbar/Navbar"
import { useUserContext } from "@/contexts/userContext/UserContext"
import "@/styles/globals.css"
import { redirect } from "next/navigation"

export default function NavLinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userContext = useUserContext()

  if (!userContext.user) {
    return redirect("/not-found")
  }

  return (
    <div className="container mx-auto my-4 min-h-screen px-3 lg:px-4">
      <NavbarComponent />
      {children}
    </div>
  )
}
