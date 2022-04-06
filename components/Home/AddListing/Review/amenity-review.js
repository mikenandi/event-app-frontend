import React, {memo} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Body, BodyS} from "../../../Typography";
import {useSelector} from "react-redux";
import color from "../../../colors";

function AmenityReview(props) {
	const amenity = useSelector((state) => {
		return state.amenity;
	});

	/**
	 * a function to check if all all amenities are false.
	 * @returns boolean
	 */
	const no_amenity = () => {
		if (
			!amenity.water &&
			!amenity.airConditioner &&
			!amenity.fan &&
			!amenity.parking &&
			!amenity.pool &&
			!amenity.electricity
		)
			return true;
		else return false;
	};

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
				{no_amenity() && (
					<View style={styles.no_amenity}>
						<BodyS>No amenites selected.</BodyS>
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
	no_amenity: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
		backgroundColor: color.lightred,
		borderRadius: 5,
		padding: 8,
		marginTop: 5,
	},
});

export default memo(AmenityReview);
