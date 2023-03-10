import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
import { Exam } from "./components/exam";
import "./App.scss";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route path="/admin/dashboard" element={<Dashboard />} />
				<Route path="/exam/new" element={<Exam />} />
			</Routes>
		</BrowserRouter>
	);
}
