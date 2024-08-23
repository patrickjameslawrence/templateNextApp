/** @format */

import Image from "next/image"
import { PrimaryLinkComponent, TertiaryLinkComponent } from "../ui/Link"

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import profile from "../../../public/images/profile.svg"
import { BrandSection } from "./Navbar"

const navbarLinks = ["Nav", "Links", "Here"]
const profileLinks = [
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

export default function DesktopNavbarComponent({
  currentpage,
  ...props
}: {
  currentpage: string
}) {
  return (
    <div
      {...props}
      className="hidden h-12 w-full border border-neutral-300 bg-neutral-200 md:flex dark:border-neutral-900 dark:bg-neutral-950"
    >
      <BrandSection />
      <ul className="flex items-center justify-center gap-10">
        {navbarLinks.map((link, index) => {
          const isCurrentPage = currentpage === link.toLowerCase()
          return (
            <li
              key={index}
              className={
                (isCurrentPage
                  ? "border-b-4 border-blue-500"
                  : "border-neutral-500") +
                " flex h-full w-20 items-center justify-center border-b-2 transition hover:border-blue-500 hover:bg-neutral-300 dark:hover:bg-neutral-900"
              }
            >
              <PrimaryLinkComponent
                href={link.toLowerCase()}
                size="large"
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
      <ProfileSection />
    </div>
  )
}

function ProfileSection() {
  return (
    <div className="ml-auto flex items-center justify-end gap-5 text-right">
      <Popover>
        <PopoverButton className="flex w-48 items-center gap-5 px-3 py-2 text-xs transition hover:bg-neutral-300 focus:outline-none dark:hover:bg-neutral-900">
          <div className="align-center flex flex-col items-start">
            <TertiaryLinkComponent
              size="small"
              href="/profile"
              className="hover:no-underline"
            >
              User Profile
              <br />
              <span className="text-neutral-500">@username</span>
            </TertiaryLinkComponent>
          </div>
          <span className="sr-only">Open user menu</span>
          <Image
            height={32}
            width={32}
            src={profile}
            className="rounded-full"
            alt="User profile photo"
          />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom end"
          className="flex w-48 flex-col border border-neutral-300 border-t-transparent bg-neutral-200 dark:border-neutral-900 dark:bg-neutral-950"
        >
          {profileLinks.map((link, index) => {
            return (
              <TertiaryLinkComponent
                key={index}
                href={link.text.toLowerCase()}
                size="small"
                className="flex items-center gap-2 px-3 py-1 transition hover:bg-neutral-300 hover:text-blue-500 hover:no-underline dark:hover:bg-neutral-900"
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
