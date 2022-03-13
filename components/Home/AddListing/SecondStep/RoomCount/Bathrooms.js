import React, {memo} from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {
	addBathRoom,
	minusBathRoom,
} from "../../../../Store/home-store/houseSlice";
import {BodyS, Body, HeadingS} from "../../../../Typography";

function Bathrooms(props) {
	const roomCount = useSelector((state) => {
		return state.house.bathRoomCount;
	});
	const dispatch = useDispatch();

	const handleAddRoom = () => {
		dispatch(addBathRoom());
	};

	const handleMinusRoom = () => {
		dispatch(minusBathRoom());
	};

	return (
		<View style={styles.container}>
			<Body style={styles.description}>Number of bathrooms</Body>
			<View style={styles.numberContainer}>
				<AntDesign
					name='minus'
					size={30}
					onPress={handleMinusRoom}
					color='black'
					style={styles.addminusIcon}
				/>
				<HeadingS style={styles.roomsCountText}>{roomCount}</HeadingS>
				<AntDesign
					name='plus'
					size={30}
					onPress={handleAddRoom}
					color='black'
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
	addminusIcon: {},
	description: {
		paddingVertical: 5,
	},
});

export default memo(Bathrooms);
