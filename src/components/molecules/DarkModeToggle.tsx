import { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    document.body.classList.add("radial-gradient-animation");
    setTimeout(() => {
      document.body.classList.remove("radial-gradient-animation");
    }, 1000);
  };

  return (
    <button
      className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition duration-500 "
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <img className="h-6 w-6" src="/images/sun.png" alt="Light mode" />
      ) : (
        <img className="h-6 w-6" src="/images/moon.png" alt="Dark mode" />
      )}
    </button>
  );
};

export default DarkModeToggle;
