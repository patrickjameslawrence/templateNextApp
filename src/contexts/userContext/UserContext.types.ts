/** @format */

import { User } from "@supabase/supabase-js"

export interface UserContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}
