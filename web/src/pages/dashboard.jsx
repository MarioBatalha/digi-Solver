import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiPower } from "react-icons/fi";
import Logo from "../assets/digisolve-logo.png";

export function Dashboard() {
	return (
		<div className="profile-container">
			<header>
				<img src={Logo} alt="Be The Hero" />
				<span>Bem-vindo/a de volta, Lissandro Afonso</span>

				<Link to="/exam/new" className="back-link">
					Adicionar exame
				</Link>

				<button type="button">
					<FiPower size={18} color="#05445e" />
				</button>
			</header>

			<h1> Pedido de exames médicos</h1>

			<ul>
				<li>
					<strong>Nome: Paulo Bizerra</strong>
					<p></p>

					<strong>Altura: 1.67</strong>
					<p></p>

					<strong>Peso: 70</strong>
					<p></p>
					<strong>Idade: 26</strong>
					<p></p>

					<strong>Data do pedido: 12/02/2023</strong>
					<p></p>

					<strong>Status: Pendente</strong>
					<p></p>
					<strong>Tipo de exame: Exame de sangue</strong>
					<p></p>

					<strong>Valor pago: 25.000</strong>
					<p></p>

					<strong>Advertencia: Alérgico a productos derivados de porco</strong>
					<p></p>

					<button type="button">
						<FiEdit size={20} color="#05445e" />
					</button>
				</li>

				<li>
					<strong>Nome: Ricardo Rafael</strong>
					<p></p>

					<strong>Altura: 1.60</strong>
					<p></p>

					<strong>Peso: 60</strong>
					<p></p>
					<strong>Idade: 25</strong>
					<p></p>

					<strong>Data do pedido: 1/01/2023</strong>
					<p></p>

					<strong>Status: Concluído</strong>
					<p></p>
					<strong>Tipo de exame: Exame da prostáta</strong>
					<p></p>

					<strong>Valor pago: 50.000</strong>
					<p></p>

					<strong>Advertencia: </strong>
					<p></p>

					<button type="button">
						<FiEdit size={20} color="#05445e" />
					</button>
				</li>
				<li>
					<strong>Nome: Dorivaldo Manuel</strong>
					<p></p>

					<strong>Altura: 1.75</strong>
					<p></p>

					<strong>Peso: 70</strong>
					<p></p>
					<strong>Idade: 22</strong>
					<p></p>

					<strong>Data do pedido: 2/02/2023</strong>
					<p></p>

					<strong>Status: Pendente</strong>
					<p></p>
					<strong>Tipo de exame: Exame de sangue</strong>
					<p></p>

					<strong>Valor pago: 22.000</strong>
					<p></p>

					<strong>
						Advertencia: Intolerante a lactose e todos derivados de vaca
					</strong>
					<p></p>

					<button type="button">
						<FiEdit size={20} color="#05445e" />
					</button>
				</li>
			</ul>
		</div>
	);
}
