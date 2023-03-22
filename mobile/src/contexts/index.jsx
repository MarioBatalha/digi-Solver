import React, { createContext, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";

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
	const [examType, setExamType] = useState();
	const [status, setStatus] = useState();
	const [price, setPrice] = useState();
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const { navigate } = useNavigation();

	const handlePatientSignin = async () => {
		try {
			if (!email || !password) {
				handleShowAlert(true, "Por favor, preencha os campos", "danger");
			}
			const response = await axios.post(
				"http://localhost:3333/patient/signin",
				{
					email,
					password,
				}
			);

			console.log(response);

			const userData = await response.json();
			navigate("Home");
			setUser(userData);
		} catch (error) {
			alert(error.message);
		}
	};

	const handleShowAlert = (show = false, msg = "", type = "") => {
		setAlert({ show, msg, type });
	};

	const handlePatientSignup = async () => {
		navigate("/Sign in");
		try {
			const response = await axios.post(
				"http://localhost:3333/patient/signup",
				{
					name,
					email,
					password,
					weight,
					height,
					age,
					phone,
					warning,
				}
			);

			const result = await response.json();

			console.log("register success");
			Alert.alert("Registro feito com sucesso");
			navigate("Sign in");
		} catch (error) {
			console.log("sign up error: ", error);
		}
	};

	const handlePatientSignout = async () => {
		setName("");
		setEmail("");
		setPassword("");
	};

	const handleBloodTestRequest = async () => {
		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Teste de sangue",
			status: "Pendente",
			price: 50000.0,
		};
		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("blood test request was successful");
			setUser(response);
		} catch (error) {
			console.log("blood test request: ", error);
		}
	};

	const handlePregnancyTestRequest = async () => {
		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Teste de grávidez",
			status: "Pendente",
			price: 22000.0,
		};
		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("pregnancy test request was successful");
			setUser(response);
		} catch (error) {
			console.log("pregnancy test request: ", error);
		}
	};

	const handlePrescriptionRequest = async () => {
		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Receita",
			status: "Pendente",
			price: 50000.0,
		};
		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("prescription request was successful");
			setUser(response);
		} catch (error) {
			console.log("prescription test request: ", error);
		}
	};

	const handleColonExamRequest = async () => {
		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Exame do colón",
			status: "Pendente",
			price: 70000.0,
		};
		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("colon exam request was successful");
			setUser(response);
		} catch (error) {
			console.log("colon exam request: ", error);
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
				handlePatientSignin,
				handlePatientSignup,
				handlePatientSignout,
				handlePregnancyTestRequest,
				handleBloodTestRequest,
				handlePrescriptionRequest,
				handleColonExamRequest,
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
