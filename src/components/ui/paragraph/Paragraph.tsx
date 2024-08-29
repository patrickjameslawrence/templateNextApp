/** @format */

import { ParagraphProps, ParagraphSize } from "./Paragraph.types"

export default function ParagraphComponent({
  children = "Paragraph",
  size = "medium",
  className,
  ...props
}: ParagraphProps): React.ReactElement<ParagraphProps> {
  // Function to determine the size class based on the size prop
  const getSizeClasses = (size: ParagraphSize) => {
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
    <p
      {...props}
      className={`${sizeClasses} ${className}`}
    >
      {children}
    </p>
  )
}
