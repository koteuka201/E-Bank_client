import { UserRole } from "@shared/api"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shared/components"
import userManager from "@shared/contexts/oauth/userManager"
import { ArrowRight, Building, Shield } from "lucide-react"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

export const LoginPage=()=>{
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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Вход в аккаунт</CardTitle>
          <CardDescription className="text-center">
            Используйте ваш E-bank аккаунт для безопасного входа в систему
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 border rounded-lg bg-primary/5">
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Безопасный вход</h3>
                <p className="text-sm text-muted-foreground">
                  Ваши данные защищены. Приложение не хранит ваши данные для входа
                </p>
              </div>
            </div>
          </div>
          <Button type="button" className="w-full h-12 text-base font-medium" onClick={oauth}>
            <div className="flex items-center justify-center">
              Войти с помощью E-bank аккаунт
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}