/** @format */

"use client"

import { useUserContext } from "@/contexts/userContext/UserContext"
import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from "../../../public/images/logo.svg"
import HeadingComponent from "../ui/heading/Heading"
import LinkComponent from "../ui/link/Link"
import DesktopNavbarComponent from "./DesktopNavbar"
import { navbarLinks } from "./links"
import MobileNavbarComponent from "./MobileNavbar"

export default function NavbarComponent() {
  const userContext = useUserContext()

  if (userContext.user) {
    const pathname = usePathname()
    const page = pathname.substring(1).split("/")[0]
    return (
      <nav>
        <DesktopNavbarComponent
          currentpage={page}
          user={userContext.user}
        />
        <MobileNavbarComponent
          currentpage={page}
          user={userContext.user}
        />
      </nav>
    )
  }
  return <HeadingComponent level="h1">No user found</HeadingComponent>
}

export function BrandSection() {
  return (
    <div className="flex w-1/6 items-center justify-center">
      <LinkComponent href={navbarLinks[0].text.toLowerCase()}>
        <Image
          height={30}
          width={30}
          src={logo}
          alt="Brand logo"
        />
      </LinkComponent>
    </div>
  )
}
