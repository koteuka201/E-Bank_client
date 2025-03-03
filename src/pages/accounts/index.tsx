import { Route } from "react-router-dom"
import { MyAccountsRouting } from "./myAccounts"

export const AccountsRouting=(
  <>
    <Route path="accounts">
      {MyAccountsRouting}
    </Route>
  </>
)