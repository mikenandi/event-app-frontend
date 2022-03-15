import React, {memo} from "react";
import {View, StyleSheet, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {hideRoomSecondStep} from "../../../Store/home-store/modalSlice";
import MasterRoom from "./SpaceSpecifics/MasterRoom";
import {HeadingS} from "../../../Typography";
import NormalRoom from "./SpaceSpecifics/NormalRoom";
import SelfContained from "./SpaceSpecifics/SelfContained";
import Flooring from "../Flooring";

function RoomType(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModal.flooringVisible;
	});

	const handleHideFeatures = () => {
		dispatch(hideRoomSecondStep());
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleHideFeatures}
					style={styles.backArrow}
				/>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					What words describes better the room that you have ?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<MasterRoom />
				<SelfContained />
				<NormalRoom />
			</View>
			<Modal transparent={false} animationType='fade' visible={visible}>
				<Flooring />
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
		paddingHorizontal: 10,
	},
	spaceSpecificText: {
		marginVertical: 5,
		fontWeight: "bold",
	},
	spaceSpecificContainer: {
		marginHorizontal: 45,
	},
});

export default memo(RoomType);
