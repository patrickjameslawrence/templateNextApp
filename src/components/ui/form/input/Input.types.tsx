/** @format */

export type InputType =
  | "checkbox"
  | "email"
  | "file"
  | "password"
  | "tel"
  | "text"
export type InputSize = "small" | "medium" | "large"

export type TextVariant = "default" | "name" | "username"

export interface BaseInputProps {
  id: string
  name?: string
  type: InputType
  size?: InputSize
  label?: string
  className?: string
  disabled?: boolean
  required?: boolean
}

export interface CheckboxInputProps extends BaseInputProps {
  checked?: boolean
}

export interface EmailAddressInputProps extends BaseInputProps {
  placeholder?: string
}

export interface PhoneNumberInputProps extends BaseInputProps {
  placeholder?: string
}

export interface PasswordInputProps extends BaseInputProps {
  placeholder?: string
}

export interface TextInputProps extends BaseInputProps {
  textVariant: TextVariant
  placeholder?: string
}

export type InputProps =
  | CheckboxInputProps
  | EmailAddressInputProps
  | PhoneNumberInputProps
  | PasswordInputProps
  | TextInputProps
