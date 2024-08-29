/** @format */

import Image from "next/image"

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { User } from "@supabase/supabase-js"
import profile from "../../../public/images/profile.svg"
import LinkComponent from "../ui/link/Link"
import { BrandSection } from "./Navbar"
import { navbarLinks, userLinks } from "./links"

export default function DesktopNavbarComponent({
  currentpage,
  user,
  ...props
}: {
  currentpage: string
  user: User
}) {
  return (
    <div
      {...props}
      className="hidden h-12 w-full border border-lightBorder bg-lightBackground md:flex dark:border-darkBorder dark:bg-darkBackground"
    >
      <BrandSection />
      <ul className="flex items-center justify-center gap-10">
        {navbarLinks.map((link, index) => {
          const isCurrentPage = currentpage === link.text.toLowerCase()
          return (
            <LinkComponent
              key={index}
              href={link.text.toLowerCase()}
              size="large"
              className={isCurrentPage ? "text-primary dark:text-primary" : ""}
            >
              <li
                className={
                  (isCurrentPage
                    ? "border-b-4 border-primary"
                    : "border-tertiary") +
                  " flex h-12 w-20 items-center justify-center border-b-2 transition hover:border-primary hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground"
                }
              >
                {link.text}
              </li>
            </LinkComponent>
          )
        })}
      </ul>
      <UserProfileSection user={user} />
    </div>
  )
}

function UserProfileSection({ user }: { user: User }) {
  return (
    <div className="ml-auto flex items-center justify-end gap-5 text-right">
      <Popover>
        <PopoverButton className="flex h-12 w-48 items-center gap-5 px-3 py-2 text-xs transition hover:bg-hoveredLightBackground focus:outline-none dark:hover:bg-hoveredDarkBackground">
          <span className="sr-only">Open user menu</span>
          <Image
            height={32}
            width={32}
            src={profile}
            className="ml-auto rounded-full border-2 border-tertiary"
            alt="User profile photo"
          />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom end"
          className="flex w-48 flex-col border border-lightBorder border-t-transparent bg-lightBackground dark:border-darkBorder dark:bg-darkBackground"
        >
          {userLinks.map((link, index) => {
            return (
              <LinkComponent
                variant="tertiary"
                key={index}
                href={link.text.toLowerCase()}
                size="small"
                className="flex items-center gap-2 px-3 py-1 transition hover:bg-hoveredLightBackground hover:text-primary hover:no-underline dark:hover:bg-hoveredDarkBackground"
              >
                {link.icon}
                {link.text}
              </LinkComponent>
            )
          })}
        </PopoverPanel>
      </Popover>
    </div>
  )
}
