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
        "text-xs text-neutral-500 sm:text-sm md:text-base lg:text-lg " +
        props.className
      }
    >
      {children}
    </p>
  )
}
