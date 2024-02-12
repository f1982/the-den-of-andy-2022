// components/DarkModeToggle.js
import { MoonStar, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState('off')

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    // Set the initial mode based on system preference
    let darkMode = prefersDarkMode ? 'on' : 'off'

    // Read user's last choice from local storage
    const userChoice = localStorage.getItem('darkMode')
    console.log('userChoice', userChoice)
    if (userChoice !== null) {
      darkMode = userChoice
    }
    setIsDarkMode(darkMode)

    if (darkMode === 'on') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = isDarkMode === 'on' ? 'off' : 'on'
    setIsDarkMode(newMode)
    document.documentElement.classList.toggle('dark')

    // Save user's choice to local storage
    localStorage.setItem('darkMode', newMode)
  }

  return (
    <button
      className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 focus:border-blue-300 focus:outline-none focus:ring"
      onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Sun className="text-yellow-500" />
      ) : (
        <MoonStar className="text-gray-500" />
      )}
    </button>
  )
}

export default DarkModeToggle
