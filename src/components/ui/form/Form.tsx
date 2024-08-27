/** @format */

export default function FormComponent({
  children = "Form",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <form className={"flex w-full flex-col gap-3" + " " + props.className}>
      {children}
    </form>
  )
}
