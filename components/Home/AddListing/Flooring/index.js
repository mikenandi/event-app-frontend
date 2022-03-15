import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {HeadingS} from "../../../Typography";
import {hideFlooring} from "../../../Store/home-store/modalSlice";
import {clearFloor} from "../../../Store/home-store/floorSlice";
import Tiles from "./floor-specifics/Tiles";
import WoodenFloor from "./floor-specifics/WoodenFloor";
import NormalFloor from "./floor-specifics/NormalFloor";
import Amenity from "../Amenities";

function Flooring(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModal.amenityVisible;
	});

	const handleHideFlooring = () => {
		dispatch(clearFloor());
		dispatch(hideFlooring());
	};

	const handleNextStep = () => {};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleHideFlooring}
					style={styles.backArrow}
				/>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					What type of flooring does your property have?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<Tiles />
				<WoodenFloor />
				<NormalFloor />
			</View>
			<Modal transparent={false} animationType='fade' visible={visible}>
				<Amenity />
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {flex: 1, backgroundColor: color.primary},
	topContainer: {
		backgroundColor: color.primary,
		paddingHorizontal: 8,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	backArrow: {
		color: "white",
	},
	titleText: {
		color: "white",
		fontWeight: "bold",
	},
	titleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: color.primary,
		backgroundColor: color.primary,
		padding: 10,
	},
	nextText: {
		backgroundColor: "white",
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: color.dimblack,
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
	bottomContainer: {
		backgroundColor: "white",
		height: "100%",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 50,
		padding: 10,
	},
	spaceSpecificText: {
		marginVertical: 5,
		fontWeight: "bold",
	},
	spaceSpecificContainer: {
		marginHorizontal: 45,
	},
});

export default memo(Flooring);
