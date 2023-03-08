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
	const [user, setUser] = useState([]);
	const [admin, setAdmin] = useState([]);

	const { navigate } = useNavigation();

	const handleUserSignin = async () => {
		try {
			const response = await axios.post("http://localhost:3333/signin", {
				email,
				password,
			});

			console.log(response);

			const userData = await response.json();
			navigate("Home");
			setUser(userData);
		} catch (error) {
			alert(error.message);
		}
	};

	const handleUserSignup = async ({ navigation }) => {
		try {
			const response = await axios.post("http://localhost:3333/signup", {
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
			navigation.navigate("Sign in");
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
				setName,
				setEmail,
				setPassword,
				setWeight,
				setHeight,
				setAge,
				setPhone,
				setWarning,
				user,
				handleUserSignin,
				handleUserSignup,
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
