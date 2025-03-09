import { UserShortInfo } from "@shared/api"
import { UserItem } from "./userItem"

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
        <UserItem
          key={index}
          id={user.id}
          isManuallyBlocked={user.isManuallyBlocked}
          role={user.role}
          userName={user.userName}
          email={user.email}
        />
      ))}
    </div>
  )
}