import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { TeamInterface } from "./pages/TeamCollection/team";
import ProfilePage from "./components/ProfilePage";
import NewsCardList from "./components/NewsSection";
import NewsDetail from "./components/NewsDetail";
import ToolsSection from "./pages/Tools";
import { ProjectDetailsPage } from "./pages/projectsDetailsPage";
import { ProjectPage } from "./pages/projectPage";
import ScrollToTop from "./utils/scroll-top";
import { PublicationPage } from "./pages/publicationPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/publications" element={<PublicationPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="/members" element={<TeamInterface />} />
        <Route path="/members/:name" element={<ProfilePage />} />
        <Route path="/news" element={<NewsCardList />} />
        <Route path="/tools" element={<ToolsSection />} />
        <Route path="/news/:title" element={<NewsDetail />} />
      </Routes>
    </>
  );
}

export default App;
