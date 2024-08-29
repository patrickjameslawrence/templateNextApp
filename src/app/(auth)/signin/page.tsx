/** @format */

"use client"

import ButtonComponent from "@/components/ui/button/Button"
import FormComponent from "@/components/ui/form/Form"
import InputComponent from "@/components/ui/form/input/Input"
import HeadingComponent from "@/components/ui/heading/Heading"
import LinkComponent from "@/components/ui/link/Link"
import ParagraphComponent from "@/components/ui/paragraph/Paragraph"
import signIn from "./actions"

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <HeadingComponent
        level="h1"
        className="py-6"
      >
        Sign in to your account
      </HeadingComponent>
      <FormComponent action={signIn}>
        <InputComponent
          type="email"
          id="email"
          name="email"
          size="small"
          label="Email"
          required
        />
        <InputComponent
          type="password"
          id="password"
          name="password"
          size="small"
          label="Password"
          required
        />
        <ButtonComponent
          className="mt-5"
          type="submit"
          onClick={() => {}}
        >
          Login
        </ButtonComponent>
      </FormComponent>
      <ParagraphComponent size="small">
        Don&apos;t have an account?{" "}
        <LinkComponent
          variant="primary"
          className="my-5"
          href="/signup"
          size="small"
        >
          Sign up here
        </LinkComponent>
      </ParagraphComponent>
    </main>
  )
}
