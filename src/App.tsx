import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
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
import { VisualIdentityPage } from "./pages/VisualIdentity";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    const promises = images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve(true);
          } else {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
          }
        })
    );

    Promise.all(promises).then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <Loader2 className="animate-spin text-indigo-500 w-16 h-16 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
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
    </>
  );
}

export default App;
