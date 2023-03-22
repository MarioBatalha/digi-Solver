import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/404.gif";
export const Error = () => {
	return (
		<div className="container-error">
			<img src={errorImg} alt="página não encontrada" />
			<h2>Página não encontrada</h2>
			<Link to="/">Voltar para a página princípal</Link>
		</div>
	);
};
