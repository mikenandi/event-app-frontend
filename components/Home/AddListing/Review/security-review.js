import React, {memo} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Body, Caption} from "../../../Typography";
import {useSelector} from "react-redux";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";
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
						<MaterialIcons name='security' size={24} color={color.primary} />
						<Caption>Gate guard</Caption>
					</View>
				)}
				{security.fireAlarm && (
					<View style={styles.amenity}>
						<MaterialCommunityIcons
							name='smoke-detector'
							size={24}
							color={color.primary}
						/>
						<Caption>Fire alarm</Caption>
					</View>
				)}
				{security.fence && (
					<View style={styles.amenity}>
						<MaterialIcons name='fence' size={24} color={color.primary} />
						<Caption>Fence</Caption>
					</View>
				)}
				{security.cctvCamera && (
					<View style={styles.amenity}>
						<MaterialCommunityIcons
							name='cctv'
							size={24}
							color={color.primary}
						/>
						<Caption>CCTV camera</Caption>
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

export default memo(SecurityReview);
