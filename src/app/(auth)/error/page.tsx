/** @format */

import HeadingComponent from "@/components/ui/heading/Heading"
import LinkComponent from "@/components/ui/link/Link"

export default function ErrorPage() {
  return (
    <>
      <HeadingComponent level="h1">
        Sorry, something went wrong
      </HeadingComponent>
      <LinkComponent
        variant="primary"
        className="mt-10"
        href="/"
      >
        Go back home
      </LinkComponent>
    </>
  )
}
