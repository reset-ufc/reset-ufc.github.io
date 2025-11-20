import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

interface GuestRouteProps {
	children: React.ReactNode;
}

export function GuestRoute({ children }: GuestRouteProps) {
	const { isAuthenticated } = useAuthContext();

	if (isAuthenticated) {
		return <Navigate to="/admin/dashboard" replace />;
	}

	return <>{children}</>;
}
