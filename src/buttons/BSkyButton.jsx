function BSkyButton({ children, className }) {

  return (
    <button className="p-[12px_16px] bg-b-sky rounded-lg text-white text-[17px] font-normal">
      {children || ""}
    </button>
  );
}

export default BSkyButton;
