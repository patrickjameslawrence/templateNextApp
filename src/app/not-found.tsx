/** @format */

"use client"

import HeadingComponent from "@/components/ui/heading/Heading"
import LinkComponent from "@/components/ui/link/Link"
import ParagraphComponent from "@/components/ui/paragraph/Paragraph"
import TextComponent from "@/components/ui/text/Text"
import { usePathname } from "next/navigation"

export default function NotFoundPage() {
  const pathname = usePathname()
  const page = pathname.substring(1).split("/")[0]

  return (
    <main className={"relative isolate h-full"}>
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <HeadingComponent
          level="h1"
          aria-hidden="true"
        >
          <TextComponent className="text-cyan-500">{"{"}</TextComponent>{" "}
          <TextComponent
            size="large"
            className="font-medium text-lime-500"
          >
            {'"Error404"'}
          </TextComponent>
          {page !== "not-found" ? (
            <>
              <TextComponent size="large">.</TextComponent>
              <TextComponent
                size="large"
                className="font-medium text-lime-500"
              >{`"${page}"`}</TextComponent>
            </>
          ) : (
            ""
          )}
          <TextComponent size="large">: </TextComponent>
          <TextComponent className="font-medium text-cyan-500">
            {'"Page not found"'}
          </TextComponent>{" "}
          <TextComponent className="text-cyan-500">{"}"}</TextComponent>
        </HeadingComponent>
        <HeadingComponent
          level="h2"
          className="sr-only"
        >
          Error 404. Page not found
        </HeadingComponent>
        <ParagraphComponent className="my-5">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </ParagraphComponent>
        <LinkComponent
          variant="primary"
          size="medium"
          href="/"
        >
          Go back home
        </LinkComponent>
      </div>
    </main>
  )
}
