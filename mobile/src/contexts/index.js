import React, { createContext, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AppContext = createContext();
const baseURL = "http://localhost:3333/";
const AppProvider = ({ children }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState([]);
	const [admin, setAdmin] = useState([]);
	const { navigate } = useNavigation();

	const handleUserSignin = async () => {
		try {
			const endpoint = "signin";
			const response = await axios.post(`${baseURL}/${endpoint}`, {
				email,
				password,
			});

			const userData = await response.json();
			navigate("Home");
			setUser(userData);
			console.log(userData);
		} catch (error) {
			alert(error.message);
		}
	};

	const handleUserSignup = async () => {
		try {
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<AppContext.Provider
			value={{ email, password, user, handleUserSignin, handleUserSignup }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
