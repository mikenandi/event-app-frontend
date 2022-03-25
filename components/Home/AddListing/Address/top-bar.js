import React, {memo} from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {ButtonText} from "../../../Typography";
import {Ionicons} from "@expo/vector-icons";
import color from "../../../colors";
import {hideMap} from "../../../Store/home-store/modalSlice";
import {useDispatch} from "react-redux";

function TopBar(props) {
	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hideMap());
	};

	return (
		<View style={styles.topContainer}>
			<Ionicons
				name='arrow-back-outline'
				size={24}
				color='white'
				style={styles.icon}
				onPress={handleBack}
			/>
			<TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
				<ButtonText style={styles.nextText}>Next</ButtonText>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		position: "absolute",
		top: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		alignItems: "center",
	},
	icon: {
		backgroundColor: color.primary,
		padding: 10,
		borderRadius: 25,
		marginLeft: 10,
		opacity: 0.9,
	},
	nextText: {
		backgroundColor: color.primary,
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: "white",
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
});

export default memo(TopBar);
