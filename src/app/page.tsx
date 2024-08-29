/** @format */

"use client"

import HeadingComponent from "@/components/ui/heading/Heading"
import LinkComponent from "@/components/ui/link/Link"

export default function IndexPage() {
  return (
    <main className="flex min-h-screen items-center justify-between gap-5 p-24">
      <div>
        <HeadingComponent
          level="h1"
          size="large"
        >
          Welcome to Template App! 😁
        </HeadingComponent>
      </div>
      <div className="flex flex-col gap-3">
        <LinkComponent
          href="signup"
          size="large"
        >
          Sign up
        </LinkComponent>
        <LinkComponent
          href="signin"
          size="large"
        >
          Sign in
        </LinkComponent>
      </div>
    </main>
  )
}
