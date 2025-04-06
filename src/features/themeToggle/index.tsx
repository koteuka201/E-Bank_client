import { useGetMyProfile } from "@entities/clients"
import { useCreateUserConfig } from "@features/users/createUserConfig"
import { Button } from "@shared/components"
import { UseCreateDefaultConfigOrGetParsed } from "@shared/lib"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const { data: profile } = useGetMyProfile()
  const { mutate, isPending } = useCreateUserConfig(profile?.id || '')

  const { config, isReady } = UseCreateDefaultConfigOrGetParsed()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (!isReady) return
    setIsDark(config.theme === 'dark')
  }, [isReady, config.theme])

  useEffect(() => {
    if (!isReady) return
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark, isReady])

  const handleToggle = () => {
    if (!profile) return
    const newTheme = isDark ? 'light' : 'dark'

    const newConfig = {
      device: 'browser',
      config: JSON.stringify({
        theme: newTheme,
        hidenAccountsId: config.hidenAccountsId || []
      })
    }

    mutate({ data: newConfig }, {
      onSuccess: () => {
        setIsDark(!isDark)
      }
    })
  }

  if (!isReady) return null

  return (
    <Button
      className="p-2 border rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300/90 hover:dark:bg-gray-800/80"
      onClick={handleToggle}
      isLoading={isPending}
    >
      {isDark ? "🌙 Тёмная" : "☀️ Светлая"}
    </Button>
  )
}
