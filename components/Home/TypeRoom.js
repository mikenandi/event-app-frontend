import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../colors";
import {Fontisto} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {showFeatures} from "../features/homePageStore/homePageSlice";

import {Body} from "../Typography";

function TypeRoom(props) {
	const dispatch = useDispatch();

	const handleShowFeatures = () => {
		dispatch(showFeatures());
	};

	return (
		<TouchableOpacity activeOpacity={0.5} onPress={handleShowFeatures}>
			<View style={styles.typeContainer}>
				<Fontisto
					name='room'
					size={34}
					color={color.dimblack}
					style={styles.icon}
				/>
				<Body style={styles.typeText}>Room</Body>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	typeContainer: {
		margin: 5,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginRight: 25,
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 25,
	},
	typesContainer: {
		backgroundColor: "white",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		height: "100%",
		paddingTop: 30,
	},
});

export default memo(TypeRoom);
