import {View, Text, StyleSheet, Image} from "react-native";
import Card from "../Card";
import color from "../colors";
import {add_comma} from "../../Helpers/addCommaToNumber";

export default function Request(props) {
	var price = props.price;
	return (
		<Card style={styles.requestCard}>
			<View style={styles.detailsContainer}>
				<View style={styles.avatarContainer}>
					<Image
						source={require("../../assets/mike.jpg")}
						style={styles.avatar}
					/>
				</View>
				<View style={styles.requestDetails}>
					<Text style={styles.name}>{props.tenantName}</Text>
					<View style={styles.ageGenderContainer}>
						<Text style={styles.ageGenderText}>Male | 24</Text>
					</View>
				</View>
				<View style={styles.offerContainer}>
					<Text style={styles.offerPriceText}>
						<Text style={styles.currencyName}>TZS</Text> {add_comma(price)}
					</Text>
					<Text style={styles.durationText}>For 6 months</Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<View style={styles.rejectButton}>
					<Text style={styles.rejectText}>Reject</Text>
				</View>
				<View style={styles.acceptButton}>
					<Text style={styles.acceptText}>Accept</Text>
				</View>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	requestCard: {
		padding: 10,
		borderRadius: 5,
		marginVertical: 8,
		marginHorizontal: 8,
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: color.secondary,
	},
	avatarContainer: {
		flex: 1,

		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		color: color.dimblack,
		fontWeight: "bold",
	},

	requestDetails: {flex: 2},
	ageGenderContainer: {
		flexDirection: "row",
	},
	detailsContainer: {
		flexDirection: "row",
		marginBottom: 15,
	},
	ageGenderText: {
		color: "gray",
		marginLeft: 4,
	},
	occupationText: {
		color: "grey",
	},
	offerContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 2,
	},
	offerPriceText: {
		fontSize: 24,
		color: color.dimblack,
	},
	durationText: {
		color: "gray",
	},
	currencyName: {
		fontSize: 14,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 6,
	},
	rejectButton: {
		flex: 1,
		backgroundColor: color.whitegrey,
		marginRight: 25,
		padding: 8,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
	},
	acceptButton: {
		flex: 1,
		borderRadius: 5,
		padding: 8,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: color.primary,
		marginRight: 10,
	},
	rejectText: {
		fontSize: 14,
		fontWeight: "700",
		color: color.dimblack,
	},
	acceptText: {
		fontSize: 14,
		fontWeight: "700",
		color: "white",
	},
});
