/** @format */

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import profile from "../../../public/images/profile.svg"
import { TertiaryLinkComponent } from "../ui/Link"
import { BrandSection } from "./Navbar"

export default function MobileNavbarComponent({
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
    <Disclosure>
      <div
        {...props}
        className="dark:bg-darkBackground dark:border-darkBorder border-lightBorder bg-lightBackground flex h-12 w-full items-center justify-between border md:hidden"
      >
        <BrandSection />
        <div className="w-1/6">
          <DisclosureButton className="group flex justify-center">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-8 group-data-[open]:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-8 group-data-[open]:block"
            />
          </DisclosureButton>
        </div>
      </div>
      <DisclosurePanel className="dark:bg-darkBackground dark:border-darkBorder border-lightBorder bg-lightBackground flex w-full flex-col items-center justify-start gap-1 border border-t-transparent md:hidden">
        {navbarlinks.map((link, index) => {
          const isCurrentPage = currentpage === link.text.toLowerCase()
          return (
            <TertiaryLinkComponent
              key={index}
              href={link.text.toLowerCase()}
              size="extraLarge"
              className={
                (isCurrentPage
                  ? "border-primary text-primary"
                  : "border-tertiary") +
                " " +
                "border-primary hover:text-primary hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground flex w-full items-center gap-2 border-l-2 px-3 py-1 transition hover:no-underline"
              }
            >
              {link.icon}
              {link.text}
            </TertiaryLinkComponent>
          )
        })}
        <UserProfileSection userlinks={userlinks} />
      </DisclosurePanel>
    </Disclosure>
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
    <>
      <div className="hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground flex h-24 w-full items-center px-3 py-1 transition">
        <TertiaryLinkComponent
          size="large"
          href="/profile"
          className="flex gap-5 hover:no-underline"
        >
          <Image
            height={64}
            width={64}
            src={profile}
            className="border-tertiary rounded-full border-2"
            alt="User profile photo"
          />
          <div className="flex flex-col justify-center">
            User Profile
            <br />
            <span className="text-tertiary">@username</span>
          </div>
        </TertiaryLinkComponent>
      </div>
      {userlinks.map((link, index) => {
        return (
          <TertiaryLinkComponent
            key={index}
            href={link.text.toLowerCase()}
            size="extraLarge"
            className="hover:text-primary border-tertiary hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground flex w-full items-center gap-2 border-l-2 px-3 py-1 transition hover:no-underline"
          >
            {link.icon}
            {link.text}
          </TertiaryLinkComponent>
        )
      })}
    </>
  )
}
