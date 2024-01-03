import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <>
      <label
        htmlFor="toggleB"
        className="flex w-fit items-center justify-center cursor-pointer"
      >
        <div className="bg-transparent rounded-full w-fit">
          <span className="font-semibold text-lg">
            {isDarkMode ? (
              <i className="bi text-primary-50 bi-brightness-high-fill" />
            ) : (
              <i className="text-primary-950 bi bi-moon-fill" />
            )}
          </span>
        </div>
        <div className="ml-0">
          <input
            type="checkbox"
            id="toggleB"
            name="toggleB"
            className="hidden"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </label>
    </>
  );
}

export default ThemeSwitcher;
