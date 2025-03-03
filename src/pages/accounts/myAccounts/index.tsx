import { Route } from "react-router-dom"
import { MyAccounts } from "./page"

export const MyAccountsRouting=(
  <Route
    element={<MyAccounts />}
    path="my"
  >
    <Route element={<MyAccounts />} path=":page" />
  </Route>
)