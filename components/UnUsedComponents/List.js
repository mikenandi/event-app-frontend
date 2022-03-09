import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Card from "../Card";

export default function Listings() {
	return (
		<Card style={styles.card}>
			<Image
				source={require("../assets/house2.jpg")}
				style={styles.propetyImage}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>MBEZI HOUSE</Text>
				<Text style={styles.details}>ENDING: 23 March 2019</Text>
				<Text style={styles.details}>TENANT: NANDI,M</Text>
				<Text style={styles.details}>RENT: TZS 50000</Text>
				<Text style={styles.details}>
					LEFT: <Text style={styles.left}>1 Day</Text>
				</Text>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "95%",
		height: "40%",
		backgroundColor: "white",
		marginHorizontal: 8,
		marginVertical: 2,
		flexDirection: "row",
		padding: 10,
		borderRadius: 5,
	},
	propetyImage: {flex: 1, width: 100, height: 160},
	detailsContainer: {flex: 1, marginLeft: 8, marginVertical: 12},
	title: {
		fontSize: 15,
		fontWeight: "700",
	},
	details: {
		fontWeight: "700",
		color: "gray",
		marginVertical: 6,
	},
	left: {
		color: "crimson",
	},
});
