import BSkyButton from "../../buttons/BSkyButton"

export default function LatesEpisodesHeader() {
  return (
    <div className="flex items-center justify-between gap-3">
        <h4 className="text-[64px] font-normal text-white">Latest episodes</h4>


        <BSkyButton>
          View all episodes
        </BSkyButton>
    </div>
  )
}
