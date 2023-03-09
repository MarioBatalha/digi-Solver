import { Logo } from "../assets/digisolve-logo.png";
export function Exam() {
	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={Logo} alt="Be The Hero" />
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um herói para resolver
						isso.
					</p>

					<Link to="/" className="back-link">
						<FiArrowLeft size={16} color="#e02041" />
						Voltar para home
					</Link>
				</section>

				<form onSubmit={handleNewIncident}>
					<input placeholder="Título do caso" />
					<textarea placeholder="Descrição" />
					<input placeholder="Valor em reais" />

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
