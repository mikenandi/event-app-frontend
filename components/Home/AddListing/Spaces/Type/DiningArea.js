import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {dinningAreaStatus} from "../../../../Store/home-store/houseSlice";
import {useSelector} from "react-redux";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Body} from "../../../../Typography";

function DiningArea(props) {
	const show = useSelector((state) => {
		return state.house.spaces.dinningArea;
	});

	const dispatch = useDispatch();

	const handleActive = () => {
		dispatch(dinningAreaStatus());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleActive}>
			<View style={show ? styles.activeContainer : styles.inactiveContainer}>
				<MaterialCommunityIcons
					name='table-chair'
					size={50}
					color={show ? "black" : "grey"}
				/>
				<Body style={styles.typeText}>Dinning area</Body>
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

export default memo(DiningArea);
