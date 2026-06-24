import { useContext } from "react";
import BSkyButton from "../../buttons/BSkyButton";
import { ThemeContext } from "../contexts/themContext";

export default function LatestEpisodeCard({ cardInfo }) {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={` flex justify-between gap-13.25 rounded-4xl p-10 ${theme === "light" ? "bg-green-400" : "bg-[#000000]"}`}>
      <img
        src={cardInfo.img}
        alt=""
        className="max-w-97.5 max-h-116.25 object-cover "
      />

      <div className="flex flex-col items-start">
        <p className="text-[#FFFFFF] text-[18px] font-normal bg-[#191919] rounded-md p-[3px_16px]">
          {cardInfo.tag}
        </p>
        <p className="text-b-sky text-[17px] font-normal mt-12 mb-4.5 ">
          Episode {cardInfo.episode}
        </p>
        <p className="text-white font-normal text-[64px] leading-[1.1]">
          {cardInfo.title}
        </p>
        <p className="text-[#FFFFFFB2] text-[22px] font-normal mt-7 mb-4.5">
          {cardInfo.description}
        </p>
        <BSkyButton>View Episode Details</BSkyButton>
      </div>
    </div>
  );
}
