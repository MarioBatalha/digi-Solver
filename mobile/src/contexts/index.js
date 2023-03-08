import React, { createContext, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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

	const handleUserSignup = async () => {
		try {
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<AppContext.Provider
			value={{
				email,
				password,
				setEmail,
				setPassword,
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
