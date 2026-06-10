import BSkyButton from "./buttons/BSkyButton";
import HeaderMain from "./components/header/Header";
import LatesEpisodesHeader from "./components/latest-episodes/LatesEpisodesHeader";
import LatestEpisodesContainer from "./components/latest-episodes/LatestEpisodesContainer"

function App() {
  return (
    <div className="bg-[#191919] min-h-dvh px-12.5">
      <HeaderMain />

      <LatesEpisodesHeader />

      <LatestEpisodesContainer />
    </div>
  );
}

export default App;
