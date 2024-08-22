/** @format */

const enum SIZES {
  Small = "text-xs px-2 py-1",
  Medium = "text-sm px-2.5 py-1.5",
  Large = "text-sm px-3.5 py-2.5",
  ExtraLarge = "text-md px-4 py-3",
}

export function PrimaryButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-blue-500 bg-blue-500 font-semibold text-white shadow transition hover:border-blue-400 hover:bg-blue-400 active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function HollowPrimaryButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-blue-500 font-semibold text-blue-500 shadow transition hover:bg-blue-500 hover:text-white active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function SecondaryButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-orange-500 bg-orange-500 font-semibold text-white transition hover:border-orange-400 hover:bg-orange-400 active:scale-95" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function HollowSecondaryButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-orange-500 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white active:scale-95" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function TertiaryButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-neutral-500 bg-neutral-500 font-semibold text-white shadow transition hover:border-neutral-400 hover:bg-neutral-400 active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function HollowTertiaryButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-neutral-500 font-semibold text-neutral-500 shadow transition hover:bg-neutral-500 hover:text-white active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function TextButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      disabled
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-transparent font-semibold text-black transition hover:border-neutral-300 hover:bg-neutral-300 hover:shadow active:shadow-none dark:text-white dark:shadow-none hover:dark:border-neutral-700 hover:dark:bg-neutral-700" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function DisabledButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      disabled
      {...props}
      type={type}
      aria-hidden="true"
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-neutral-300 bg-neutral-300 font-semibold text-white transition dark:border-neutral-700 dark:bg-neutral-700" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function SuccessButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-green-500 bg-green-500 font-semibold text-white shadow transition hover:border-green-400 hover:bg-green-400 active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function WarningButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-yellow-500 bg-yellow-500 font-semibold text-white shadow transition hover:border-yellow-400 hover:bg-yellow-400 active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}

export function DestructiveButtonComponent({
  children = "Button",
  type = "button",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  type?: "reset" | "submit" | "button"
  size?: "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <button
      {...props}
      type={type}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : SIZES.ExtraLarge) +
        " border-2 border-red-500 bg-red-500 font-semibold text-white shadow transition hover:border-red-400 hover:bg-red-400 active:scale-95 active:shadow-none dark:shadow-none" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  )
}
