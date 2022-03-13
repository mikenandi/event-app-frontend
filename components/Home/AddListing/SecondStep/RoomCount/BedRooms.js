import React, {memo} from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import color from "../../../../colors";
import {useDispatch, useSelector} from "react-redux";
import {
	addBedRoom,
	minusBedRoom,
} from "../../../../Store/home-store/houseSlice";
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
		<View style={styles.container}>
			<Body style={styles.questionText}>Number bedrooms</Body>
			<View style={styles.numberContainer}>
				<AntDesign
					name='minus'
					size={30}
					onPress={handleMinusRoom}
					color='black'
				/>
				<HeadingS style={styles.roomsCountText}>{roomCount}</HeadingS>
				<AntDesign
					name='plus'
					size={30}
					onPress={handleAddRoom}
					color='black'
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	numberContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		padding: 10,
		width: "70%",
		borderRadius: 5,
		justifyContent: "space-around",
		borderColor: color.dimblack,
	},
	roomsCountText: {
		marginHorizontal: 10,
		padding: 5,
	},
	container: {
		marginVertical: 5,
		marginHorizontal: 25,
	},
	questionText: {
		paddingVertical: 5,
	},
});

export default memo(AddRooms);
