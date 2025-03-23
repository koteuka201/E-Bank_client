import { Button } from "@shared/components"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <Button
      className="p-2 border rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300/90 hover:dark:bg-gray-800/80"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "🌙 Тёмная" : "☀️ Светлая"}
    </Button>
  )
}
