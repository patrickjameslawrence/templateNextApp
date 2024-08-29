/** @format */

export interface BaseFormProps {
  children?: React.ReactNode
  action: (event: FormData) => void
  className?: string
}

export type FormProps = BaseFormProps
