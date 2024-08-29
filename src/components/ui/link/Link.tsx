/** @format */

import Link from "next/link"
import { LinkProps, LinkSize, LinkVariant } from "./Link.types"

export default function LinkComponent({
  variant = "default",
  children = "Link",
  size = "medium",
  href,
  className,
  ...props
}: LinkProps): React.ReactElement<LinkProps> {
  // Function to determine the size class based on the size prop
  const getSizeClasses = (size: LinkSize) => {
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

  const getVariantClasses = (variant: LinkVariant) => {
    switch (variant) {
      case "primary":
        return "text-primary font-bold hover:text-black dark:hover:text-white"
      case "secondary":
        return "text-secondary font-bold hover:text-black dark:hover:text-white"
      case "tertiary":
        return "decoration-2 underline-offset-4 hover:underline"
      case "default":
      default:
        return "text-tertiary font-bold hover:text-black dark:hover:text-white"
    }
  }

  const variantClasses = getVariantClasses(variant)

  return (
    <Link
      {...props}
      href={href}
      className={`transition ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </Link>
  )
}
