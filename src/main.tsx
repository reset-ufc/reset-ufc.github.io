import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<HelmetProvider>
					<Helmet titleTemplate="Reset | %s" />
					<App />
				</HelmetProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
);
