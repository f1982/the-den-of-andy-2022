'use client'

import { MoonStar, Sun } from 'lucide-react'

// The initial `dark` class is applied before paint by `darkModeScript` in the
// root layout, so the icons are switched with CSS and no state is needed here.

export default function DarkModeToggle() {
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', isDark ? 'on' : 'off')
  }

  return (
    <button
      aria-label="Toggle dark mode"
      data-testid="darkLightToggle"
      className="rounded-full p-1 focus:outline-hidden"
      onClick={toggleDarkMode}>
      <Sun
        data-testid="lightModeIcon"
        className="hidden stroke-muted-foreground/60 hover:stroke-muted-foreground/40 dark:block"
      />
      <MoonStar
        data-testid="darkModeIcon"
        className="stroke-muted-foreground/60 hover:stroke-muted-foreground/40 dark:hidden"
      />
    </button>
  )
}
