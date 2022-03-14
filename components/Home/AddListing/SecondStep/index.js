import React, {memo, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {
	hideFeatures,
	showThirdStep,
} from "../../../Store/home-store/modalSlice";
import Bathrooms from "./RoomCount/Bathrooms";
import Bedrooms from "./RoomCount/BedRooms";
import {ButtonText, HeadingS} from "../../../Typography";
import ThirdStep from "../ThirdStep";

function Features(props) {
	const type = useSelector((state) => {
		return state.propertyType.propertyType;
	});

	const thirdStepVisible = useSelector((state) => {
		return state.showModal.thirdStepVisible;
	});

	const dispatch = useDispatch();

	const handleHideFeatures = () => {
		dispatch(hideFeatures());
	};

	const handleNextStep = () => {
		dispatch(showThirdStep());
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
				<TouchableOpacity activeOpacity={0.9} onPress={handleNextStep}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					How many rooms does your {type} have?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<Bedrooms />
				<Bathrooms />
			</View>
			<Modal
				transparent={false}
				visible={thirdStepVisible}
				animationType='fade'>
				<ThirdStep />
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
		color: color.dimblack,
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
		paddingTop: 20,
	},
	spaceSpecificText: {
		marginVertical: 5,
		fontWeight: "bold",
	},
	spaceSpecificContainer: {
		marginHorizontal: 45,
	},
});

export default memo(Features);
