import { Route } from "react-router-dom";
import { ClientsFeedRouting } from "./clientsFeed";
import { EmployeeRouting } from "./emploeeFeed";
import { UserDetailsPageRouting } from "./clientDetails";

export const ClientsRouting=(
  <>
    <Route
      path="clients"
    >
      {ClientsFeedRouting}
    </Route>
    <Route
      path="user"
    >
      {UserDetailsPageRouting}
    </Route>
    <Route
      path="employee"
    >
      {EmployeeRouting}
    </Route>
  </>
)