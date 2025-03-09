import { Button, Card, CardContent, CardHeader, CardTitle } from "@shared/components";
import { REGISTER_PAGE_URL, LOGIN_PAGE_URL } from "@shared/config";
import { Link } from "react-router-dom";

export const BannedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bgMain">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-red-600">Аккаунт заблокирован</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-700 mb-4">
            Ваш аккаунт был заблокирован. Вы можете войти в другой аккаунт или зарегистрировать новый.
          </p>
          <div className="flex flex-col space-y-3">
            <Button asChild>
              <Link to={LOGIN_PAGE_URL}>Войти в другой аккаунт</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to={REGISTER_PAGE_URL}>Зарегистрировать новый</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
