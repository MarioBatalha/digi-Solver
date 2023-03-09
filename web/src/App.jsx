import "./App.scss";
import { Routes, Route } from "react-router-dom";

import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
import { AppProvider } from "./context";

export function App() {
	return (
		<AppProvider>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route path="/admin/dashboard" element={<Dashboard />} />
			</Routes>
		</AppProvider>
	);
}
