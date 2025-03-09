import { CirclePlus } from "lucide-react"
import { CommonCard } from "@shared/ui"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label } from "@shared/components"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useSwitch } from "@shared/lib"
import { UserRole } from "@shared/api"
import { CreateUserBody, useCreateUser } from "@features/users"

export type CreateUserButtonProps={
  userRole: UserRole
}

export const CreateUserButton=({userRole}:CreateUserButtonProps)=>{

  const {control, handleSubmit, reset, formState: {errors}}=useForm<CreateUserBody>()
  const {mutate: createUser}=useCreateUser()

  const [isOpen, , ,handleClose, handleOpen]=useSwitch()

  const onClose=useCallback(()=>{
    reset()
    handleClose()
  },[reset, handleClose])

  const onSubmit: SubmitHandler<CreateUserBody>=useCallback((data)=>{
    if(
      data.userName==undefined || 
      data.email==undefined || 
      data.password==undefined
    ) return
    createUser({
      data:{
        userName: data.userName,
        email: data.email,
        password: data.password,
        role: userRole
      }
    }, {onSuccess: onClose})
  },[createUser, onClose])

  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <div className="grid grid-cols-10 mt-4">
        <div className="col-span-3">
          <CommonCard className="p-3 cursor-pointer" onClick={handleOpen}>
            <CirclePlus strokeWidth={1.5} size={28} />
            <div className="mt-[25px] font-semibold text-lg">Зарегистрировать</div>
            <div className="text-sm text-gray-600 font-semibold">{userRole===UserRole.Client ? 'клиента' : 'сотрудника'}</div>
          </CommonCard>
        </div>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Регистрация нового пользователя</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="userName">
              ФИО
            </Label>
            <Controller 
              defaultValue=""
              name="userName"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Input 
                  {...field}
                  id="userName"
                  type="text"
                  placeholder="Введите фио пользователя"
                />
              )}
            />
            {errors.userName && <span className="text-red text-sm">{errors.userName.message}</span>}
          </div>
          <div>
            <Label htmlFor="email">
              Email
            </Label>
            <Controller 
              defaultValue=""
              name="email"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Input 
                  {...field}
                  id="email"
                  type="text"
                  placeholder="Введите email"
                />
              )}
            />
            {errors.email && <span className="text-red text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <Label htmlFor="password">
              Пароль
            </Label>
            <Controller 
              defaultValue=""
              name="password"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Input 
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Введите пароль от аккаунта"
                />
              )}
            />
            {errors.password && <span className="text-red text-sm">{errors.password.message}</span>}
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant={'gray'} onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit" variant={'main'}>
              Создать
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}