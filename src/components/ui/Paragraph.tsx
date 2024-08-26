/** @format */

export default function ParagraphComponent({
  children = "Heading",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <p
      {...props}
      className={
        "text-tertiary text-xs sm:text-sm md:text-base lg:text-lg" +
        props.className
      }
    >
      {children}
    </p>
  )
}
