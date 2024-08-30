/** @format */

export type HeadingVariant = "default" | "primary" | "secondary" | "tertiary"
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type HeadingSize = "small" | "medium" | "large"

export interface BaseHeadingProps {
  children?: React.ReactNode
  level: HeadingLevel
  size?: HeadingSize
  className?: string
}

export interface DefaultHeadingProps extends BaseHeadingProps {
  variant?: "default"
}

export interface PrimaryHeadingProps extends BaseHeadingProps {
  variant?: "primary"
}

export interface SecondaryHeadingProps extends BaseHeadingProps {
  variant?: "secondary"
}

export interface TertiaryHeadingProps extends BaseHeadingProps {
  variant?: "tertiary"
}

export type HeadingProps =
  | DefaultHeadingProps
  | PrimaryHeadingProps
  | SecondaryHeadingProps
  | TertiaryHeadingProps
