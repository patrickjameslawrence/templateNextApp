/** @format */

export type ButtonVariant =
  | "primary"
  | "hollow primary"
  | "secondary"
  | "hollow secondary"
  | "tertiary"
  | "hollow tertiary"
  | "ghost"
  | "success"
  | "warning"
  | "danger"

export type ButtonType = "button" | "submit" | "reset"
export type ButtonSize = "small" | "medium" | "large"

export interface BaseButtonProps {
  children?: React.ReactNode
  size?: ButtonSize
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
  type?: ButtonType
  disabled?: boolean
}

export interface PrimaryButtonProps extends BaseButtonProps {
  variant?: "primary"
}

export interface HollowPrimaryButtonProps extends BaseButtonProps {
  variant?: "hollow primary"
}

export interface SecondaryButtonProps extends BaseButtonProps {
  variant?: "secondary"
}

export interface HollowSecondaryButtonProps extends BaseButtonProps {
  variant?: "hollow secondary"
}

export interface TertiaryButtonProps extends BaseButtonProps {
  variant?: "tertiary"
}

export interface HollowTertiaryButtonProps extends BaseButtonProps {
  variant?: "hollow tertiary"
}

export interface GhostButtonProps extends BaseButtonProps {
  variant?: "ghost"
}

export interface SuccessButtonProps extends BaseButtonProps {
  variant?: "success"
}

export interface WarningButtonProps extends BaseButtonProps {
  variant?: "warning"
}

export interface DangerButtonProps extends BaseButtonProps {
  variant?: "danger"
}

export type ButtonProps =
  | PrimaryButtonProps
  | HollowPrimaryButtonProps
  | SecondaryButtonProps
  | HollowSecondaryButtonProps
  | TertiaryButtonProps
  | HollowTertiaryButtonProps
  | GhostButtonProps
  | SuccessButtonProps
  | WarningButtonProps
  | DangerButtonProps
