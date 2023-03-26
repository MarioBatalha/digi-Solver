import React from "react";
import { Navigate } from "react-router";
export const ProtectedRoute = ({ children, adminEmail, adminPassword }) => {
	if (!adminEmail && !adminPassword) {
		return <Navigate to="/" />;
	}
	return children;
};
