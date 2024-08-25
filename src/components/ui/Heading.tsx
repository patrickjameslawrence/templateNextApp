/** @format */

export function PrimaryHeadingComponent({
  children = "Heading",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <h1
      {...props}
      className={
        "text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl " +
        props.className
      }
    >
      {children}
    </h1>
  )
}

export function SecondaryHeadingComponent({
  children = "Heading",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <h2
      {...props}
      className={
        "text-lg font-bold tracking-tight sm:text-xl md:text-2xl lg:text-3xl " +
        props.className
      }
    >
      {children}
    </h2>
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
      className={
        "text-sm text-neutral-500 sm:text-base md:text-lg lg:text-xl " +
        props.className
      }
    >
      {children}
    </p>
  )
}
