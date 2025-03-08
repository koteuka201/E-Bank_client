import { UserShortInfo } from "@shared/api"
import { UserItem } from "./userItem"
import { Link } from "react-router-dom"
import { GENERATE_USER_DETAILS_PAGE_URL } from "@shared/config"

export type UsersListRendererProps={
  users: UserShortInfo[]
}

export const UsersListRenderer=({users}: UsersListRendererProps)=>{
  
  if(users.length == 0){
    return(
    <div className="text-center font-semibold text-lg">
      Пользователи в этом разделе отсутствуют
    </div>
    )
  }

  return(
    <div className="grid gap-1.5">
      {users.map((user, index)=>(
        <Link to={GENERATE_USER_DETAILS_PAGE_URL(user.id, user.role)} key={index}>
          <UserItem
            id={user.id}
            isManuallyBlocked={user.isManuallyBlocked}
            role={user.role}
            userName={user.userName}
          />
        </Link>
      ))}
    </div>
  )
}