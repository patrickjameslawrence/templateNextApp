/** @format */

import React from "react"
import { HeadingProps, HeadingSize, HeadingVariant } from "./Heading.types"

export default function HeadingComponent({
  variant = "default",
  level,
  size = "medium",
  children = "Heading",
  className,
  ...props
}: HeadingProps) {
  // Function to determine the size class based on the size prop
  const getSizeClasses = (size: HeadingSize) => {
    switch (size) {
      case "small":
        return "text-sm sm:text-base md:text-lg lg:text-xl"
      case "medium":
        return "text-base sm:text-lg md:text-xl lg:text-2xl"
      case "large":
        return "text-lg sm:text-xl md:text-2xl lg:text-3xl"
      default:
        return ""
    }
  }

  // Common size class based on size prop
  const sizeClasses = getSizeClasses(size)

  const getVariantClasses = (variant: HeadingVariant) => {
    switch (variant) {
      case "primary":
        return "text-primary"
      case "secondary":
        return "text-secondary"
      case "tertiary":
        return "text-tertiary"
      case "default":
      default:
        return ""
    }
  }

  const variantClasses = getVariantClasses(variant)

  return React.createElement(
    level,
    {
      ...props,
      className: `font-bold tracking-tight ${variantClasses} ${sizeClasses} ${className}`,
    },
    children
  )
}
