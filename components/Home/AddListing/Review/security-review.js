import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import {Body, BodyS, Caption} from "../../../Typography";
import {useSelector} from "react-redux";
import color from "../../../colors";

function SecurityReview(props) {
	const security = useSelector((state) => {
		return state.security;
	});

	return (
		<View style={styles.container}>
			<Body style={styles.boldHeader}>Security Features available</Body>

			<View style={styles.amenityContainer}>
				{security.watchman && (
					<View style={styles.amenity}>
						<BodyS>Gate guard</BodyS>
					</View>
				)}
				{security.fireAlarm && (
					<View style={styles.amenity}>
						<BodyS>Fire alarm</BodyS>
					</View>
				)}
				{security.fence && (
					<View style={styles.amenity}>
						<BodyS>Fence</BodyS>
					</View>
				)}
				{security.cctvCamera && (
					<View style={styles.amenity}>
						<BodyS>CCTV camera</BodyS>
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
		borderRadius: 15,
		padding: 8,
		marginTop: 5,
	},
});

export default memo(SecurityReview);
