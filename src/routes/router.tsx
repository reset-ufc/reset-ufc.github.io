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
import Login from "../pages/admin/Login";
import Register from "../pages/admin/Register";
import Dashboard from "../pages/admin/Dashboard";
import { ProtectedRoute } from "../components/ProtectedRoute";
import NotFound from "../pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/publications" element={<PublicationPage />} />
      <Route path="/visual-Identity" element={<VisualIdentityPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      <Route path="/members" element={<TeamInterface />} />
      <Route path="/members/:name" element={<ProfilePage />} />
      <Route path="/news" element={<NewsCardList />} />
      <Route path="/tools" element={<ToolsSection />} />
      <Route path="/news/:title" element={<NewsDetail />} />
      
      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/register" element={<Register />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      {/* 404 Routes */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
