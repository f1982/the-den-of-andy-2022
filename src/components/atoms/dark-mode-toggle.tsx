'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<string>('off')

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    // Set the initial mode based on system preference
    const isDarkOn = prefersDarkMode ? 'on' : 'off'

    // Read user's last choice from local storage
    const userChoice = localStorage.getItem('darkMode')
    const userMode = userChoice !== null ? userChoice : isDarkOn

    setDarkMode(userMode)
    document.documentElement.classList.toggle('dark', userMode === 'on')
  }, [])

  const toggleDarkMode = () => {
    const newMode = darkMode === 'on' ? 'off' : 'on'
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode === 'on')
    localStorage.setItem('darkMode', newMode)
  }

  return (
    <>
      <button
        aria-label="Toggle dark mode"
        data-testid="darkLightToggle"
        className="rounded-full p-1 focus:outline-none"
        onClick={toggleDarkMode}>
        {darkMode === 'on' ? (
          <Sun
            data-testid="lightModeIcon"
            className="stroke-muted hover:stroke-primary"
          />
        ) : (
          <MoonStar
            data-testid="darkModeIcon"
            className="stroke-muted hover:stroke-primary"
          />
        )}
      </button>
    </>
  )
}
