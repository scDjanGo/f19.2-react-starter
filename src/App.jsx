import ThemeContextProvider from "./components/contexts/themContext";
import HeaderMain from "./components/header/Header";
import LatestEpisodesContainer from './components/latest-episodes/LatestEpisodesContainer';

export default function App() {
  return (
    <ThemeContextProvider>
      <HeaderMain />
      <LatestEpisodesContainer />
    </ThemeContextProvider>
  );
}
