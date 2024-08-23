/** @format */

"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from "../../../public/images/logo.svg"
import { PrimaryLinkComponent } from "../ui/Link"
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

export function BrandSection() {
  return (
    <div className="flex w-1/6 items-center justify-center">
      <PrimaryLinkComponent href="/">
        <Image
          height={30}
          width={30}
          src={logo}
          alt="Brand logo"
        />
      </PrimaryLinkComponent>
    </div>
  )
}
