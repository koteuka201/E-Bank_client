import { UserRole } from "@shared/api"
import { useMemo } from "react"

export type UserItemProps={
  id: string
  role: UserRole
  isManuallyBlocked: boolean
  userName: string | undefined
}

export const UserItem=({
  id,
  role,
  isManuallyBlocked,
  userName
}:UserItemProps)=>{

  const roleText=useMemo(()=>{
    switch(role){
      case UserRole.Client:
        return 'Клиент'
      case UserRole.Employee:
        return 'Сотрудник'
    }
  },[role])

  return(
    <div className="border rounded-md p-3 font-semibold">
      <div className="flex justify-between items-center">
        <span className="text-lg">{userName}</span>
        {isManuallyBlocked===false ? (
          <button>заблокировать</button>

        ) : (
          <span className="text-red">Заблокирован</span>
        )}
      </div>
      <div className="inline-block rounded-lg text-[12px] bg-bgMain py-0.5 px-2.5">{roleText}</div>
    </div>
  )
}