/** @format */

import {
  PrimaryHeadingComponent,
  SubheadingComponent,
} from "@/components/ui/Heading"
import ParagraphComponent from "@/components/ui/Paragraph"
import Image from "next/image"
import profile from "../../../../public/images/profile.svg"

export default function ProfilePage() {
  return (
    <main>
      <div className="border-lightBorder dark:border-darkBorder bg-lightBackground dark:bg-darkBackground flex gap-10 border-b-8 p-10">
        <Image
          src={profile}
          width={250}
          height={250}
          className="rounded-full"
          alt="User profile photo"
        />
        <div className="flex flex-col justify-center">
          <PrimaryHeadingComponent>Display name</PrimaryHeadingComponent>
          <SubheadingComponent>@username</SubheadingComponent>
          <ParagraphComponent>
            Biography. Lorem ipsum. Put some more text here
          </ParagraphComponent>
        </div>
      </div>
    </main>
  )
}
