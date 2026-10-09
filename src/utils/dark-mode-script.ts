// Inlined in <head> so the `dark` class is set before first paint, avoiding a
// light flash for dark-mode visitors. Mirrors DarkModeToggle's storage key.
export const darkModeScript = `try{var m=localStorage.getItem('darkMode');if(m==='on'||(m===null&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`
