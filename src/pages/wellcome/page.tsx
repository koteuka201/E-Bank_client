import { Card } from "@shared/components";

export const WellcomePage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <Card className="text-center p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-3xl font-bold text-main mb-4">Добро пожаловать в E-Bank!</div>
        <div className="text-lg text-gray-700 dark:text-white">
          Ваши финансы под контролем. Мы предлагаем быстрые и удобные решения для управления вашими деньгами.
        </div>
      </Card>
    </div>
  )
}
