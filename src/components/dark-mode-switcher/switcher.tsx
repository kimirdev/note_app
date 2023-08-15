import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
      setTheme(colorTheme);
      setDarkSide(checked);
  };

  return (
      <div className='absolute top-4 right-4'>
          <DarkModeSwitch
              style={{ marginBottom: "2rem" }}
              checked={darkSide}
              onChange={toggleDarkMode}
              size={30}
          />
      </div>
  );
}
