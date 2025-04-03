import { Route } from "react-router-dom";
import { CallbackPage } from "./page";

export const RedirectRouting=(
  <Route element={<CallbackPage />} path="signin-oidc" />
)