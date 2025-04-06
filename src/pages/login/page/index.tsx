import { LoginBody, useLogin } from "@features/login"
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from "@shared/components"
import { REGISTER_PAGE_URL, WELCOME_PAGE_URL } from "@shared/config"
import userManager from "@shared/contexts/oauth/userManager"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { UserRole } from '@shared/api';

export const LoginPage=()=>{

  const navigate=useNavigate()
  const {control, handleSubmit, reset, formState: {errors}}=useForm<LoginBody>() 
  const {mutate: login, isPending }=useLogin()

  const onSubmit: SubmitHandler<LoginBody>=useCallback((data)=>{
    if(data.email == undefined || data.password == undefined) return
    login({ data },
    {
      onSuccess: (response) => {
        localStorage.setItem('token', response.token)
        reset()
        navigate(WELCOME_PAGE_URL)
      },
    }
  )
  },[login, navigate, reset])

  //добавил этот прикол сюда, по идеи можешь создать провайдер какой-нить, чтобы он сам постоянно кидал на страницу, если у чела нет токена
  //ну или так и оставить, в принципе не особо важно
  //надо добавить logout с удалением токена и из куки, потому что оно туда сохраняет
  //надо ещё кнопку закастомить, чтобы было органично + убрать лишнее, потому что авторизация теперь только через сторонний сервис делается я так понял
  const oauth = () => {
    const redirectPath = import.meta.env["VITE_APP_TYPE"]===UserRole.Client
    ? 'http://158.160.18.15:5175/signin-oidc'
    : 'http://158.160.18.15:5174/signin-oidc'

    userManager.signinRedirect({
      state: { path: redirectPath },  //можно добавить путь по которому оно будет редиректнуто после успешного логина, вроде не должно поломаться
    }).catch((error) => {
      console.error("Ошибка при signinRedirect:", error);
    });
  };

  return(
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm p-6">
        <CardHeader>
          <CardTitle className="text-center">Вход в аккаунт</CardTitle>
        </CardHeader>
        <CardContent>
          <button className="btn btn-primary btn-sm" onClick={() => oauth()}>
            Oauth
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Controller 
                defaultValue=""
                name="email"
                control={control}
                rules={{required: "Это обязательное поле"}}
                render={({field})=>(
                  <Input 
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Введите email" 
                    required
                  />
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
                rules={{required: "Это обязательное поле"}}
                render={({field})=>(
                  <Input 
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Введите пароль" 
                    required
                  />
                )}
              />
              {errors.password && <span className="text-red text-sm">{errors.password.message}</span>}
            </div>
            <Button isLoading={isPending} type="submit" className="w-full">Войти</Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Нет аккаунта?{" "}
            <Link to={REGISTER_PAGE_URL} className="text-blue-500 hover:underline">
              Зарегистрироваться
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}