/** @format */

import Image from "next/image"
import { PrimaryLinkComponent, TertiaryLinkComponent } from "../ui/Link"

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import React from "react"
import profile from "../../../public/images/profile.svg"
import { BrandSection } from "./Navbar"

export default function DesktopNavbarComponent({
  currentpage,
  navbarlinks,
  userlinks,
  ...props
}: {
  currentpage: string
  navbarlinks: {
    text: string
    icon: React.ReactNode
  }[]
  userlinks: {
    text: string
    icon: React.ReactNode
  }[]
}) {
  return (
    <div
      {...props}
      className="dark:bg-darkBackground dark:border-darkBorder border-lightBorder bg-lightBackground hidden h-12 w-full border md:flex"
    >
      <BrandSection />
      <ul className="flex items-center justify-center gap-10">
        {navbarlinks.map((link, index) => {
          const isCurrentPage = currentpage === link.text.toLowerCase()
          return (
            <PrimaryLinkComponent
              key={index}
              href={link.text.toLowerCase()}
              size="large"
              className={isCurrentPage ? "text-primary dark:text-primary" : ""}
            >
              <li
                className={
                  (isCurrentPage
                    ? "border-primary border-b-4"
                    : "border-tertiary") +
                  " hover:border-primary hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground flex h-12 w-20 items-center justify-center border-b-2 transition"
                }
              >
                {link.text}
              </li>
            </PrimaryLinkComponent>
          )
        })}
      </ul>
      <UserProfileSection userlinks={userlinks} />
    </div>
  )
}

function UserProfileSection({
  userlinks,
}: {
  userlinks: {
    text: string
    icon: React.ReactNode
  }[]
}) {
  return (
    <div className="ml-auto flex items-center justify-end gap-5 text-right">
      <Popover>
        <PopoverButton className="hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground flex w-48 items-center gap-5 px-3 py-2 text-xs transition focus:outline-none">
          <div className="flex flex-col items-start">
            <TertiaryLinkComponent
              size="small"
              href="/profile"
              className="hover:no-underline"
            >
              User Profile
              <br />
              <span className="text-tertiary">@username</span>
            </TertiaryLinkComponent>
          </div>
          <span className="sr-only">Open user menu</span>
          <Image
            height={32}
            width={32}
            src={profile}
            className="border-tertiary rounded-full border-2"
            alt="User profile photo"
          />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom end"
          className="dark:bg-darkBackground dark:border-darkBorder border-lightBorder bg-lightBackground flex w-48 flex-col border border-t-transparent"
        >
          {userlinks.map((link, index) => {
            return (
              <TertiaryLinkComponent
                key={index}
                href={link.text.toLowerCase()}
                size="small"
                className="hover:text-primary hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground flex items-center gap-2 px-3 py-1 transition hover:no-underline"
              >
                {link.icon}
                {link.text}
              </TertiaryLinkComponent>
            )
          })}
        </PopoverPanel>
      </Popover>
    </div>
  )
}
