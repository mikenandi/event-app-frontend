import {View, Text, StyleSheet, Image} from "react-native";
import Card from "../../Card";
import color from "../../colors";
import {add_comma} from "../../../Helpers/addCommaToNumber";
import {ButtonText, Body, BodyS, Caption} from "../../Typography";

export default function Request(props) {
	var price = props.price;
	return (
		<Card style={styles.requestCard}>
			<View style={styles.detailsContainer}>
				<View style={styles.avatarContainer}>
					<Image
						source={require("../../../assets/mike.jpg")}
						style={styles.avatar}
					/>
				</View>
				<View style={styles.requestDetails}>
					<BodyS style={styles.name}>{props.tenantName}</BodyS>
					<View style={styles.ageGenderContainer}>
						<Caption style={styles.ageGenderText}>Male | 24</Caption>
					</View>
				</View>
				<View style={styles.offerContainer}>
					<Body style={styles.offerPriceText}>
						<BodyS>TZS </BodyS>
						{add_comma(price)}
					</Body>
					<Caption style={styles.durationText}>For 6 months</Caption>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<View style={styles.rejectButton}>
					<ButtonText style={styles.rejectText}>REJECT</ButtonText>
				</View>
				<View style={styles.acceptButton}>
					<ButtonText style={styles.acceptText}>ACCEPT</ButtonText>
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
		height: 30,
		width: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: color.secondary,
	},
	avatarContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		textTransform: "capitalize",
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
		color: color.dimblack,
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
		fontWeight: "bold",
	},
	durationText: {
		color: color.dimblack,
	},
	currencyName: {
		fontSize: 14,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 6,
	},
	rejectButton: {
		backgroundColor: color.whitegrey,
		marginRight: 15,
		padding: 2,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		width: 100,
	},
	acceptButton: {
		borderRadius: 5,
		padding: 4,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: color.primary,
		marginRight: 10,
		width: 100,
		height: 30,
	},
	rejectText: {},
	acceptText: {
		color: "white",
	},
});
