import { Route } from "react-router-dom";
import { UserDetailsPage } from "./page";

export const UserDetailsPageRouting=(
  <Route element={<UserDetailsPage />} path=":id/details" />
)