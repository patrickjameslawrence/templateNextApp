/** @format */

import profile from "../../../public/images/profile.svg"

import Image from "next/image"
import HeadingComponent from "../ui/heading/Heading"
import ParagraphComponent from "../ui/paragraph/Paragraph"

export default function AccountHeader({ user }: { user: any }) {
  return (
    <div className="flex gap-10 border-b-8 border-lightBorder bg-lightBackground p-10 dark:border-darkBorder dark:bg-darkBackground">
      <Image
        src={profile}
        width={250}
        height={250}
        className="rounded-full"
        alt="User profile photo"
      />
      <div className="flex flex-col justify-center">
        <HeadingComponent level="h1">Display name</HeadingComponent>
        <HeadingComponent
          level="h2"
          variant="tertiary"
        >
          @username
        </HeadingComponent>
        <ParagraphComponent>
          Biography. Lorem ipsum. Put some more text here
        </ParagraphComponent>
      </div>
    </div>
  )
}
