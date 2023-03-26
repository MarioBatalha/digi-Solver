import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, Alert } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { styles } from "../../../style";
import { useNavigation } from "@react-navigation/native";

export const Consult = () => {
	const [selectDate, setSelectDate] = useState([]);
	const startDate = selectDate ? selectDate.toString() : "";

	const { navigate } = useNavigation();

	const handleChangeDate = (date) => {
		setSelectDate((prevDate) => date);
	};

	const handleScheduleConsult = () => {
		Alert.alert("consulta agendada");
		navigate("Home");
	};
	return (
		<View style={styles.consultContainer}>
			<Text style={styles.consultTitle}>Agendar consulta</Text>
			<CalendarPicker onDateChange={handleChangeDate} />

			<View style={styles.content}>
				<Text style={styles.subtitle}>
					Data de consulta:
					{startDate}
				</Text>
			</View>
			<TouchableOpacity
				style={styles.paymentButton}
				onPress={handleScheduleConsult}
				activeOpacity={0.7}
			>
				<Text style={styles.paymentTouchableValue}>Concluír agendamento</Text>
			</TouchableOpacity>
		</View>
	);
};

const getDefaultCalendarSource = async () => {
	const defaultCalendar = await Calendar.getDefaultCalendarAsync();
	return defaultCalendar.source;
};

const createCalendar = async () => {
	const defaultCalendarSource =
		Platform.OS === "ios"
			? await getDefaultCalendarSource()
			: { isLocalAccount: true, name: "Expo Calendar" };
	const newCalendarID = await Calendar.createCalendarAsync({
		title: "Expo Calendar",
		color: "blue",
		entityType: Calendar.EntityTypes.EVENT,
		sourceId: defaultCalendarSource.id,
		source: defaultCalendarSource,
		name: "internalCalendarName",
		ownerAccount: "personal",
		accessLevel: Calendar.CalendarAccessLevel.OWNER,
	});
	console.log(`Your new calendar ID is: ${newCalendarID}`);
};
