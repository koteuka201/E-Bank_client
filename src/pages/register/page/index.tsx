import { RegisterBody, useRegistration } from "@features/register"
import { UserRole } from "@shared/api"
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { LOGIN_PAGE_URL } from "@shared/config"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

export const RegistrationPage=()=>{
  
  const navigate=useNavigate()
  const { control, handleSubmit,reset, formState: { errors } } = useForm<RegisterBody>()
  const {mutate: registration, isPending}=useRegistration()

  const onSubmit: SubmitHandler<RegisterBody>=useCallback((data)=>{
    
    if(data.email == undefined || data.password == undefined || data.role==undefined || data.userName==undefined) return
    registration({ data },
    {
      onSuccess: () => {
        reset()
        navigate(LOGIN_PAGE_URL)
      },
    }
  )
  },[registration, navigate, reset])

  return(
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm p-6">
        <CardHeader>
          <CardTitle className="text-center">Регистрация</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="userName">Имя пользователя</Label>
              <Controller
                defaultValue=""
                name="userName"
                control={control}
                rules={{ required: "Это обязательное поле" }}
                render={({ field }) => (
                  <Input {...field} id="userName" placeholder="Введите имя пользователя" required />
                )}
              />
              {errors.userName && <span className="text-red text-sm">{errors.userName.message}</span>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Controller
                defaultValue=""
                name="email"
                control={control}
                rules={{ 
                  required: "Это обязательное поле"
                }}
                render={({ field }) => (
                  <Input {...field} id="email" type="email" placeholder="Введите email" required />
                )}
              />
              {errors.email && <span className="text-red text-sm">{errors.email.message}</span>}
            </div>
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Controller
                defaultValue=""
                name="password"
                control={control}
                rules={{ 
                  required: "Это обязательное поле" 
                }}
                render={({ field }) => (
                  <Input {...field} id="password" type="password" placeholder="Введите пароль" required />
                )}
              />
              {errors.password && <span className="text-red text-sm">{errors.password.message}</span>}
            </div>
            <div>
              <Label htmlFor="role">Роль</Label>
              <Controller
                name="role"
                defaultValue={UserRole.Client}
                control={control}
                rules={{ required: "Выберите роль" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите роль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={UserRole.Client}>Клиент</SelectItem>
                      <SelectItem value={UserRole.Employee}>Сотрудник</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.role && <span className="text-red text-sm">{errors.role.message}</span>}
            </div>
            <Button isLoading={isPending} type="submit" className="w-full">Зарегистрироваться</Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Уже бывали у нас?{" "}
            <Link to={LOGIN_PAGE_URL} className="text-blue-500 hover:underline">
              Войти в аккаунт
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}