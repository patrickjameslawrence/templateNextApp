/** @format */
export type TextSize = "small" | "medium" | "large"

export interface BaseTextProps {
  children?: React.ReactNode
  size?: TextSize
  className?: string
}

export type TextProps = BaseTextProps
