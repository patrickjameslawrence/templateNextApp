/** @format */

export type EditableTextType = "email" | "password" | "tel" | "text"
export type EditableTextSize = "small" | "medium" | "large"

export type TextVariant = "default" | "name" | "username"

export interface BaseEditableTextProps {
  id: string
  name?: string
  initialvalue?: string
  type: EditableTextType
  size?: EditableTextSize
  label: string
  className?: string
}

export interface TextEditableTextProps extends BaseEditableTextProps {
  textvariant: TextVariant
}

export type EditableTextProps = TextEditableTextProps
