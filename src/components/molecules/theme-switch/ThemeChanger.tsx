/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="
    p-3 flex justify-between
    bg-primary-dark text-on-primary"
    >
      <span>
        Theme:
        <strong>{theme}</strong>
      </span>
      {/* <div> */}
      <select
        name="theme"
        id="theme-select"
        className="bg-secondary-light text-on-secondary py-1 px-3"
        onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        <option value="">Select Theme</option>
        {themes.map((t) => (
          <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
            {t.name}
          </option>
        ))}
      </select>
      {/* </div> */}
    </div>
  );
}

export default ThemeChanger;
