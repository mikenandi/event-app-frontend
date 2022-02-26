import React, {memo} from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import color from "../colors";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addRoom, minusRoom} from "../features/homePageStore/spaceFeatureSlice";

function Bathrooms(props) {
	const roomCount = useSelector((state) => {
		return state.spaceFeatures.roomCount;
	});

	const dispatch = useDispatch();

	const handleAddRoom = () => {
		dispatch(addRoom());
	};

	const handleMinusRoom = () => {
		dispatch(minusRoom());
	};

	return (
		<View style={styles.questionContainer}>
			<Text style={styles.questionText}>Bathrooms</Text>
			<View style={styles.numberContainer}>
				<AntDesign
					name='minus'
					size={20}
					onPress={handleMinusRoom}
					color={color.dimblack}
				/>
				<Text style={styles.roomsCountText}>{roomCount}</Text>

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
		fontSize: 20,
	},
	questionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		margin: 5,
		padding: 10,
		width: "95%",
	},
	questionText: {
		fontSize: 16,
		color: color.dimblack,
	},
});

export default memo(Bathrooms);
