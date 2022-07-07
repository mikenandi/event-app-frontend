import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Body, HeadingM, BodyS, HeadingL} from "../Typography";
import color from "../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {showPlanning} from "../../Store/homeStore/modalSlice";
import {activePlanEventId} from "../../Store/homeStore/eventSlice";

function Event(props) {
	const dispatch = useDispatch();

	const handleShowPlanning = () => {
		dispatch(activePlanEventId(props.id));
		dispatch(showPlanning());
	};

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={handleShowPlanning}
			style={styles.container}>
			<View style={styles.dateContainer}>
				<HeadingL style={styles.boldText}>{props.date}</HeadingL>
				<Body style={styles.monthText}>{props.month}</Body>
			</View>
			<View style={styles.detailsContainer}>
				<Body style={styles.boldTitle}>{props.title}</Body>
				<View style={styles.locationContainer}>
					<Ionicons name='location-outline' size={18} color={color.dimblack} />
					<BodyS style={styles.hallnameText}>{props.location}</BodyS>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		marginHorizontal: 20,
		marginVertical: 15,
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
		textTransform: "capitalize",
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
