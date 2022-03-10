import React, {memo} from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import color from "../../../../colors";
import {useDispatch, useSelector} from "react-redux";
import {
	addBedRoom,
	minusBedRoom,
} from "../../../../Store/homePageStore/spaceFeatureSlice";
import {Body, BodyS, HeadingS} from "../../../../Typography";

function AddRooms(props) {
	const roomCount = useSelector((state) => {
		return state.spaceFeature.bedRoomCount;
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
			<HeadingS style={styles.questionText}>Bedrooms</HeadingS>
			<View style={styles.numberContainer}>
				<AntDesign
					name='minuscircleo'
					size={30}
					onPress={handleMinusRoom}
					color={color.dimblack}
				/>
				<HeadingS style={styles.roomsCountText}>{roomCount}</HeadingS>
				<AntDesign
					name='pluscircleo'
					size={30}
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
