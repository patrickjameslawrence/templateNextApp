/** @format */

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import {
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
  Cog6ToothIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { TertiaryLinkComponent } from "../ui/Link"
import { BrandSection } from "./Navbar"
const navLinks = [
  {
    text: "Nav",
    icon: <UserCircleIcon className="size-6" />,
  },
  {
    text: "Links",
    icon: <Cog6ToothIcon className="size-6" />,
  },
  {
    text: "Here",
    icon: <ArrowLeftStartOnRectangleIcon className="size-6" />,
  },
]
export default function MobileNavbarComponent({
  currentpage,
  ...props
}: {
  currentpage: string
}) {
  return (
    <Disclosure>
      <div
        {...props}
        className="flex h-12 w-full items-center justify-between border border-neutral-300 bg-neutral-200 md:hidden dark:border-neutral-900 dark:bg-neutral-950"
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
      <DisclosurePanel className="flex w-full flex-col items-center justify-start gap-1 border border-neutral-300 border-t-transparent bg-neutral-200 md:hidden dark:border-neutral-900 dark:bg-neutral-950">
        {navLinks.map((link, index) => {
          const isCurrentPage = currentpage === link.text.toLowerCase()
          return (
            <TertiaryLinkComponent
              key={index}
              href={link.text.toLowerCase()}
              size="extraLarge"
              className={
                (isCurrentPage
                  ? "border-blue-500 text-blue-500"
                  : "border-neutral-500") +
                " " +
                "flex w-full items-center gap-2 border-l-2 border-blue-500 px-3 py-1 transition hover:bg-neutral-300 hover:text-blue-500 hover:no-underline dark:hover:bg-neutral-900"
              }
            >
              {link.icon}
              {link.text}
            </TertiaryLinkComponent>
          )
        })}
      </DisclosurePanel>
    </Disclosure>
  )
}
