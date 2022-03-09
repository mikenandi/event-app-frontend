import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {FontAwesome} from "@expo/vector-icons";
import color from "../colors";

export default function Dashbord(props) {
	return (
		<View style={styles.container}>
			<View style={styles.collectedContainer}>
				<Text style={styles.collectedValue}>TZS 1200000</Text>
				<View style={styles.collectedDescription}>
					<FontAwesome5
						name='money-check-alt'
						size={24}
						color='white'
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
						color='white'
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
						color='white'
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
		marginHorizontal: 8,
		marginTop: 5,
		backgroundColor: color.alert,
	},

	collectedValue: {
		color: "white",
		fontSize: 36,
	},
	collectedText: {
		color: "white",
		fontSize: 20,
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
		padding: 4,
		flex: 4,
		flexDirection: "row",
		backgroundColor: "black",
	},
	pendingContainer: {
		flex: 6,
		flexDirection: "row",
		marginLeft: 8,
		padding: 4,
		backgroundColor: "crimson",
	},
	icon: {
		marginRight: 5,
	},
	pendingValue: {
		color: "white",
		fontSize: 20,
	},
	pendingText: {
		color: "white",
		fontWeight: "700",
	},
});
