/** @format */

const enum SIZES {
  Small = "text-sm",
  Medium = "text-base",
  Large = "text-lg",
}

export function NameInputComponent({
  size = "medium",
  label = "Input",
  id,
  placeholder = "John Doe",
  required = false,
  ...props
}: {
  id: string
  placeholder?: string
  required?: boolean
  className?: string
  size?: "large" | "medium" | "small"
  label?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          (size === "medium"
            ? SIZES.Medium
            : size === "small"
              ? SIZES.Small
              : SIZES.Large) +
          (required ? " after:content-['*']" : "") +
          " text-tertiary font-semibold"
        }
      >
        {label}
      </label>
      <input
        id={id}
        autoComplete="name"
        placeholder={placeholder}
        type="text"
        inputMode="text"
        required={required}
        className={
          "bg-lightBackground placeholder:text-tertiary border-lightBorder dark:bg-darkBackground dark:border-darkBorder focus:ring-primary rounded-none border p-1 text-black focus:ring dark:text-white" +
          " " +
          props.className
        }
      />
    </div>
  )
}

export function EmailInputComponent({
  size = "medium",
  label = "Input",
  id,
  placeholder = "email@example.com",
  required = false,
  ...props
}: {
  id: string
  placeholder?: string
  required?: boolean
  className?: string
  size?: "large" | "medium" | "small"
  label?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          (size === "medium"
            ? SIZES.Medium
            : size === "small"
              ? SIZES.Small
              : SIZES.Large) +
          (required ? " after:content-['*']" : "") +
          " text-tertiary font-semibold"
        }
      >
        {label}
      </label>
      <input
        id={id}
        autoComplete="email"
        placeholder={placeholder}
        type="email"
        inputMode="email"
        required={required}
        className={
          "bg-lightBackground placeholder:text-tertiary border-lightBorder dark:bg-darkBackground dark:border-darkBorder focus:ring-primary rounded-none border p-1 text-black focus:ring dark:text-white" +
          " " +
          props.className
        }
      />
    </div>
  )
}

export function PhoneInputComponent({
  size = "medium",
  label = "Input",
  id,
  placeholder = "+1 (123) - 456 - 7890",
  required = false,
  ...props
}: {
  id: string
  placeholder?: string
  required?: boolean
  className?: string
  size?: "large" | "medium" | "small"
  label?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          (size === "medium"
            ? SIZES.Medium
            : size === "small"
              ? SIZES.Small
              : SIZES.Large) +
          (required ? " after:content-['*']" : "") +
          " text-tertiary font-semibold"
        }
      >
        {label}
      </label>
      <input
        id={id}
        autoComplete="tel"
        placeholder={placeholder}
        type="tel"
        inputMode="tel"
        required={required}
        className={
          "bg-lightBackground border-lightBorder placeholder:text-tertiary dark:bg-darkBackground dark:border-darkBorder focus:ring-primary rounded-none border p-1 text-black focus:ring dark:text-white" +
          " " +
          props.className
        }
      />
    </div>
  )
}

export function UsernameInputComponent({
  size = "medium",
  label = "Input",
  id,
  placeholder = "johndoe",
  required = false,
  ...props
}: {
  id: string
  placeholder?: string
  required?: boolean
  className?: string
  size?: "large" | "medium" | "small"
  label?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          (size === "medium"
            ? SIZES.Medium
            : size === "small"
              ? SIZES.Small
              : SIZES.Large) +
          (required ? " after:content-['*']" : "") +
          " text-tertiary font-semibold"
        }
      >
        {label}
      </label>
      <div className="bg-lightBackground border-lightBorder focus-within:ring-primary dark:bg-darkBackground dark:border-darkBorder flex flex-row-reverse items-center border focus-within:ring">
        <input
          id={id}
          placeholder={placeholder}
          type="text"
          required={required}
          className={
            "bg-lightBackground placeholder:text-tertiary dark:bg-darkBackground peer w-full p-1 pl-0 focus:outline-none" +
            " " +
            props.className
          }
        />
        <span className="text-tertiary p-1 pl-1 peer-focus-visible:text-black peer-focus-visible:dark:text-white">
          @
        </span>
      </div>
    </div>
  )
}

export function PasswordInputComponent({
  size = "medium",
  label = "Input",
  id,
  required = false,
  placeholder = "••••••••",
  ...props
}: {
  id: string
  placeholder?: string
  required?: boolean
  className?: string
  size?: "large" | "medium" | "small"
  label?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          (size === "medium"
            ? SIZES.Medium
            : size === "small"
              ? SIZES.Small
              : SIZES.Large) +
          (required ? " after:content-['*']" : "") +
          " text-tertiary placeholder:text-tertiary font-semibold"
        }
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type="password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
        required={required}
        className={
          "bg-lightBackground border-lightBorder dark:bg-darkBackground dark:border-darkBorder invalid:border-destructive focus:ring-primary rounded-none border p-1 text-black focus:ring dark:text-white" +
          " " +
          props.className
        }
      />
    </div>
  )
}
