import {View, Text, StyleSheet} from "react-native";
import color from "../colors";
import {FontAwesome5, Fontisto} from "@expo/vector-icons";

export default function PaymentSummary() {
	return (
		<View style={styles.summaryContainer}>
			<View style={styles.paidContainer}>
				<Fontisto name='wallet' size={24} color='white' />
				<Text style={styles.paidValue}>
					<Text style={styles.currencyName}>TZS</Text> 000,000
				</Text>
				<Text style={styles.paidText}>PAID</Text>
			</View>
			<View style={styles.unpaidContainer}>
				<FontAwesome5 name='hand-holding-usd' size={24} color='white' />
				<Text style={styles.paidValue}>
					<Text style={styles.currencyName}>TZS</Text> 000,000
				</Text>
				<Text style={styles.paidText}>UNPAID</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	summaryContainer: {
		justifyContent: "center",
		flexDirection: "row",
		marginVertical: 10,
	},
	paidContainer: {
		width: "45%",
		marginRight: 15,
		height: 120,
		borderRadius: 10,
		backgroundColor: color.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	unpaidContainer: {
		width: "45%",
		height: 120,
		borderRadius: 10,
		backgroundColor: color.warning,
		alignItems: "center",
		justifyContent: "center",
	},
	paidValue: {
		color: "white",
		fontSize: 26,
		fontWeight: "700",
		marginTop: 10,
		fontFamily: "serif",
	},
	paidText: {
		color: "white",
		fontFamily: "serif",
	},
	currencyName: {
		fontSize: 15,
		fontFamily: "serif",
	},
});
