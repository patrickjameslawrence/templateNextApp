/** @format */

import { UserContextProvider } from "@/contexts/userContext/UserContext"
import "@/styles/globals.css"
import { createClient } from "@/utils/supabase/server"
import { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Template Next App",
  description: "A starter template for a next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider initialUser={user}>{children}</UserContextProvider>
      </body>
    </html>
  )
}
