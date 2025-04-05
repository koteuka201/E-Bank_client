import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "@shared/contexts/oauth/userManager";
import { WELCOME_PAGE_URL } from "@shared/config";

//нужен чтобы обработать действия после удачного логина
export const CallbackPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    userManager.signinRedirectCallback()
      .then((user) => {
        console.log("Успешный логин:", user); //посмотри как там выглядит оно, там не чисто токен, потом можешь удалить в принципе
        const redirectPath = user.state?.path || WELCOME_PAGE_URL; //путь для редиректа, по идеи тут ты можешь че угодно вставить
        localStorage.setItem('token', user.access_token) //собственно берёт сам токен и вставляет его
        navigate(redirectPath);
      })
      .catch((error) => {
        console.error("Ошибка при обработке callback:", error);
      });
  }, [navigate]);

  return <div>Загрузка...</div>;
};