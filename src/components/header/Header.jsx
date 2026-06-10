export default function HeaderMain() {
  return (
    <header className="text-white flex items-center justify-between gap-3 py-6.5">
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
      </nav>
    </header>
  );
}
