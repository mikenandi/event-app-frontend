import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {FontAwesome} from "@expo/vector-icons";

export default function Dashbord(props) {
	return (
		<View style={styles.container}>
			<View style={styles.collectedContainer}>
				<Text style={styles.collectedValue}>TZS 1200000</Text>
				<View style={styles.collectedDescription}>
					<FontAwesome5
						name='money-check-alt'
						size={24}
						color='black'
						style={styles.moneyIcon}
					/>
					<Text style={styles.collectedText}>COLLECTED</Text>
				</View>
			</View>
			<View style={styles.moreDatailsContiner}>
				<View style={styles.tenantContainer}>
					<FontAwesome
						name='group'
						size={30}
						color='black'
						style={styles.icon}
					/>
					<View>
						<Text style={styles.pendingValue}>110/200</Text>
						<Text style={styles.pendingText}>TENANTS</Text>
					</View>
				</View>
				<View style={styles.pendingContainer}>
					<FontAwesome5
						name='hand-holding-usd'
						size={30}
						color='black'
						style={styles.icon}
					/>
					<View>
						<Text style={styles.pendingValue}>TZS 30000000</Text>
						<Text style={styles.pendingText}>PENDING</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	collectedContainer: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 4,
		marginHorizontal: 8,
		marginTop: 5,
		borderColor: "seagreen",
		borderRadius: 10,
		backgroundColor: "white",
	},

	collectedValue: {
		color: "black",
		fontSize: 36,
	},
	collectedText: {
		color: "gray",
		fontSize: 20,
		fontWeight: "700",
	},
	collectedDescription: {
		flexDirection: "row",
	},
	moneyIcon: {
		marginRight: 10,
	},
	moreDatailsContiner: {
		flexDirection: "row",
		marginTop: 8,
		marginHorizontal: 8,
		justifyContent: "space-between",
	},
	tenantContainer: {
		borderWidth: 3,
		padding: 4,
		flex: 4,
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "white",
	},
	pendingContainer: {
		flex: 6,
		flexDirection: "row",
		borderWidth: 3,
		marginLeft: 8,
		padding: 4,
		borderRadius: 10,
		borderColor: "crimson",
		backgroundColor: "white",
	},
	icon: {
		marginRight: 5,
	},
	pendingValue: {
		fontSize: 20,
	},
	pendingText: {
		color: "gray",
		fontWeight: "700",
	},
});
