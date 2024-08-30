/** @format */

import { createClient } from "@/utils/supabase/client"
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import ButtonComponent from "../button/Button"
import {
  EditableTextProps,
  EditableTextSize,
  TextEditableTextProps,
} from "./EditableText.types"
import TextComponent from "./Text"

export default function EditableTextComponent({
  id,
  name = "Editable text",
  initialvalue = "Editable text",
  type,
  size = "medium",
  label,
  className,
  ...props
}: EditableTextProps): React.ReactElement<EditableTextProps> {
  const supabase = createClient()

  const [value, setValue] = useState(initialvalue)
  const [isEditing, setIsEditing] = useState(false)

  const getSizeClasses = (size: EditableTextSize) => {
    switch (size) {
      case "small":
        return "text-xs md:text-sm"
      case "medium":
        return "text-sm md:text-base lg:text-lg"
      case "large":
        return "text-base md:text-lg"
      default:
        return ""
    }
  }

  // Common size class based on size prop
  const sizeClasses = getSizeClasses(size)

  const baseClasses =
    "rounded-none border border-lightBorder bg-lightBackground p-1 text-black placeholder:text-tertiary focus:ring focus:ring-primary dark:border-darkBorder dark:bg-darkBackground dark:text-white"

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from("profiles") // Replace 'profiles' with your actual table name
        .update({ [name]: value })
        .eq("id", id) // Assuming `id` is a unique identifier in your table

      if (error) throw error

      setIsEditing(false) // Exit edit mode on successful save
    } catch (error) {
      console.error("Error updating data:", error)
    }
  }

  const handleCancel = () => {
    setValue(initialvalue)
    setIsEditing(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  if (!isEditing) {
    const { textvariant } = props as TextEditableTextProps
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
        >
          {label}
        </label>
        <div className="flex items-center">
          <ButtonComponent
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-3"
          >
            <span className="sr-only">Edit</span>
            <TextComponent>
              {textvariant === "username" ? "@" : ""}
              {value}
            </TextComponent>
            <PencilSquareIcon className="size-6 text-primary" />
          </ButtonComponent>
        </div>
      </div>
    )
  }

  if (type !== "text") {
    switch (type) {
      case "email":
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              autoComplete="email"
              type={type}
              defaultValue={initialvalue}
              onChange={handleChange}
              inputMode="email"
              className={`${baseClasses} ${className}`}
            />
          </div>
        )
      case "password":
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              autoComplete="new-password"
              type={type}
              defaultValue={initialvalue}
              onChange={handleChange}
              inputMode="text"
              className={`${baseClasses} ${className}`}
            />
          </div>
        )
      case "tel":
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              autoComplete="tel"
              type={type}
              defaultValue={initialvalue}
              onChange={handleChange}
              inputMode="tel"
              className={`${baseClasses} ${className}`}
            />
          </div>
        )
    }
  }

  const { textvariant } = props as TextEditableTextProps

  switch (textvariant) {
    case "name":
      return (
        <div className="flex items-center">
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              autoComplete="given-name"
              autoCapitalize="words"
              type={type}
              defaultValue={initialvalue}
              onChange={handleChange}
              inputMode="text"
              className={`${baseClasses} ${className}`}
            />
          </div>
          <div className="ml-2 flex items-center gap-1">
            <ButtonComponent
              variant="primary"
              size="small"
              onClick={handleSave}
            >
              Save
            </ButtonComponent>
            <ButtonComponent
              variant="ghost"
              size="small"
              onClick={handleCancel}
            >
              Cancel
            </ButtonComponent>
          </div>
        </div>
      )
    case "username":
      return (
        <div className="flex items-center">
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
            >
              {label}
            </label>
            <div className="flex flex-row-reverse items-center border border-lightBorder bg-lightBackground focus-within:ring focus-within:ring-primary dark:border-darkBorder dark:bg-darkBackground">
              <input
                {...props}
                id={id}
                name={name}
                type={type}
                defaultValue={initialvalue}
                onChange={handleChange}
                inputMode="text"
                className={`peer w-full rounded-none bg-lightBackground p-1 pl-0 placeholder:text-tertiary focus:outline-none dark:bg-darkBackground ${className}`}
              />
              <span className="p-1 pr-0 text-black peer-placeholder-shown:text-tertiary peer-focus-visible:text-black dark:text-white peer-focus-visible:dark:text-white">
                @
              </span>
            </div>
          </div>
          <div className="ml-2 flex items-center gap-1">
            <ButtonComponent
              variant="primary"
              size="small"
              onClick={handleSave}
            >
              Save
            </ButtonComponent>
            <ButtonComponent
              variant="ghost"
              size="small"
              onClick={handleCancel}
            >
              Cancel
            </ButtonComponent>
          </div>
        </div>
      )
    case "default":
    default:
      return (
        <div className="flex items-center">
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`sr-only font-semibold text-tertiary ${sizeClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              type={type}
              defaultValue={initialvalue}
              onChange={handleChange}
              inputMode="text"
              className={`${baseClasses} ${className}`}
            />
          </div>
          <div className="ml-2 flex items-center gap-1">
            <ButtonComponent
              variant="primary"
              size="small"
              onClick={handleSave}
            >
              Save
            </ButtonComponent>
            <ButtonComponent
              variant="ghost"
              size="small"
              onClick={handleCancel}
            >
              Cancel
            </ButtonComponent>
          </div>
        </div>
      )
  }
}
