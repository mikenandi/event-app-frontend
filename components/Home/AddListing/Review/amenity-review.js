import React, {memo} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Body, BodyS, Caption} from "../../../Typography";
import {useSelector} from "react-redux";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {FontAwesome5} from "@expo/vector-icons";
import color from "../../../colors";

function AmenityReview(props) {
	const amenity = useSelector((state) => {
		return state.amenity;
	});

	return (
		<View style={styles.container}>
			<Body style={styles.boldHeader}>Amenities available</Body>

			<View style={styles.amenityContainer}>
				{amenity.water && (
					<View style={styles.amenity}>
						<BodyS>Water </BodyS>
					</View>
				)}
				{amenity.electricity && (
					<View style={styles.amenity}>
						<BodyS> Electricity </BodyS>
					</View>
				)}
				{amenity.airConditioner && (
					<View style={styles.amenity}>
						<BodyS>Air conditioner</BodyS>
					</View>
				)}
				{amenity.parking && (
					<View style={styles.amenity}>
						<BodyS>Parking</BodyS>
					</View>
				)}
				{amenity.pool && (
					<View style={styles.amenity}>
						<BodyS>Pool</BodyS>
					</View>
				)}
				{amenity.fan && (
					<View style={styles.amenity}>
						<BodyS>Fan</BodyS>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	boldHeader: {
		borderBottomWidth: 1,
		borderBottomColor: "gray",
		marginBottom: 5,
	},
	container: {
		marginLeft: 15,
		marginTop: 10,
	},
	amenityContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	},
	amenity: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
		backgroundColor: color.lightgray,
		padding: 8,
		borderRadius: 15,
		marginTop: 5,
	},
});

export default memo(AmenityReview);
