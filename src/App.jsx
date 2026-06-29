import { Routes, Route } from "react-router-dom";

// Pages
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";
import EpisodesPage from "./pages/EpisodesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="episodes" element={<EpisodesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="*" element={<div>Empty......</div>} />

      </Route>
    </Routes>
  );
}
