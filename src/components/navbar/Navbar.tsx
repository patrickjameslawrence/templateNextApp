/** @format */

"use client"

import { usePathname } from "next/navigation"
import DesktopNavbarComponent from "./DesktopNavbar"
import MobileNavbarComponent from "./MobileNavbar"

export default function NavbarComponent() {
  const pathname = usePathname()
  const page = pathname.substring(1).split("/")[0]
  return (
    <nav>
      <DesktopNavbarComponent currentpage={page} />
      <MobileNavbarComponent currentpage={page} />
    </nav>
  )
}
