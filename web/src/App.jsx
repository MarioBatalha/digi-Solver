import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
import { Exam } from "./components/exam";
import { Error } from "./components/error";
import "./App.scss";
import { ProtectedRoute } from "./components/protectedRoute";
import { useGlobalContext } from "./context";

export function App() {
	const [admin, setAdmin] = useState(null);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin setAdmin={setAdmin} />} />
				<Route
					path="admin/dashboard"
					element={
						//<ProtectedRoute email={admin?.email} password={admin?.password}>
						<Dashboard email={admin?.email} password={admin?.password} />
						//</ProtectedRoute>
					}
				/>
				<Route path="exam/new" element={<Exam />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}
