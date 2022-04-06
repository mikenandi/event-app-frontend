import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import {Body, BodyS, Caption} from "../../../Typography";
import {useSelector} from "react-redux";
import color from "../../../colors";

function SecurityReview(props) {
	const security = useSelector((state) => {
		return state.security;
	});

	/**
	 * a function to check if all features of the property are false.
	 * @returns boolean
	 */
	const no_security_feature = () => {
		if (
			!security.cctvCamera &&
			!security.fence &&
			!security.fireAlarm &&
			!security.watchman
		)
			return true;
		else return false;
	};

	return (
		<View style={styles.container}>
			<Body style={styles.boldHeader}>Security Features available</Body>

			<View style={styles.amenityContainer}>
				{security.watchman && (
					<View style={styles.security}>
						<BodyS>Gate guard</BodyS>
					</View>
				)}
				{security.fireAlarm && (
					<View style={styles.security}>
						<BodyS>Fire alarm</BodyS>
					</View>
				)}
				{security.fence && (
					<View style={styles.security}>
						<BodyS>Fence</BodyS>
					</View>
				)}
				{security.cctvCamera && (
					<View style={styles.security}>
						<BodyS>CCTV camera</BodyS>
					</View>
				)}
				{no_security_feature() && (
					<View style={styles.no_security}>
						<BodyS>No security feature selected</BodyS>
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
	security: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
		backgroundColor: color.lightgray,
		borderRadius: 15,
		padding: 8,
		marginTop: 5,
	},
	no_security: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
		backgroundColor: color.lightred,
		borderRadius: 5,
		padding: 8,
		marginTop: 5,
	},
});

export default memo(SecurityReview);
