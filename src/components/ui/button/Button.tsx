/** @format */

import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types"

export default function ButtonComponent({
  variant = "primary",
  children = "Button",
  size = "medium",
  onClick,
  className,
  type = "button",
  disabled,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  // Function to determine the size class based on the size prop
  const getSizeClasses = (size: ButtonSize) => {
    switch (size) {
      case "small":
        return "text-xs px-2 py-1"
      case "medium":
        return "text-sm px-2.5 py-1.5"
      case "large":
        return "text-sm px-3.5 py-2.5"
      default:
        return ""
    }
  }

  // Common size class based on size prop
  const sizeClasses = getSizeClasses(size)

  const getVariantClasses = (variant: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return "border-2 border-primary bg-primary font-semibold text-white shadow transition hover:border-hoveredPrimary hover:bg-hoveredPrimary active:scale-95 active:shadow-none dark:shadow-none"
      case "hollow primary":
        return "border-2 border-primary font-semibold text-primary shadow transition hover:bg-primary hover:text-white active:scale-95 active:shadow-none dark:shadow-none"
      case "secondary":
        return "border-2 border-secondary bg-secondary font-semibold text-white shadow transition hover:border-hoveredSecondary hover:bg-hoveredSecondary active:scale-95 active:shadow-none dark:shadow-none"
      case "hollow secondary":
        return "border-2 border-secondary font-semibold text-secondary shadow transition hover:bg-secondary hover:text-white active:scale-95 active:shadow-none dark:shadow-none"
      case "tertiary":
        return "border-2 border-tertiary bg-tertiary font-semibold text-white shadow transition hover:border-hoveredTertiary hover:bg-hoveredTertiary active:scale-95 active:shadow-none dark:shadow-none"
      case "hollow tertiary":
        return "border-2 border-tertiary font-semibold text-tertiary shadow transition hover:bg-tertiary hover:text-white active:scale-95 active:shadow-none dark:shadow-none"
      case "ghost":
        return "border-2 border-transparent font-semibold text-black transition hover:border-lightBorder hover:bg-hoveredLightBackground hover:shadow active:shadow-none dark:text-white dark:shadow-none hover:dark:border-darkBorder hover:dark:bg-hoveredDarkBackground"
      case "success":
        return "border-2 border-success bg-success font-semibold text-white shadow transition hover:border-success hover:bg-success active:scale-95 active:shadow-none dark:shadow-none"
      case "warning":
        return "border-2 border-warning bg-warning font-semibold text-white shadow transition hover:border-warning hover:bg-warning active:scale-95 active:shadow-none dark:shadow-none"
      case "danger":
        return "border-2 border-destructive bg-destructive font-semibold text-white shadow transition hover:border-destructive hover:bg-destructive active:scale-95 active:shadow-none dark:shadow-none"
      default:
        return ""
    }
  }

  const variantClasses = getVariantClasses(variant)

  return (
    <button
      {...props}
      type={type}
      className={`${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
