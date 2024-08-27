/** @format */

import { PrimaryButtonComponent } from "@/components/ui/Button"
import FormComponent from "@/components/ui/form/Form"
import {
  EmailInputComponent,
  PasswordInputComponent,
  UsernameInputComponent,
} from "@/components/ui/form/Input"
import { PrimaryHeadingComponent } from "@/components/ui/Heading"
import { SecondaryLinkComponent } from "@/components/ui/Link"
import ParagraphComponent from "@/components/ui/Paragraph"

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <PrimaryHeadingComponent className="py-6">
        Sign up for a new account
      </PrimaryHeadingComponent>
      <FormComponent>
        <EmailInputComponent
          id="email"
          size="small"
          label="Email"
          required
        />
        <UsernameInputComponent
          id="username"
          size="small"
          label="Username"
          required
        ></UsernameInputComponent>
        <div>
          <PasswordInputComponent
            id="password"
            size="small"
            label="Password"
            required
          />
          <span className="text-tertiary text-xs">
            8 characters minimum with a lowercase, uppercase, number, and
            special character
          </span>
        </div>
        <PasswordInputComponent
          id="confirmPassword"
          size="small"
          label="Confirm password"
          required
        />
        <PrimaryButtonComponent
          className="mt-5"
          type="submit"
        >
          Create Account
        </PrimaryButtonComponent>
      </FormComponent>
      <ParagraphComponent>
        Already have an account?{" "}
        <SecondaryLinkComponent
          className="my-5"
          href="/signin"
          size="large"
        >
          Sign in here
        </SecondaryLinkComponent>
      </ParagraphComponent>
    </main>
  )
}
