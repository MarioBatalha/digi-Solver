import Logo from "../assets/digisolve-logo.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useGlobalContext } from "../context";
import { api } from "../utils/api";
import { Alert } from "../components/alert";
export function Exam({ children, adminEmail, adminPassword }) {
	const {
		title,

		status,
		price,
		setTitle,
		setStatus,
		setPrice,
		alert,
		handleShowAlert,
	} = useGlobalContext();

	const handleNewExam = async (e) => {
		e.preventDefault();
		const testData = {
			title,
			status,
			price,
		};
		try {
			if (testData !== "") {
				handleShowAlert(true, "Teste adicioando com sucesso", "success");

				const response = await api.post("/test", testData);
			} else {
				handleShowAlert(true, "Erro ao adicionar novo teste", "danger");
			}
		} catch (error) {
			console.log("Test request: ", error);
		}
	};

	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={Logo} alt="Digisolver" />
					<h1>Enserir novos teste</h1>
					<p>Descreva detalhadamente o pedido médico</p>

					<Link to="/admin/dashboard" className="back-link">
						<FiArrowLeft size={16} color="#05445e" />
						Voltar para a dashboard
					</Link>
				</section>

				<form onSubmit={handleNewExam}>
					{alert.show && <Alert {...alert} removeAlert={handleShowAlert} />}
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Título do teste"
					/>
					<input
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						placeholder="Estado"
					/>

					<input
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Preço"
					/>
					<button className="button" type="submit">
						Inserir
					</button>
				</form>
			</div>
		</div>
	);
}
