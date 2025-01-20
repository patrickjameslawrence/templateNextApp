/** @format */

"use client"

import { User } from "@supabase/supabase-js"
import { createContext, ReactNode, useContext, useState } from "react"
import { UserContextType } from "./UserContext.types"

export const UserContext = createContext<UserContextType | null>(null)

export function UserContextProvider({
  children,
  initialUser,
}: {
  children: ReactNode
  initialUser: User | null
}) {
  const [user, setUser] = useState<User | null>(initialUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext(): UserContextType {
  const userContext = useContext(UserContext)
  if (!userContext) {
    throw new Error("useUserContext must be used within a UserContextProvider")
  }
  return userContext
}
