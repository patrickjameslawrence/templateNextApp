/** @format */

const navbarLinks = ["Nav", "Links", "Here"]

export default function MobileNavbarComponent({ ...props }) {
  return (
    <div
      {...props}
      className="flex w-full border border-neutral-300 bg-neutral-200 md:hidden dark:border-neutral-900 dark:bg-neutral-950"
    >
      mobile
    </div>
  )
}
