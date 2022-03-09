import {View, Text, StyleSheet} from "react-native";
var props;
export default function Summary(props) {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.value}>TZS 5,000</Text>
				<Text style={styles.valueMeaning}>{props.valueMeaning}</Text>
			</View>
			<View style={styles.tentantsContainer}>
				<Text style={styles.tenantsNumber}>110/200</Text>
				<Text style={styles.tenantLabel}>TENANTS</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	textContainer: {marginBottom: 25},
	value: {
		color: "crimson",
		fontSize: 20,
		fontWeight: "700",
	},
	valueMeaning: {color: "gray"},
	tentantsContainer: {},
	tenantsNumber: {fontWeight: "bold"},
	tenantLabel: {color: "gray"},
});
