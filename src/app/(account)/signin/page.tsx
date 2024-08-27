/** @format */

import { PrimaryButtonComponent } from "@/components/ui/Button"
import FormComponent from "@/components/ui/form/Form"
import {
  EmailInputComponent,
  PasswordInputComponent,
} from "@/components/ui/form/Input"
import { PrimaryHeadingComponent } from "@/components/ui/Heading"
import { SecondaryLinkComponent } from "@/components/ui/Link"
import ParagraphComponent from "@/components/ui/Paragraph"

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <PrimaryHeadingComponent className="py-6">
        Sign in to your account
      </PrimaryHeadingComponent>
      <FormComponent>
        <EmailInputComponent
          id="email"
          size="small"
          label="Email"
          required
        />
        <PasswordInputComponent
          id="password"
          size="small"
          label="Password"
          required
        />
        <PrimaryButtonComponent
          className="mt-5"
          type="submit"
        >
          Login
        </PrimaryButtonComponent>
      </FormComponent>
      <ParagraphComponent>
        Don't have an account?{" "}
        <SecondaryLinkComponent
          className="my-5"
          href="/signup"
          size="large"
        >
          Sign up here
        </SecondaryLinkComponent>
      </ParagraphComponent>
    </main>
  )
}
