import React from "react";
import {StyleSheet, View} from "react-native";
import {Body, HeadingM, BodyS, HeadingL} from "../Typography";
import color from "../colors";
import {Ionicons} from "@expo/vector-icons";

function Event(props) {
	return (
		<View style={styles.container}>
			<View style={styles.dateContainer}>
				<HeadingL style={styles.boldText}>15</HeadingL>
				<Body style={styles.monthText}>mar</Body>
			</View>
			<View style={styles.detailsContainer}>
				<Body style={styles.boldTitle}>Event title</Body>
				<View style={styles.locationContainer}>
					<Ionicons name='location-outline' size={18} color={color.dimblack} />
					<BodyS style={styles.hallnameText}> hall name</BodyS>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		margin: 10,

		borderRadius: 5,
		flexDirection: "row",
	},
	dateContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color.lightgray,
		width: 70,
		height: 70,
		borderRadius: 20,
	},
	detailsContainer: {
		padding: 10,
	},
	boldText: {
		fontWeight: "normal",
		color: "black",
	},
	boldTitle: {
		fontWeight: "normal",
	},
	monthText: {
		color: "black",
	},
	locationContainer: {
		flexDirection: "row",
		marginTop: 5,
	},
	hallnameText: {
		color: color.dimblack,
		textTransform: "capitalize",
	},
});

export default React.memo(Event);
