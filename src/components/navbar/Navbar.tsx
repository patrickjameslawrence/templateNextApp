/** @format */

"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from "../../../public/images/logo.svg"
import DesktopNavbarComponent from "./DesktopNavbar"
import MobileNavbarComponent from "./MobileNavbar"

import { User } from "@supabase/supabase-js"
import LinkComponent from "../ui/link/Link"
import { navbarLinks } from "./links"

export default function NavbarComponent({ user }: { user: User }) {
  const pathname = usePathname()
  const page = pathname.substring(1).split("/")[0]
  return (
    <nav>
      <DesktopNavbarComponent
        currentpage={page}
        user={user}
      />
      <MobileNavbarComponent
        currentpage={page}
        user={user}
      />
    </nav>
  )
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
