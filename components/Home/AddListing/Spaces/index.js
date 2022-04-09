import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {
	hideSpace,
	showAmenity,
	showFlooring,
} from "../../../Store/home-store/modalSlice";
import MasterBedroom from "./Type/MasterBedroom";
import {ButtonText, HeadingS, Body} from "../../../Typography";
import KitchenSpace from "./Type/KitchenSpace";
import DiningArea from "./Type/DiningArea";
import {clearSpace} from "../../../Store/home-store/houseSlice";
import LivingRoom from "./Type/LivingRoom";
import Flooring from "../Flooring";

function Features(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModal.flooringVisible;
	});

	const handleBack = () => {
		dispatch(clearSpace());
		dispatch(hideSpace());
	};

	const handleNext = () => {
		dispatch(showFlooring());
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBack}
					style={styles.backArrow}
				/>
				<TouchableOpacity activeOpacity={0.9} onPress={handleNext}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					Lets know spaces which your house have.
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.rowContainer}>
					<MasterBedroom />
					<DiningArea />
				</View>
				<View style={styles.rowContainer}>
					<KitchenSpace />
					<LivingRoom />
				</View>
			</View>
			<Modal animationType='fade' transparent={false} visible={visible}>
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
		color: "black",
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
	bottomContainer: {
		backgroundColor: "white",
		height: "100%",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 20,
	},
	spaceSpecificText: {
		marginVertical: 5,
		fontWeight: "bold",
	},
	spaceSpecificContainer: {
		marginHorizontal: 45,
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: 10,
	},
});

export default memo(Features);
