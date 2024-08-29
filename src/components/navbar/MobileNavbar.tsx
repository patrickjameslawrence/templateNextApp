/** @format */

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import profile from "../../../public/images/profile.svg"
import { BrandSection } from "./Navbar"

import { User } from "@supabase/supabase-js"
import LinkComponent from "../ui/link/Link"
import { navbarLinks, userLinks } from "./links"

export default function MobileNavbarComponent({
  currentpage,
  user,
  ...props
}: {
  currentpage: string
  user: User
}) {
  return (
    <Disclosure>
      <div
        {...props}
        className="flex h-12 w-full items-center justify-between border border-lightBorder bg-lightBackground md:hidden dark:border-darkBorder dark:bg-darkBackground"
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
      <DisclosurePanel className="flex w-full flex-col items-center justify-start gap-1 border border-lightBorder border-t-transparent bg-lightBackground md:hidden dark:border-darkBorder dark:bg-darkBackground">
        {navbarLinks.map((link, index) => {
          const isCurrentPage = currentpage === link.text.toLowerCase()
          return (
            <LinkComponent
              variant="tertiary"
              key={index}
              href={link.text.toLowerCase()}
              size="large"
              className={
                (isCurrentPage
                  ? "border-primary text-primary"
                  : "border-tertiary") +
                " " +
                "flex w-full items-center gap-2 border-l-2 border-primary px-3 py-1 transition hover:bg-hoveredLightBackground hover:text-primary hover:no-underline dark:hover:bg-hoveredDarkBackground"
              }
            >
              {link.icon}
              {link.text}
            </LinkComponent>
          )
        })}
        <UserProfileSection user={user} />
      </DisclosurePanel>
    </Disclosure>
  )
}

function UserProfileSection({ user }: { user: User }) {
  return (
    <>
      <div className="flex h-24 w-full items-center px-3 py-1 transition hover:bg-hoveredLightBackground dark:hover:bg-hoveredDarkBackground">
        <LinkComponent
          variant="tertiary"
          size="large"
          href="/profile"
          className="flex gap-5 hover:no-underline"
        >
          <Image
            height={64}
            width={64}
            src={profile}
            className="rounded-full border-2 border-tertiary"
            alt="User profile photo"
          />
          <div className="flex flex-col justify-center">
            User Profile
            <br />
            <span className="text-tertiary">@username</span>
          </div>
        </LinkComponent>
      </div>
      {userLinks.map((link, index) => {
        return (
          <LinkComponent
            variant="tertiary"
            key={index}
            href={link.text.toLowerCase()}
            size="large"
            className="flex w-full items-center gap-2 border-l-2 border-tertiary px-3 py-1 transition hover:bg-hoveredLightBackground hover:text-primary hover:no-underline dark:hover:bg-hoveredDarkBackground"
          >
            {link.icon}
            {link.text}
          </LinkComponent>
        )
      })}
    </>
  )
}
