/** @format */

"use client"

import { usePathname } from "next/navigation"

import Image from "next/image"
import { PrimaryLinkComponent } from "./ui/Link"

export default function NavbarComponent() {
  const pathname = usePathname()
  const page = pathname.substring(1).split("/")[0]
  return (
    <nav>
      <DesktopNavbar currentpage={page} />
      <MobileNavbar currentpage={page} />
    </nav>
  )
}

const navbarLinks = ["Nearby", "Following", "Global"]

function DesktopNavbar({ currentpage, ...props }: { currentpage: string }) {
  return (
    <div
      {...props}
      className="hidden h-16 w-full border border-neutral-300 bg-neutral-200 sm:flex dark:border-neutral-900 dark:bg-neutral-950"
    >
      <div className="w-1/6">
        <Image
          src="./"
          alt="Brand logo"
        />
      </div>
      <ul className="flex w-4/6 items-center justify-center gap-10">
        {navbarLinks.map((link, index) => {
          const isCurrentPage = currentpage === link.toLowerCase()
          return (
            <li
              key={index}
              className={
                (isCurrentPage ? "border-blue-500" : "border-neutral-500") +
                " flex h-full w-24 items-center justify-center border-b-4 transition hover:border-blue-500"
              }
            >
              <PrimaryLinkComponent
                size="large"
                href={link.toLowerCase()}
                className={
                  isCurrentPage ? "text-blue-500 dark:text-blue-500" : ""
                }
              >
                {link}
              </PrimaryLinkComponent>
            </li>
          )
        })}
      </ul>
      <div className="w-1/6 text-right">profile</div>
    </div>
  )
}

export function MobileNavbar({ ...props }) {
  return (
    <div
      {...props}
      className="flex w-full border border-neutral-300 bg-neutral-200 sm:hidden dark:border-neutral-900 dark:bg-neutral-950"
    >
      mobile
    </div>
  )
}
