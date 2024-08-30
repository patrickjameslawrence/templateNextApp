/** @format */

import { CheckIcon } from "@heroicons/react/24/outline"
import {
  CheckboxInputProps,
  EmailAddressInputProps,
  InputProps,
  InputSize,
  PasswordInputProps,
  PhoneNumberInputProps,
  TextInputProps,
} from "./Input.types"

export default function InputComponent({
  id,
  name = "input",
  size = "medium",
  type,
  label = "Input",
  className,
  disabled = false,
  required = false,
  ...props
}: InputProps): React.ReactElement<InputProps> {
  const getSizeClasses = (size: InputSize) => {
    switch (size) {
      case "small":
        return "text-sm"
      case "medium":
        return "text-base"
      case "large":
        return "text-base"
      default:
        return ""
    }
  }

  // Common size class based on size prop
  const sizeClasses = getSizeClasses(size)

  const getRequiredClasses = (required: boolean) => {
    if (required) {
      return "after:content-['*']"
    }
    return ""
  }

  const requiredClasses = getRequiredClasses(required)

  const baseClasses =
    "rounded-none border border-lightBorder bg-lightBackground p-1 text-black placeholder:text-tertiary focus:ring focus:ring-primary dark:border-darkBorder dark:bg-darkBackground dark:text-white"

  if (type !== "text") {
    switch (type) {
      case "checkbox": {
        const { checked } = props as CheckboxInputProps
        return (
          <div className="flex items-center gap-3">
            <input
              {...props}
              id={id}
              name={name}
              type={type}
              checked={checked}
              required={required}
              className={`peer size-5 appearance-none border-2 border-lightBorder transition checked:border-transparent checked:bg-primary dark:border-darkBorder ${baseClasses} ${className}`}
            />
            <label
              htmlFor={id}
              className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
            >
              {label}
            </label>
            <CheckIcon className="pointer-events-none absolute hidden size-5 text-white transition peer-checked:block" />
          </div>
        )
      }
      case "email": {
        const { placeholder } = props as EmailAddressInputProps
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete="email"
              required={required}
              className={`${baseClasses} ${className}`}
            />
          </div>
        )
      }
      case "file": {
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`bg-primary px-2 py-1 text-center font-semibold hover:bg-hoveredPrimary ${sizeClasses} ${requiredClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              type={type}
              required={required}
              className={`hidden ${baseClasses} ${className}`}
            />
          </div>
        )
      }
      case "password": {
        const { placeholder } = props as PasswordInputProps
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete="email"
              required={required}
              className={`${baseClasses} ${className}`}
            />
          </div>
        )
      }
      case "tel": {
        const { placeholder } = props as PhoneNumberInputProps
        return (
          <div className="flex flex-col gap-1">
            <label
              htmlFor={id}
              className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
            >
              {label}
            </label>
            <input
              {...props}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete="tel"
              required={required}
              className={`${baseClasses} ${className}`}
            />
          </div>
        )
      }
      default:
        return <></>
    }
  }

  const { textVariant, placeholder } = props as TextInputProps

  switch (textVariant) {
    case "name":
      return (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={id}
            className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
          >
            {label}
          </label>
          <input
            {...props}
            id={id}
            name={name}
            autoComplete="given-name"
            autoCapitalize="words"
            placeholder={placeholder}
            type={type}
            inputMode="text"
            required={required}
            className={`${baseClasses} ${className}`}
          />
        </div>
      )
    case "username":
      return (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={id}
            className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
          >
            {label}
          </label>
          <div className="flex flex-row-reverse items-center border border-lightBorder bg-lightBackground focus-within:ring focus-within:ring-primary dark:border-darkBorder dark:bg-darkBackground">
            <input
              {...props}
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              inputMode="text"
              required={required}
              className={`peer w-full rounded-none bg-lightBackground p-1 pl-0 placeholder:text-tertiary focus:outline-none dark:bg-darkBackground ${className}`}
            />
            <span className="p-1 pr-0 text-black peer-placeholder-shown:text-tertiary peer-focus-visible:text-black dark:text-white peer-focus-visible:dark:text-white">
              @
            </span>
          </div>
        </div>
      )
    case "default":
    default:
      return (
        <div className="flex flex-col gap-1">
          <label
            htmlFor={id}
            className={`font-semibold text-tertiary ${sizeClasses} ${requiredClasses}`}
          >
            {label}
          </label>
          <input
            {...props}
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            inputMode="text"
            required={required}
            className={`rounded-none border border-lightBorder bg-lightBackground p-1 text-black placeholder:text-tertiary focus:ring focus:ring-primary dark:border-darkBorder dark:bg-darkBackground dark:text-white ${className}`}
          />
        </div>
      )
  }
}
