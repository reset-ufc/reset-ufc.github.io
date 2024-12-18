import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { ProjectPage } from "../pages/projectPage";
import { PublicationPage } from "../pages/publicationPage";
import { VisualIdentityPage } from "../pages/VisualIdentity";
import { ProjectDetailsPage } from "../pages/projectsDetailsPage";
import { TeamInterface } from "../pages/TeamCollection/team";
import ProfilePage from "../components/ProfilePage";
import NewsCardList from "../components/NewsFeed";
import ToolsSection from "../pages/Tools";
import NewsDetail from "../components/NewsDetail";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/publications" element={<PublicationPage />} />
      <Route path="/Visual-Identity" element={<VisualIdentityPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      <Route path="/members" element={<TeamInterface />} />
      <Route path="/members/:name" element={<ProfilePage />} />
      <Route path="/news" element={<NewsCardList />} />
      <Route path="/tools" element={<ToolsSection />} />
      <Route path="/news/:title" element={<NewsDetail />} />
    </Routes>
  );
}
