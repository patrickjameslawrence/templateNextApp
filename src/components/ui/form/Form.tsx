/** @format */

import { FormProps } from "./Form.types"

export default function FormComponent({
  children = "Form",
  action,
  className,
  ...props
}: FormProps): React.ReactElement<FormProps> {
  return (
    <form
      {...props}
      className={`flex flex-col gap-3 ${className}`}
      action={action}
    >
      {children}
    </form>
  )
}
