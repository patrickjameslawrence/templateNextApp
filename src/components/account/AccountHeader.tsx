/** @format */

"use client"

import profile from "../../../public/images/profile.svg"

import Image from "next/image"
import EditableTextComponent from "../ui/text/EditableText"

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
        <EditableTextComponent
          id="displayName"
          size="large"
          label="Display Name"
          type="text"
          textvariant="name"
          initialvalue="Template App User"
        />
        <EditableTextComponent
          id="username"
          label="Username"
          type="text"
          textvariant="username"
          initialvalue="templateappuser"
        />
        <EditableTextComponent
          id="biography"
          label="Biography"
          type="text"
          textvariant="default"
          initialvalue="User bio goes here"
        />
      </div>
    </div>
  )
}
