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
import {BodyS, Body, HeadingS} from "../../../../Typography";

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
			<HeadingS>Bathrooms</HeadingS>
			<View style={styles.numberContainer}>
				<AntDesign
					name='minuscircleo'
					size={30}
					onPress={handleMinusRoom}
					color={color.dimblack}
					style={styles.addminusIcon}
				/>
				<HeadingS style={styles.roomsCountText}>{roomCount}</HeadingS>
				<AntDesign
					name='pluscircleo'
					size={30}
					onPress={handleAddRoom}
					color={color.dimblack}
					style={styles.addminusIcon}
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
	addminusIcon: {},
});

export default memo(Bathrooms);
