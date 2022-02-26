import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Total(props) {
	return (
		<View style={styles.circleContainer}>
			<View style={styles.circle}>
				<Text style={styles.circleText}>Month</Text>
			</View>
			<View style={styles.totalContainer}>
				<Text style={styles.totalValue}>TZS 2,000</Text>
				<Text style={styles.totalText}>TOTAL</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	circle: {
		width: 100,
		height: 100,
		backgroundColor: "white",
		borderRadius: 50,
		borderWidth: 8,
		borderColor: "#00ced1",
		justifyContent: "center",
		alignItems: "center",
	},
	circleText: {
		color: "#2f4f4f",
		fontWeight: "bold",
	},
	circleContainer: {justifyContent: "center", alignItems: "center"},
	totalContainer: {marginTop: 5},
	totalValue: {fontSize: 20},
	totalText: {color: "gray", fontWeight: "700"},
});
