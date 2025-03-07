import { Route } from "react-router-dom";
import { CreditDetailsPage } from "./page";

export const CreditDetailsRouting=(
  <Route element={<CreditDetailsPage />} path=":id" />
)