import ChildrenImg from "./../assets/112.jpg";
import { useGlobalContext } from "../context";

export function Signin() {
	const { email, password, setEmail, setPassword, handleAdminSignin } =
		useGlobalContext();

	return (
		<main>
			<aside>
				<div className="overlay"></div>
				<img src={ChildrenImg} className="sign-ilustratation" />
				<h4>Para mais crianças saudáveis.</h4>
			</aside>
			<section>
				<div className="form-header">
					<h2>Login</h2>
					<h5>Testes no cúbico</h5>
					<p>Porque a sua saúde começa em sua casa, levamos até si.</p>
				</div>
				<div className="container">
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
								Password
							</label>
							<input
								type="password"
								placeholder="Password"
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
								<button type="submit ">Login</button>
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
