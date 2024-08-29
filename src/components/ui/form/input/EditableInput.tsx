/** @format */

import { PencilIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export function EditableNameInputComponent({
  size = "medium",
  label = "Input",
  id,
  name,
  placeholder = "John Doe",
  required = false,
  ...props
}: {
  id: string
  name: string
  placeholder?: string
  required?: boolean
  className?: string
  size?: "large" | "medium" | "small"
  label?: string
}) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <div className="flex flex-col gap-1">
      {isEditing ? (
        <>
          <label
            htmlFor={id}
            className={
              (size === "medium"
                ? SIZES.Medium
                : size === "small"
                  ? SIZES.Small
                  : SIZES.Large) +
              (required ? " after:content-['*']" : "") +
              (isEditing ? " sr-only" : "") +
              " font-semibold text-tertiary"
            }
          >
            {label}
          </label>
          <input
            id={id}
            name={name}
            {...props}
            autoComplete="name"
            placeholder={placeholder}
            type="text"
            inputMode="text"
            required={required}
            className={
              "rounded-none border border-lightBorder bg-lightBackground p-1 text-black placeholder:text-tertiary focus:ring focus:ring-primary dark:border-darkBorder dark:bg-darkBackground dark:text-white" +
              " " +
              props.className
            }
          />
        </>
      ) : (
        <div className="flex items-center gap-3">
          <TextComponent>{label}</TextComponent>
          <Text
            size="small"
            onClick={() => setIsEditing(!isEditing)}
          >
            <PencilIcon className="size-6" />
          </TextButtonComponent>
        </div>
      )}
    </div>
  )
}
