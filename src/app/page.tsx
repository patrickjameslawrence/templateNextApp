/** @format */

import {
  DestructiveButtonComponent,
  DisabledButtonComponent,
  HollowPrimaryButtonComponent,
  HollowSecondaryButtonComponent,
  HollowTertiaryButtonComponent,
  PrimaryButtonComponent,
  SecondaryButtonComponent,
  SuccessButtonComponent,
  TertiaryButtonComponent,
  TextButtonComponent,
  WarningButtonComponent,
} from "@/components/ui/Button"
import { HeadingComponent } from "@/components/ui/Heading"
import {
  PrimaryLinkComponent,
  SecondaryLinkComponent,
  TertiaryLinkComponent,
} from "@/components/ui/Link"

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <HeadingComponent>Template App UI Kit</HeadingComponent>
      <div className="flex items-center gap-5">
        <PrimaryButtonComponent size="small" />
        <PrimaryButtonComponent />
        <PrimaryButtonComponent size="large" />
        <PrimaryButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <HollowPrimaryButtonComponent size="small" />
        <HollowPrimaryButtonComponent />
        <HollowPrimaryButtonComponent size="large" />
        <HollowPrimaryButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <SecondaryButtonComponent size="small" />
        <SecondaryButtonComponent />
        <SecondaryButtonComponent size="large" />
        <SecondaryButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <HollowSecondaryButtonComponent size="small" />
        <HollowSecondaryButtonComponent />
        <HollowSecondaryButtonComponent size="large" />
        <HollowSecondaryButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <TertiaryButtonComponent size="small" />
        <TertiaryButtonComponent />
        <TertiaryButtonComponent size="large" />
        <TertiaryButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <HollowTertiaryButtonComponent size="small" />
        <HollowTertiaryButtonComponent />
        <HollowTertiaryButtonComponent size="large" />
        <HollowTertiaryButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <TextButtonComponent size="small" />
        <TextButtonComponent />
        <TextButtonComponent size="large" />
        <TextButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <DisabledButtonComponent size="small" />
        <DisabledButtonComponent />
        <DisabledButtonComponent size="large" />
        <DisabledButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <SuccessButtonComponent size="small" />
        <SuccessButtonComponent />
        <SuccessButtonComponent size="large" />
        <SuccessButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <WarningButtonComponent size="small" />
        <WarningButtonComponent />
        <WarningButtonComponent size="large" />
        <WarningButtonComponent size="extraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <DestructiveButtonComponent size="small" />
        <DestructiveButtonComponent />
        <DestructiveButtonComponent size="large" />
        <DestructiveButtonComponent size="extraLarge" />
      </div>

      <div className="flex items-center gap-5">
        <PrimaryLinkComponent size="small" />
        <PrimaryLinkComponent />
        <PrimaryLinkComponent size="medium" />
        <PrimaryLinkComponent size="large" />
        <PrimaryLinkComponent size="extraLarge" />
        <PrimaryLinkComponent size="extraExtraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <SecondaryLinkComponent size="small" />
        <SecondaryLinkComponent />
        <SecondaryLinkComponent size="medium" />
        <SecondaryLinkComponent size="large" />
        <SecondaryLinkComponent size="extraLarge" />
        <SecondaryLinkComponent size="extraExtraLarge" />
      </div>
      <div className="flex items-center gap-5">
        <TertiaryLinkComponent size="small" />
        <TertiaryLinkComponent />
        <TertiaryLinkComponent size="medium" />
        <TertiaryLinkComponent size="large" />
        <TertiaryLinkComponent size="extraLarge" />
        <TertiaryLinkComponent size="extraExtraLarge" />
      </div>
    </main>
  )
}
