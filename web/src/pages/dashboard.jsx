import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import Logo from "../assets/digisolve-logo.png";
import { useGlobalContext } from "../context/index";
import { useNavigate } from "react-router";
import axios from "axios";
export function Dashboard() {
	const {
		name,
		email,
		password,
		weight,
		height,
		age,
		phone,
		warning,
		examType,
		status,
		price,
		exams,
		setExams,
		setEmail,
		setName,
		setPassword,
	} = useGlobalContext();

	const navigate = useNavigate();

	const handleGetData = async () => {
		try {
			const dataExam = await axios.get("http://localhost:3333/exam");
			const { data } = dataExam;
			const allExam = JSON.stringify(data);
			setExams(allExam);
			console.log(allExam);
		} catch (error) {
			console.log(error);
		}
	};

	const handleAdminSignout = async () => {
		setName("");
		setEmail("");
		setPassword("");
		navigate("/");
	};

	useEffect(() => {
		axios.get("http://localhost:3333/exam").then((response) => {
			setExams(response.data);
		});
	}, []);

	return (
		<div className="profile-container">
			<header>
				<img src={Logo} alt="Be The Hero" />
				<span>Bem-vindo/a de volta, {email}</span>

				<Link to="/exam/new" className="back-link">
					Adicionar exame
				</Link>

				<button type="button" onClick={handleAdminSignout}>
					<FaSignOutAlt size={18} color="#05445e" />
				</button>
			</header>

			<h1> Pedido de exames médicos</h1>

			<ul>
				{exams.map((exam) => {
					const {
						_id,
						name,
						height,
						weight,
						age,
						createdAt,
						status,
						price,
						warning,
						examType,
					} = exam;
					return (
						<li key={_id}>
							<strong>Nome: {name}</strong>
							<p></p>

							<strong>Altura: {height}</strong>
							<p></p>

							<strong>Peso: {weight}</strong>
							<p></p>
							<strong>Idade: {age}</strong>
							<p></p>

							<strong>Data do pedido: {createdAt}</strong>
							<p></p>

							<strong>Status: {status}</strong>
							<p></p>
							<strong>Tipo de exame: {examType}</strong>
							<p></p>

							<strong>Valor pago: {price} AOA</strong>
							<p></p>

							<strong>Advertencia: {warning}</strong>
							<p></p>

							<button type="button">
								<FiEdit size={20} color="#05445e" />
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
