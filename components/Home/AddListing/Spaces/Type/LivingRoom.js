import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {livingRoomStatus} from "../../../../Store/home-store/houseSlice";
import {useSelector} from "react-redux";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Body} from "../../../../Typography";

function LivingRoom(props) {
	const show = useSelector((state) => {
		return state.house.spaces.livingRoom;
	});

	const dispatch = useDispatch();

	const handleActive = () => {
		dispatch(livingRoomStatus());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleActive}>
			<View style={show ? styles.activeContainer : styles.inactiveContainer}>
				<MaterialCommunityIcons
					name='sofa'
					size={50}
					color={show ? "black" : "grey"}
				/>
				<Body style={styles.typeText}>Living room</Body>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	activeContainer: {
		margin: 5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: color.lightgray,
		width: 120,
		height: 120,
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
	},
	inactiveContainer: {
		margin: 5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		width: 120,
		height: 120,
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
	},
	typeText: {
		textTransform: "capitalize",
	},
});

export default memo(LivingRoom);
