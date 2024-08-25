/** @format */

"use client"

import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  LinkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from "../../../public/images/logo.svg"
import { PrimaryLinkComponent } from "../ui/Link"
import DesktopNavbarComponent from "./DesktopNavbar"
import MobileNavbarComponent from "./MobileNavbar"

const navbarLinks = [
  {
    text: "Nav",
    icon: <LinkIcon className="size-6" />,
  },
  {
    text: "Links",
    icon: <LinkIcon className="size-6" />,
  },
  {
    text: "Here",
    icon: <LinkIcon className="size-6" />,
  },
]

const userLinks = [
  {
    text: "Profile",
    icon: <UserCircleIcon className="size-6" />,
  },
  {
    text: "Settings",
    icon: <Cog6ToothIcon className="size-6" />,
  },
  {
    text: "Logout",
    icon: <ArrowLeftStartOnRectangleIcon className="size-6" />,
  },
]

export default function NavbarComponent() {
  const pathname = usePathname()
  const page = pathname.substring(1).split("/")[0]
  return (
    <nav>
      <DesktopNavbarComponent
        currentpage={page}
        navbarlinks={navbarLinks}
        userlinks={userLinks}
      />
      <MobileNavbarComponent
        currentpage={page}
        navbarlinks={navbarLinks}
        userlinks={userLinks}
      />
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
