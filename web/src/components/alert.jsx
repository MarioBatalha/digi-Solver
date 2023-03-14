import React, { useEffect } from "react";

export function Alert({ type, msg, removeAlert, list }) {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [list]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
}
