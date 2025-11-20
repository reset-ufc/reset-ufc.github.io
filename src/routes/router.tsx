import { Navigate, Route, Routes } from "react-router-dom";
import { GuestRoute } from "../components/GuestRoute";
import NewsDetail from "../components/NewsDetail";
import NewsCardList from "../components/NewsFeed";
import ProfilePage from "../components/ProfilePage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/admin/Login";
import Register from "../pages/admin/Register";
import Home from "../pages/Home";
import { ProjectPage } from "../pages/projectPage";
import { ProjectDetailsPage } from "../pages/projectsDetailsPage";
import { PublicationPage } from "../pages/publicationPage";
import { TeamInterface } from "../pages/TeamCollection/team";
import ToolsSection from "../pages/Tools";
import { VisualIdentityPage } from "../pages/VisualIdentity";

export function Router() {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/" />} />
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<ProjectPage />} />
			<Route path="/publications" element={<PublicationPage />} />
			<Route path="/visual-Identity" element={<VisualIdentityPage />} />
			<Route path="/projects/:slug" element={<ProjectDetailsPage />} />
			<Route path="/members" element={<TeamInterface />} />
			<Route path="/members/:id" element={<ProfilePage />} />
			<Route path="/news" element={<NewsCardList />} />
			<Route path="/tools" element={<ToolsSection />} />
			<Route path="/news/:title" element={<NewsDetail />} />

			{/* Admin Routes */}
			<Route
				path="/admin/login"
				element={
					<GuestRoute>
						<Login />
					</GuestRoute>
				}
			/>
			<Route
				path="/admin/register"
				element={
					<GuestRoute>
						<Register />
					</GuestRoute>
				}
			/>
			<Route
				path="/admin/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
}
