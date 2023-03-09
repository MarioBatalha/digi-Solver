import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiPower } from "react-icons/fi";
import { Logo } from "../assets/digisolve-logo.png";

export function Dashboard() {
	return (
		<div className="profile-container">
			<header>
				<img src={Logo} alt="Be The Hero" />
				<span>Bem vinda, </span>

				<Link to="/incidents/new" className="button">
					Cadastrar novo caso
				</Link>

				<button type="button">
					<FiPower size={18} color="#e02041" />
				</button>
			</header>

			<h1> Casos cadastrados</h1>

			<ul>
				<li>
					<strong>CASO:</strong>
					<p></p>

					<strong>DESCRIÇÃO:</strong>
					<p></p>

					<strong>VALOR:</strong>
					<p></p>

					<button type="button">
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
			</ul>
		</div>
	);
}
