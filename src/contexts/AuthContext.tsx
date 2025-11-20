import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api, setupAuthInterceptor } from "../lib/axios";
import { authenticate } from "../services/auth";

interface AuthContextType {
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	token: string | null;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "accessToken";

export function AuthProvider({ children }: { children: ReactNode }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [token, setToken] = useState<string | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const logout = useCallback(() => {
		// Remove o token do localStorage
		localStorage.removeItem(TOKEN_KEY);

		// Limpa o estado
		setToken(null);
		setIsAuthenticated(false);

		// Limpa o header de autorização
		delete api.defaults.headers.Authorization;

		// Redireciona para a página de login
		navigate("/admin/login");
	}, [navigate]);

	// Configura o interceptor de autenticação para detectar token inválido (401)
	useEffect(() => {
		setupAuthInterceptor(logout);
	}, [logout]);

	// Verifica token no localStorage e configura headers ao montar
	useEffect(() => {
		const storedToken = localStorage.getItem(TOKEN_KEY);

		// Verifica se a rota atual é pública (não requer autenticação)
		const pathname = location.pathname;
		const publicRoutes = ["/admin/login", "/admin/register"];
		const isPublicRoute = publicRoutes.includes(pathname);

		if (storedToken) {
			api.defaults.headers.Authorization = `Bearer ${storedToken}`;
			setToken(storedToken);
			setIsAuthenticated(true);
		} else if (!isPublicRoute && pathname.startsWith("/admin")) {
			// Se não existe o token E não é rota pública E é rota admin, faz logout automaticamente
			logout();
		}
	}, [location.pathname, logout]);

	async function login(email: string, password: string) {
		try {
			const token = await authenticate({ email, password });

			// Salva o token no localStorage
			localStorage.setItem(TOKEN_KEY, token);

			// Configura o header de autorização
			api.defaults.headers.Authorization = `Bearer ${token}`;

			// Atualiza o estado
			setToken(token);
			setIsAuthenticated(true);

			// Redireciona para o dashboard
			navigate("/admin/dashboard");
		} catch (error) {
			console.error(error);
			throw error; // Re-lança o erro para ser tratado no componente
		}
	}

	return (
		<AuthContext.Provider value={{ login, logout, token, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext deve ser usado dentro de um AuthProvider");
	}
	return context;
}
