import React from "react";
import { Navigate } from "react-router";
export const ProtectedRoute = ({ children, admin }) => {
	if (!admin) {
		return <Navigate to="/" />;
	}
	return children;
};
