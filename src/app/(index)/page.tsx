/** @format */

import { PrimaryHeadingComponent } from "@/components/ui/Heading"
import { PrimaryLinkComponent } from "@/components/ui/Link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-between gap-5 p-24">
      <div>
        <PrimaryHeadingComponent>
          Welcome to Template App! 😁
        </PrimaryHeadingComponent>
      </div>
      <div className="flex flex-col gap-3">
        <PrimaryLinkComponent
          href="signup"
          size="extraExtraLarge"
        >
          Sign up
        </PrimaryLinkComponent>
        <PrimaryLinkComponent
          href="signin"
          size="extraExtraLarge"
        >
          Sign in
        </PrimaryLinkComponent>
      </div>
    </main>
  )
}
