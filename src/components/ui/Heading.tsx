/** @format */

export function HeadingComponent({
  children = "Heading",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <h1
      {...props}
      className={"text-5xl font-bold tracking-tight " + props.className}
    >
      {children}
    </h1>
  )
}

export function SubheadingComponent({
  children = "Subheading",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <p
      {...props}
      className={"text-neutral-500 " + props.className}
    >
      {children}
    </p>
  )
}
