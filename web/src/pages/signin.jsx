import DoctorImg from "./../assets/doctor.jpg";
import { useGlobalContext } from "../context";
import { Alert } from "../components/alert";
import { api } from "../utils/api";
import { useNavigate } from "react-router";
export function Signin() {
	const { email, password, alert, handleShowAlert, setEmail, setPassword } =
		useGlobalContext();

	const navigate = useNavigate();

	const handleAdminSignin = async (e) => {
		e.preventDefault();
		try {
			if (!email || !password) {
				handleShowAlert(true, "Por favor, preencha os campos", "danger");
			} else {
				handleShowAlert(
					true,
					"o administrador não existe. contacte o suporte ",
					"danger"
				);
			}
			if (email && password) {
				const response = await api.post(`admin/signin`, {
					email,
					password,
				});
				if (response.data) {
					handleShowAlert(true, "Bem-vindo de volta!", "success");
					navigate("admin/dashboard");
				}
			}
		} catch (error) {
			console.log("Falha no login, tente novamente.");
		}
	};

	return (
		<main>
			<aside>
				<div className="overlay"></div>
				<img src={DoctorImg} className="sign-ilustratation" />
				<h4>Para mais pessoas saudáveis.</h4>
			</aside>
			<section>
				<div className="form-header">
					<h2>Login</h2>
					<h5>Testes no cúbico</h5>
					<p>Porque a sua saúde começa em sua casa, levamos até si.</p>
				</div>
				<div className="container">
					{alert.show && <Alert {...alert} removeAlert={handleShowAlert} />}
					<form onSubmit={handleAdminSignin}>
						<div className="input-box">
							<label htmlFor="email" className="user-details">
								email
							</label>
							<input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="Email"
							/>
						</div>

						<div className="input-box">
							<label htmlFor="password" className="user-details">
								Palavra-passe
							</label>
							<input
								type="password"
								placeholder="Palavra-passe"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name="password"
							/>
						</div>
						<div className="checkboxes">
							<div className="input-box-row">
								<div>
									<label className="container-checkbox">
										<input type="checkbox" /> Lembre de mim
										<span className="checkmark"></span>
									</label>
								</div>
								<a href="#">Recuperar password?</a>
							</div>

							<div className="input-box">
								<button type="submit">Login</button>
								<label htmlFor="have_acount ">
									Não tenho uma conta? <a href="#">Crie uma!</a>
								</label>
							</div>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}
