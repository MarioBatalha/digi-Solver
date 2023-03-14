import React, { useEffect } from "react";

import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../style";
export function AlertComponent({ type, msg, removeAlert, list }) {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [list]);
	return <Text style={styles.danger}>{msg}</Text>;
}
