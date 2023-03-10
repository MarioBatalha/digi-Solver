import Logo from "../assets/digisolve-logo.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { useGlobalContext } from "../context";
export function Exam() {
	const {
		name,
		email,
		weight,
		height,
		age,
		phone,
		warning,
		examType,
		status,
		price,
		setName,
		setEmail,
		setWeight,
		setHeight,
		setAge,
		setPhone,
		setWarning,
		setExamType,
		setStatus,
		setPrice,
		handleNewExam,
	} = useGlobalContext();

	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={Logo} alt="Digisolver" />
					<h1>Enserir novos exames</h1>
					<p>Descreva detalhadamente o pedido pedido médico</p>

					<Link to="/admin/dashboard" className="back-link">
						<FiArrowLeft size={16} color="#05445e" />
						Voltar para a dashboard
					</Link>
				</section>

				<form onSubmit={handleNewExam}>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Nome do paciente"
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
					<div className="input-group">
						<input
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
							placeholder="Peso"
						/>
						<input
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							placeholder="Altura"
						/>
						<input
							value={age}
							onChange={(e) => setAge(e.target.value)}
							placeholder="Idade"
						/>
					</div>
					<input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="Contacto"
					/>
					<div className="input-group">
						<input
							value={examType}
							onChange={(e) => setExamType(e.target.value)}
							placeholder="Tipo de exame"
						/>
						<select defaultValue="pendent">
							<option value="pendent">Pendente</option>
							<option value="denied">Negado</option>
							<option value="done">Concluído</option>
						</select>
						<input
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							placeholder="preço"
						/>
					</div>
					<textarea
						value={warning}
						onChange={(e) => setWarning(e.target.value)}
						placeholder="É alérgico ou intolerante a algum producto"
					/>

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
