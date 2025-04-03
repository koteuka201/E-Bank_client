import { Navigate, Outlet } from "react-router-dom";

export type AppTypeCheckRoutesProps={
  readonly appType: 'Client' | 'Employee'
}

export const AppTypeCheckRoutes=({appType}:AppTypeCheckRoutesProps)=>{
  if(import.meta.env["VITE_APP_TYPE"]!= undefined && appType !== import.meta.env["VITE_APP_TYPE"]){
    return <Navigate to={'*'} />
  }

  return <Outlet />
}