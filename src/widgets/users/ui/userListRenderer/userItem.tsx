import { UserRole } from "@shared/api"
import { useMemo } from "react"
import { BlockUserButton } from "../blockUserButton"
import { Button } from "@shared/components"
import { Link } from "react-router-dom"
import { GENERATE_USER_DETAILS_PAGE_URL } from "@shared/config"

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
        <span className="text-lg">
          {userName}
          <div className="inline-block rounded-lg text-[12px] bg-bgMain py-0.5 px-2.5 ms-2">{roleText}</div>
        </span>
        {isManuallyBlocked===false ? (
          <BlockUserButton id={id} />
        ) : (
          <span className="text-red">Заблокирован</span>
        )}
      </div>
      <div className="flex justify-end items-center mt-1.5">
        <Link to={GENERATE_USER_DETAILS_PAGE_URL(id, role)}>
          <Button className="text-sm" variant={"main"} size={"sm"}>Подробнее</Button>
        </Link>
      </div>
    </div>
  )
}