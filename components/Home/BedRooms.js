import React, {memo} from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import color from "../colors";
import {useDispatch, useSelector} from "react-redux";
import {
	addBedRoom,
	minusBedRoom,
} from "../features/homePageStore/spaceFeatureSlice";
import {Body, BodyS} from "../Typography";

function AddRooms(props) {
	const roomCount = useSelector((state) => {
		return state.spaceFeatures.bedRoomCount;
	});
	const dispatch = useDispatch();

	const handleAddRoom = () => {
		dispatch(addBedRoom());
	};

	const handleMinusRoom = () => {
		dispatch(minusBedRoom());
	};

	return (
		<View style={styles.questionContainer}>
			<Body style={styles.questionText}>Bedrooms</Body>
			<View style={styles.numberContainer}>
				<AntDesign
					name='minus'
					size={20}
					onPress={handleMinusRoom}
					color={color.dimblack}
				/>
				<Body style={styles.roomsCountText}>{roomCount}</Body>
				<AntDesign
					name='plus'
					size={20}
					onPress={handleAddRoom}
					color={color.dimblack}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	numberContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	roomsCountText: {
		marginHorizontal: 10,
		padding: 5,
	},
	questionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		margin: 5,
		padding: 10,
	},
});

export default memo(AddRooms);
