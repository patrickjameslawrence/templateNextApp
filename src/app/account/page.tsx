/** @format */

import AccountComponent from "@/components/Account"
import AccountHeader from "@/components/account/AccountHeader"
import { createClient } from "@/utils/supabase/server"

export default async function AccountPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <main>
      <AccountHeader user={user} />
      <AccountComponent user={user} />
    </main>
  )
}
