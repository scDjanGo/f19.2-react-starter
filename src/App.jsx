import { Routes, Route } from "react-router-dom";

// Pages
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";
import EpisodesPage from "./pages/episodes/EpisodesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EpisodesLayout from "./pages/episodes/EpisodesLayout";
import EpisodesCurrentPage from "./pages/episodes/EpisodesCurrentPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="episodes" element={<EpisodesLayout />}>
          <Route index element={<EpisodesPage />} />
          <Route path="qwerty" element={<>qwerty</>} />
          <Route path=":id" element={<EpisodesCurrentPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="*" element={<div>Empty......</div>} />
      </Route>
    </Routes>
  );
}
