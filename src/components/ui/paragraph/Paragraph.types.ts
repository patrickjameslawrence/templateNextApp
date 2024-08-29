/** @format */
export type ParagraphSize = "small" | "medium" | "large"

export interface BaseParagraphProps {
  children?: React.ReactNode
  size?: ParagraphSize
  className?: string
}

export type ParagraphProps = BaseParagraphProps
