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
	const { email, password } = useGlobalContext();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route
					path="admin/dashboard"
					element={
						<ProtectedRoute adminEmail={email} adminPassword={password}>
							<Dashboard adminEmail={email} adminPassword={password} />
						</ProtectedRoute>
					}
				/>
				<Route
					path="exam/new"
					element={
						<ProtectedRoute adminEmail={email} adminPassword={password}>
							<Exam adminEmail={email} adminPassword={password} />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}
