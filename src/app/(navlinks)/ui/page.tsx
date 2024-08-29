/** @format */

"use client"

import ButtonComponent from "@/components/ui/button/Button"
import HeadingComponent from "@/components/ui/heading/Heading"

export default function NavLinkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <HeadingComponent level="h1">UI Kit</HeadingComponent>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          size="small"
        />
        <ButtonComponent onClick={() => {}} />
        <ButtonComponent
          onClick={() => {}}
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="hollow primary"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="hollow primary"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="hollow primary"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="secondary"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="secondary"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="secondary"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="hollow secondary"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="hollow secondary"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="hollow secondary"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="tertiary"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="tertiary"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="tertiary"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="hollow tertiary"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="hollow tertiary"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="hollow tertiary"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="ghost"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="ghost"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="ghost"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="success"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="success"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="success"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="warning"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="warning"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="warning"
          size="large"
        />
      </div>
      <div className="flex items-center gap-5">
        <ButtonComponent
          onClick={() => {}}
          variant="danger"
          size="small"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="danger"
        />
        <ButtonComponent
          onClick={() => {}}
          variant="danger"
          size="large"
        />
      </div>
    </main>
  )
}
