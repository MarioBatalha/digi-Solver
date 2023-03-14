import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	//main style
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#189AB4",
		margin: 0,
		padding: 0,
	},

	homeContainer: {
		margin: 10,
		padding: 10,
	},

	mainTitle: {
		textAlign: "left",
		fontSize: 40,
		fontWeight: "bold",
		color: "#05445E",
	},

	mainSubtitle: {
		fontSize: 13,
		fontWeight: "bold",
		color: "#05445E",
	},

	imageContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		padding: 10,
	},

	firstImage: {
		width: 150,
		height: 300,
		margin: 10,
		borderRadius: "25px",
		backgroundColor: "#75E6DA",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},

	secondImage: {
		width: 150,
		height: 300,
		margin: 10,
		marginTop: 200,
		borderRadius: "25px",
		backgroundColor: "#D4F1F4",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},

	startContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},

	icon: {
		justifyContent: "center",
		alignItems: "center",
		width: 60,
		height: 60,
		borderRadius: "50%",
		backgroundColor: "#05445E",
	},

	getStart: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#FFF",
	},
	//home style
	profileContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#FFF",
		padding: 0,
		margin: 0,
		height: "100%",
	},

	profileContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		padding: 10,
		margin: 10,
	},

	title: {
		textAlign: "left",
		fontSize: 25,
		fontWeight: "bold",
		color: "#05445E",
	},

	subtitle: {
		textAlign: "center",
		fontSize: 15,
		margin: 2,
		fontWeight: "bold",
	},

	popular: {
		textAlign: "left",
		fontSize: 25,
		marginLeft: 15,
		margin: 5,
		fontWeight: "bold",
		color: "#000",
	},

	needTitle: {
		fontSize: 11,
		margin: 2,
		fontWeight: "bold",
		color: "#000",
	},

	input: {
		padding: 12,
		margin: 5,
		borderColor: "#75E6DA",
		borderWidth: 1,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 380,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},

	avatar: {
		borderRadius: "50%",
		height: 60,
		width: 60,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},

	testContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "100%",
		padding: 10,
		margin: 10,
	},

	testContent: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "stretch",
		alignItems: "center",
		padding: 10,
	},

	test: {
		position: "relative",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		borderRadius: "20px",
		padding: 10,
		margin: 10,
		width: 170,
		height: 170,
		borderWidth: 1,
		borderColor: "#75E6DA",
		backgroundColor: "#FFF",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	testIcon: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		width: 40,
		height: 40,
		margin: 5,
		borderRadius: "50%",
		backgroundColor: "#F2F2F2",
	},

	testDescription: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	testImage: {
		width: "95%",
		height: "80%",
		margin: 5,
	},

	needDesc: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	menuContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 70,
		width: "97%",
		margin: 5,
		backgroundColor: "#FFF",
		borderRadius: "25px",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},

	menuItem: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		height: 60,
		width: 80,
		padding: 10,
	},

	//menu style
	menuContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 70,
		width: "97%",
		margin: 5,
		backgroundColor: "#FFF",
		borderRadius: "25px",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},

	menuItem: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		height: 60,
		width: 80,
		padding: 10,
	},

	//button style
	button: {
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},
	buttonTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},

	//blood test style
	bloodTestInput: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 390,
		marginTop: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	bloodTestTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},
	loginContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		width: "100%",
		marginTop: 50,
		padding: 30,
	},

	bloodTestTitle: {
		textAlign: "left",
		fontSize: 30,
		fontWeight: "bold",
		color: "#05445E",
		marginBottom: 10,
	},

	bloodTestSubtitle: {
		fontSize: 15,
		margin: 2,
	},

	inputGroup: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},

	inputItems: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 123,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	bloodTestButton: {
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},

	//consult style
	consultContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#FFF",
		padding: 5,
		margin: 0,
		height: "100%",
	},
	consultTitle: {
		textAlign: "left",
		fontSize: 25,
		marginLeft: 15,
		margin: 5,
		fontWeight: "bold",
		color: "#000",
	},

	//payment style
	paymentInput: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 390,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	paymentTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},
	paymentContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		width: "100%",
		height: "68%",
		marginTop: 50,
		padding: 30,
		borderRadius: "30px",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	paymentTitle: {
		textAlign: "left",
		fontSize: 30,
		fontWeight: "bold",
		color: "#05445E",
	},

	paymentSubtitle: {
		fontSize: 15,
		margin: 2,
	},

	paymentInputGroup: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	paymentInputItems: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 190,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	paymentButton: {
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},

	//pregnancy style
	pregnancyInput: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 390,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	pregnancyTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},

	pregnancyContent: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
	},

	pregnancyContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		width: "100%",
		height: "68%",
		marginTop: 50,
		padding: 30,
		borderRadius: "30px",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	pregnancyTitle: {
		textAlign: "left",
		fontSize: 30,
		fontWeight: "bold",
		color: "#05445E",
	},

	pregnancySubtitle: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex",
		alignItems: "flex-start",
		fontSize: 15,
		margin: 2,
	},

	pregnancyInputGroup: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	pregnancyInputItems: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 190,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	pregnancyButton: {
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},

	//prescription style
	prescriptionContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	prescriptionButton: {
		padding: 13,
		margin: 5,
		width: 400,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},

	prescriptionTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},

	//register style
	registerInput: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 390,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},

	registerButton: {
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},

	registerTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},

	registerLogin: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#FFF",
		width: "100%",
		padding: 10,
	},

	registerLoginContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		width: "100%",
		height: "68%",
		marginTop: 50,
		padding: 30,
		borderRadius: "30px",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	logoImg: {
		margin: 20,
		width: 200,
		height: 100,
	},

	registerTitle: {
		textAlign: "left",
		fontSize: 30,
		fontWeight: "bold",
		color: "#05445E",
	},

	registerSubtitle: {
		fontSize: 15,
		margin: 2,
	},

	noAccount: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	createAccount: {
		justifyContent: "center",
		alignItems: "center",
	},

	registerInputGroup: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	registerInputItems: {
		padding: 15,
		margin: 5,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 123,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},

	//signin style
	signinInput: {
		padding: 15,
		margin: 10,
		borderColor: "#FFF",
		borderWidth: 3,
		borderRadius: "5px",
		color: "#05445E",
		backgroundColor: "#FFF",
		width: 390,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},

	signin: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#FFF",
		width: "100%",
		height: "97%",
		padding: 10,
	},

	signinContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		width: "100%",
		height: "71%",
		marginTop: 50,
		padding: 30,
		borderRadius: "30px",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	signinLogoImg: {
		margin: 20,
		width: 200,
		height: 100,
	},

	signinTitle: {
		textAlign: "left",
		fontSize: 30,
		fontWeight: "bold",
		color: "#05445E",
	},

	signinSubtitle: {
		fontSize: 15,
		margin: 2,
	},

	noAccount: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	createAccount: {
		justifyContent: "center",
		alignItems: "center",
	},

	signinButton: {
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#05445E",
	},

	signinTouchableValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFF",
	},

	buttonGoogle: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 13,
		margin: 5,
		width: 390,
		borderRadius: "5px",
		color: "#FFF",
		backgroundColor: "#E24033",
	},

	touchableValueGoogle: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginRight: 5,
		color: "#FFF",
	},

	alert: {
		marginBottom: 10,
		padding: 10,
		height: 10.25,
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		fontSize: 10.7,
		borderRadius: 10.25,
		textTransform: "capitalize",
	},

	danger: {
		color: "#721c24",
		background: "#f8d7da",
	},

	success: {
		color: "#155724",
		background: "#d4edda",
	},
});
