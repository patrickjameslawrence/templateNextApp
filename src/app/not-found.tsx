/** @format */

"use client"

import { usePathname } from "next/navigation"

import {
  PrimaryHeadingComponent,
  SubheadingComponent,
} from "@/components/ui/Heading"
import { SecondaryLinkComponent } from "@/components/ui/Link"

export default function NotFoundPage() {
  const pathname = usePathname()
  const page = pathname.substring(1).split("/")[0]

  return (
    <main className={"relative isolate h-full"}>
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <PrimaryHeadingComponent aria-hidden="true">
          <span className="text-cyan-500">{"{"}</span>{" "}
          <strong className="font-medium text-lime-500">{'"Error404"'}</strong>.
          <span className="font-medium text-lime-500">{`"${page}"`}</span>:{" "}
          <strong className="font-medium text-cyan-500">
            {'"Page not found"'}
          </strong>{" "}
          <span className="text-cyan-500">{"}"}</span>
        </PrimaryHeadingComponent>
        <PrimaryHeadingComponent className="sr-only">
          Error 404. Page not found
        </PrimaryHeadingComponent>
        <SubheadingComponent className="my-5">
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </SubheadingComponent>
        <SecondaryLinkComponent
          size="large"
          href="/"
        >
          Go back home
        </SecondaryLinkComponent>
      </div>
    </main>
  )
}
