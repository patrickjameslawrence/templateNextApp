/** @format */

import Link from "next/link"

const enum SIZES {
  Small = "text-xs",
  Medium = "text-sm",
  Large = "text-md",
  ExtraLarge = "text-lg",
  ExtraExtraLarge = "text-xl",
}

export function PrimaryLinkComponent({
  children = "Link",
  href = "/",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  href?: string
  size?: "extraExtraLarge" | "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <Link
      {...props}
      href={href}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : size === "extraLarge"
                ? SIZES.ExtraLarge
                : SIZES.ExtraExtraLarge) +
        " font-bold text-neutral-500 transition hover:text-black dark:hover:text-white" +
        " " +
        props.className
      }
    >
      {children}
    </Link>
  )
}

export function SecondaryLinkComponent({
  children = "Link",
  href = "/",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  href?: string
  size?: "extraExtraLarge" | "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <Link
      {...props}
      href={href}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : size === "extraLarge"
                ? SIZES.ExtraLarge
                : SIZES.ExtraExtraLarge) +
        " font-bold decoration-2 underline-offset-4 transition hover:underline" +
        " " +
        props.className
      }
    >
      {children}
    </Link>
  )
}

export function TertiaryLinkComponent({
  children = "Link",
  href = "/",
  size = "medium",
  ...props
}: {
  children?: React.ReactNode
  className?: string
  href?: string
  size?: "extraExtraLarge" | "extraLarge" | "large" | "medium" | "small"
}) {
  return (
    <Link
      {...props}
      href={href}
      className={
        (size === "medium"
          ? SIZES.Medium
          : size === "small"
            ? SIZES.Small
            : size === "large"
              ? SIZES.Large
              : size === "extraLarge"
                ? SIZES.ExtraLarge
                : SIZES.ExtraExtraLarge) +
        " decoration-2 underline-offset-4 transition hover:underline" +
        " " +
        props.className
      }
    >
      {children}
    </Link>
  )
}
