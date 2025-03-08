import { Route } from "react-router-dom";
import { ClientsFeedRouting } from "./clientsFeed";
import { EmployeeRouting } from "./emploeeFeed";

export const ClientsRouting=(
  <>
    <Route
      path="clients"
    >
      {ClientsFeedRouting}
    </Route>
    <Route
      path="employee"
    >
      {EmployeeRouting}
    </Route>
  </>
)