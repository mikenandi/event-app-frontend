import React, {memo} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Card from "../Card";
import color from "../colors";
import {Entypo} from "@expo/vector-icons";
import {add_comma} from "../../Helpers/addCommaToNumber";

function Listing(props) {
	var price = props.price;

	return (
		<Card style={styles.card}>
			<View style={styles.topContainer}>
				<Image
					source={require("../../assets/house3.jpeg")}
					style={styles.propetyImage}
				/>
				<View style={styles.detailsContainer}>
					<Text style={styles.priceValue}>
						<Text style={styles.curencyName}>TZS</Text> {add_comma(price)}
					</Text>
					<Text style={styles.location}>
						<Entypo name='location-pin' size={15} color={color.primary} />
						lorem lorem lorem lorem
					</Text>

					<View style={styles.avatarTenantNameContainer}>
						<Image
							source={require("../../assets/mike.jpg")}
							style={styles.avatar}
						/>
						<Text style={styles.tenantName}>Mwakipembe S.</Text>
					</View>
				</View>
			</View>
			<View style={styles.startEndRentContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.nameText}>START</Text>
					<Text style={styles.startDate}>10.10.2021</Text>
				</View>
				<View style={styles.leftDaysContainer}>
					<Text style={styles.endLabel}>END</Text>
					<Text style={styles.endDate}>10.4.2022</Text>
				</View>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "95%",
		backgroundColor: "white",
		marginHorizontal: 8,
		marginVertical: 4,
		padding: 10,
		borderRadius: 10,
	},
	topContainer: {
		flexDirection: "row",
		marginBottom: 10,
	},
	propetyImage: {flex: 1, width: 120, height: 120, borderRadius: 10},
	detailsContainer: {flex: 1, marginLeft: 8, marginVertical: 12},
	curencyName: {
		fontSize: 14,
	},
	priceValue: {
		fontSize: 24,
		color: color.dimblack,
	},
	location: {
		color: "gray",
		fontSize: 12,
	},
	left: {
		color: "crimson",
	},
	iconsContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	iconTextContainer: {
		flexDirection: "row",
		marginTop: 10,
		alignItems: "baseline",
	},
	iconBathtub: {
		marginRight: 5,
	},
	iconBed: {
		marginRight: 5,
		marginLeft: 15,
	},
	iconText: {
		color: "grey",
		fontSize: 12,
		fontWeight: "700",
	},
	statusIcon: {
		marginLeft: 15,
	},
	startEndRentContainer: {
		padding: 3,
		borderTopWidth: 1,
		borderTopColor: color.grey,
		flexDirection: "row",
	},
	nameContainer: {
		flex: 1,
	},
	leftDaysContainer: {
		flex: 1,
	},
	nameText: {
		color: color.dimblack,
		marginLeft: 15,
	},
	startDate: {
		color: color.dimblack,
		fontWeight: "700",
		marginLeft: 15,
	},
	endLabel: {
		color: color.dimblack,
		marginLeft: 30,
	},
	endDate: {color: color.dimblack, fontWeight: "700", marginLeft: 30},
	avatar: {
		width: 35,
		height: 35,
		borderRadius: 17.5,
	},
	avatarTenantNameContainer: {
		marginTop: 10,
		flexDirection: "row",
		paddingVertical: 5,
		paddingHorizontal: 2,
	},
	tenantName: {
		marginLeft: 4,
		marginTop: 8,
		color: color.dimblack,
		fontWeight: "bold",
	},
});

export default memo(Listing);
