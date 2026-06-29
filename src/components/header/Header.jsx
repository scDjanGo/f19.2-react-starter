import { useContext } from "react";
import { ThemeContext } from "../contexts/themContext";
import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <header className={` text-white flex items-center justify-between gap-3 py-6.5 px-4 bg-black`}>
      <h1>Castaway</h1>

      <nav className="flex items-center gap-10">
        <Link
          to="/"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          Home
        </Link>
        <Link
          to="/episodes"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          Episodes
        </Link>
        <Link
          to="/about"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-[17px] font-normal duration-300 hover:text-[#118DA8]"
        >
          Contact
        </Link>


      </nav>
    </header>
  );
}
