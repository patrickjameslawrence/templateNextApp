/** @format */

export type LinkVariant = "default" | "primary" | "secondary" | "tertiary"
export type LinkSize = "small" | "medium" | "large"

export interface BaseLinkProps {
  children?: React.ReactNode
  href: string
  size?: LinkSize
  className?: string
}

export interface DefaultLinkProps extends BaseLinkProps {
  variant?: "default"
}

export interface PrimaryLinkProps extends BaseLinkProps {
  variant?: "primary"
}

export interface SecondaryLinkProps extends BaseLinkProps {
  variant?: "secondary"
}

export interface TertiaryLinkProps extends BaseLinkProps {
  variant?: "tertiary"
}

export type LinkProps =
  | DefaultLinkProps
  | PrimaryLinkProps
  | SecondaryLinkProps
  | TertiaryLinkProps
