import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import color from "../../../colors";
import {Body} from "../../../Typography";
import {useSelector} from "react-redux";

function PriceFeatures(props) {
	const price = useSelector((state) => {
		return state.room.price;
	});

	const location = useSelector((state) => {
		return state.location.location_data;
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
			<Body style={styles.detail}>Price: Tsh {price}</Body>
			<Body style={styles.detail}>
				Location: {location.ward}, {location.city}
			</Body>
			{room && <Body style={styles.detail}>Room type: {room_type}</Body>}
			{!room && <Body style={styles.detail}>number of bathroms: unknown</Body>}
			{!room && <Body style={styles.detail}>number of bedroom: unkown</Body>}
			{!room && <Body style={styles.detail}>furnished: unkown</Body>}
			<Body style={styles.detail}>Floor: {floor}</Body>
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
	detail: {},
	container: {
		marginLeft: 15,
		marginTop: 10,
	},
});

export default memo(PriceFeatures);
