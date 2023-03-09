import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [age, setAge] = useState("");
	const [phone, setPhone] = useState("");
	const [warning, setWarning] = useState("");
	const [admin, setAdmin] = useState([]);
	const [examType, setExamType] = useState();
	const [status, setStatus] = useState();
	const [price, setPrice] = useState();
	const [isLogin, setIsLogin] = useState(false);

	let history = useHistory();

	const handleAdminSignin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3333/admin/signin", {
				email,
				password,
			});

			console.log(response);

			const userData = await response.json();
			setAdmin(userData);
			alert("Bem-vindo de volta");
			setIsLogin(true);
			if (isLogin) {
				history.push("/admin/dashboard");
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleAdminSignup = async () => {
		try {
			const response = await axios.post("http://localhost:3333/admin/signup", {
				name,
				email,
				password,
				weight,
				height,
				age,
				phone,
				warning,
			});

			const result = await response.json();
			setUser(result);

			console.log("register success");
			Alert.alert("Registro feito com sucesso");
			navigate("Sign in");
		} catch (error) {
			console.log("sign up error: ", error);
		}
	};

	const handleAdminSignout = async () => {
		setName("");
		setEmail("");
		setPassword("");
	};
	return (
		<AppContext.Provider
			value={{
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
				setName,
				setEmail,
				setPassword,
				setWeight,
				setHeight,
				setAge,
				setPhone,
				setWarning,
				setExamType,
				setPrice,
				setStatus,
				handleAdminSignin,
				handleAdminSignup,
				handleAdminSignout,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
