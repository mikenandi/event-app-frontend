import React, {memo} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Body, Caption} from "../../../Typography";
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
						<Ionicons name='water' size={24} color={color.primary} />
						<Caption>Water </Caption>
					</View>
				)}
				{amenity.electricity && (
					<View style={styles.amenity}>
						<Ionicons name='flash' size={24} color={color.primary} />
						<Caption> Electricity </Caption>
					</View>
				)}
				{amenity.airConditioner && (
					<View style={styles.amenity}>
						<MaterialCommunityIcons
							name='air-conditioner'
							size={24}
							color={color.primary}
						/>
						<Caption>Air conditioner</Caption>
					</View>
				)}
				{amenity.parking && (
					<View style={styles.amenity}>
						<FontAwesome5 name='car' size={24} color={color.primary} />
						<Caption>Parking</Caption>
					</View>
				)}
				{amenity.pool && (
					<View style={styles.amenity}>
						<MaterialCommunityIcons
							name='pool'
							size={24}
							color={color.primary}
						/>
						<Caption>Pool</Caption>
					</View>
				)}
				{amenity.fan && (
					<View style={styles.amenity}>
						<FontAwesome5 name='fan' size={24} color={color.primary} />
						<Caption>Fan</Caption>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	boldHeader: {
		fontWeight: "bold",
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
	},
});

export default memo(AmenityReview);
