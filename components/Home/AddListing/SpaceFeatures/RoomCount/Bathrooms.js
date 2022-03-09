import React, {memo} from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {
	addBathRoom,
	minusBathRoom,
} from "../../../../Store/homePageStore/spaceFeatureSlice";
import {BodyS, Body} from "../../../../Typography";

function Bathrooms(props) {
	const roomCount = useSelector((state) => {
		return state.spaceFeature.bathRoomCount;
	});
	const dispatch = useDispatch();

	const handleAddRoom = () => {
		dispatch(addBathRoom());
	};

	const handleMinusRoom = () => {
		dispatch(minusBathRoom());
	};
	console.log(roomCount);
	return (
		<View style={styles.questionContainer}>
			<Body>Bathrooms</Body>
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

export default memo(Bathrooms);
