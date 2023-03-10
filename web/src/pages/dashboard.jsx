import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiPower } from "react-icons/fi";
import Logo from "../assets/digisolve-logo.png";

export function Dashboard() {
	return (
		<div className="profile-container">
			<header>
				<img src={Logo} alt="Be The Hero" />
				<span>Bem vindo/a de volta, Mário Silva </span>

				<Link to="/exam/new" className="button">
					Adicionar exame
				</Link>

				<button type="button">
					<FiPower size={18} color="#05445e" />
				</button>
			</header>

			<h1> Pedido de exames médicos</h1>

			<ul>
				<li>
					<strong>Nome:</strong>
					<p></p>

					<strong>Altura:</strong>
					<p></p>

					<strong>Peso:</strong>
					<p></p>
					<strong>Idade:</strong>
					<p></p>

					<strong>Data do pedido:</strong>
					<p></p>

					<strong>Status:</strong>
					<p></p>
					<strong>Tipo de exame:</strong>
					<p></p>

					<strong>Valor pago:</strong>
					<p></p>

					<strong>Advertencia:</strong>
					<p></p>

					<button type="button">
						<FiEdit size={20} color="#05445e" />
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p></p>

					<strong>DESCRIÇÃO:</strong>
					<p></p>

					<strong>VALOR:</strong>
					<p></p>

					<button type="button">
						<FiEdit size={20} color="#05445e" />
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p></p>

					<strong>DESCRIÇÃO:</strong>
					<p></p>

					<strong>VALOR:</strong>
					<p></p>

					<button type="button">
						<FiEdit size={20} color="#05445e" />
					</button>
				</li>
			</ul>
		</div>
	);
}
