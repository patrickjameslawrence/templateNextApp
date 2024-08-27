/** @format */

const enum SIZES {
  Small = "text-xs px-2 py-1",
  Medium = "text-sm px-2.5 py-1.5",
  Large = "text-sm px-3.5 py-2.5",
  ExtraLarge = "text-base px-4 py-3",
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
        " border-primary bg-primary hover:border-hoveredPrimary hover:bg-hoveredPrimary border-2 font-semibold text-white shadow transition active:scale-95 active:shadow-none dark:shadow-none" +
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
        " border-primary text-primary hover:bg-primary border-2 font-semibold shadow transition hover:text-white active:scale-95 active:shadow-none dark:shadow-none" +
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
        " border-secondary bg-secondary hover:border-hoveredSecondary hover:bg-hoveredSecondary border-2 font-semibold text-white transition active:scale-95" +
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
        " border-secondary text-secondary hover:bg-secondary border-2 font-semibold transition hover:text-white active:scale-95" +
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
        " hover:border-hoveredTertiary hover:bg-hoveredTertiary border-tertiary bg-tertiary border-2 font-semibold text-white shadow transition active:scale-95 active:shadow-none dark:shadow-none" +
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
        " border-tertiary text-tertiary hover:bg-tertiary border-2 font-semibold shadow transition hover:text-white active:scale-95 active:shadow-none dark:shadow-none" +
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
        " hover:bg-hoveredLightBackground hover:border-lightBorder hover:dark:border-darkBorder hover:dark:bg-hoveredDarkBackground border-2 border-transparent font-semibold text-black transition hover:shadow active:shadow-none dark:text-white dark:shadow-none" +
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
        " border-2 border-neutral-500 bg-neutral-500 font-semibold text-white transition" +
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
        " border-success bg-success hover:border-success hover:bg-success border-2 font-semibold text-white shadow transition active:scale-95 active:shadow-none dark:shadow-none" +
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
        " border-warning bg-warning hover:border-warning hover:bg-warning border-2 font-semibold text-white shadow transition active:scale-95 active:shadow-none dark:shadow-none" +
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
