import { Route } from "react-router-dom"
import { MyAccountsRouting } from "./myAccounts"
import { DebitAccountDetailsRouting } from "./debitAccount"
import { CreaditAccountDetailsRouting } from "./creditAccount"
import { AccountPaymentsHistoryRouting } from "./accountPaymentsHistory"

export const AccountsRouting=(
  <>
    <Route path="accounts">
      {MyAccountsRouting}
    </Route>
    <Route path="account">
      {DebitAccountDetailsRouting}
      {CreaditAccountDetailsRouting}
      {AccountPaymentsHistoryRouting}
    </Route>
  </>
)