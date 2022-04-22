import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import color from "../../../colors";
import {Body, BodyS} from "../../../Typography";
import {useSelector} from "react-redux";

function PriceFeatures(props) {
	const price = useSelector((state) => {
		return state.room.price;
	});

	const location = useSelector((state) => {
		return state.location.location_data;
	});

	const bathroom = useSelector((state) => {
		return state.house.bathroom;
	});

	const bedroom = useSelector((state) => {
		return state.house.bedroom;
	});

	const room_type = useSelector((state) => {
		return state.room.roomType;
	});

	const floor = useSelector((state) => {
		return state.floor.flooring;
	});

	const room = useSelector((state) => {
		if (state.propertyType.type === "room") return true;
		else return false;
	});

	return (
		<View style={styles.container}>
			<Body style={styles.boldHeader}>Home details</Body>
			<View style={styles.detailContainer}>
				<Body style={styles.detail}>Price</Body>
				<Body style={styles.rightDetail}>tsh {price}</Body>
			</View>
			<View style={styles.detailContainer}>
				<Body style={styles.detail}>Location</Body>
				<BodyS style={styles.rightDetail}>
					{location.ward}, {location.city}
				</BodyS>
			</View>

			{room && (
				<View style={styles.detailContainer}>
					<Body style={styles.detail}>Room type</Body>
					<Body style={styles.rightDetail}>{room_type}</Body>
				</View>
			)}
			{!room && (
				<View style={styles.detailContainer}>
					<Body style={styles.detail}>number of bathroms</Body>
					<Body style={styles.rightDetail}>{bathroom}</Body>
				</View>
			)}
			{!room && (
				<View style={styles.detailContainer}>
					<Body style={styles.detail}>number of bedroom</Body>
					<Body style={styles.rightDetail}>{bedroom}</Body>
				</View>
			)}

			{false && (
				<View style={styles.detailContainer}>
					<Body style={styles.detail}>furnished</Body>
					<Body style={styles.rightDetail}>unkown</Body>
				</View>
			)}
			<View style={styles.detailContainer}>
				<Body style={styles.detail}>Floor</Body>
				<Body style={styles.rightDetail}> {floor}</Body>
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
	detailContainer: {
		backgroundColor: color.lightgray,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 5,
	},
	container: {
		marginLeft: 15,
		marginTop: 10,
	},
	rightDetail: {
		fontWeight: "normal",
	},
	detail: {
		textTransform: "capitalize",
	},
});

export default memo(PriceFeatures);
