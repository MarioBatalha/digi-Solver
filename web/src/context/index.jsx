import React, { createContext, useContext, useState } from "react";
import axios from "axios";

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
	const [title, setTitle] = useState("");
	const [examType, setExamType] = useState();
	const [status, setStatus] = useState("Pendente");
	const [price, setPrice] = useState();
	const [isLogin, setIsLogin] = useState(false);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	const [exams, setExams] = useState([]);

	const handleShowAlert = (show = false, msg = "", type = "") => {
		setAlert({ show, msg, type });
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
				alert,
				exams,
				title,
				setTitle,
				setExams,
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
				isLogin,
				setIsLogin,
				handleShowAlert,
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
