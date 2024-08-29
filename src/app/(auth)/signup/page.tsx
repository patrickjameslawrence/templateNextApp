/** @format */

"use client"

import ButtonComponent from "@/components/ui/button/Button"
import FormComponent from "@/components/ui/form/Form"
import InputComponent from "@/components/ui/form/input/Input"
import HeadingComponent from "@/components/ui/heading/Heading"
import LinkComponent from "@/components/ui/link/Link"
import TextComponent from "@/components/ui/text/Text"
import signUp from "./actions"

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <HeadingComponent
        level="h1"
        className="py-6"
      >
        Sign up for a new account
      </HeadingComponent>
      <FormComponent action={signUp}>
        <InputComponent
          type="email"
          id="email"
          name="email"
          size="small"
          label="Email"
          placeholder="john.doe@example.com"
          required
        />
        <InputComponent
          type="text"
          textVariant="username"
          id="username"
          name="username"
          size="small"
          label="Username"
          placeholder="johndoe"
          required
        />
        <div>
          <InputComponent
            type="password"
            id="password"
            name="password"
            size="small"
            label="Password"
            placeholder="••••••••••••"
            required
          />
          <TextComponent
            size="small"
            className="text-tertiary"
          >
            8 characters minimum with a lowercase, uppercase, number, and
            special character
          </TextComponent>
        </div>
        <InputComponent
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          size="small"
          label="Confirm password"
          placeholder="••••••••••••"
          required
        />
        <ButtonComponent
          className="mt-5"
          type="submit"
          onClick={() => {}}
        >
          Create Account
        </ButtonComponent>
      </FormComponent>
      <TextComponent size="small">
        Already have an account?{" "}
        <LinkComponent
          variant="primary"
          className="my-5"
          href="/signin"
          size="small"
        >
          Sign in here
        </LinkComponent>
      </TextComponent>
    </main>
  )
}
