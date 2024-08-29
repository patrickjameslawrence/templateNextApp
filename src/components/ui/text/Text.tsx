/** @format */

import { TextProps, TextSize } from "./Text.types"

export default function TextComponent({
  children = "Text",
  size = "medium",
  className,
  ...props
}: TextProps): React.ReactElement<TextProps> {
  // Function to determine the size class based on the size prop
  const getSizeClasses = (size: TextSize) => {
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

  return (
    <span
      {...props}
      className={`${sizeClasses} ${className}`}
    >
      {children}
    </span>
  )
}
