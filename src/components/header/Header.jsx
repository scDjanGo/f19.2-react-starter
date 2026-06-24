import { useContext } from "react";
import { ThemeContext } from "../contexts/themContext";

export default function HeaderMain() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <header className={` text-white flex items-center justify-between gap-3 py-6.5 px-4 ${theme === "light" ? "bg-green-400" : "bg-black"}`}>
      <h1>Castaway</h1>

      <nav className="flex items-center gap-10">
        <a
          href="#"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          Episodes
        </a>
        <a
          href="#"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          About
        </a>
        <a
          href="#"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          Contact
        </a>


        <button onClick={toggleTheme}>{theme === "light" ? "Светлая тема" : "Тёмная тема"}</button>
      </nav>
    </header>
  );
}
