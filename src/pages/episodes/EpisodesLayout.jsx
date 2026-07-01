import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function EpisodesLayout() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate(+1);
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="border p-3 rounded-xl bg-amber-300 text-white"
        >
          prev
        </button>

        <button
          onClick={handleNext}
          className="border p-3 rounded-xl bg-amber-300 text-white"
        >
          next
        </button>

        <input
          type="text"
          placeholder="Page id"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onKeyDown={(e) => e.key === "Enter" && navigate(inputValue)}
        />
      </div>

      <Outlet />
    </div>
  );
}
