import React, {memo, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {hideRoomCount, showSpace} from "../../../Store/home-store/modalSlice";
import Bathrooms from "./room-count/Bathrooms";
import Bedrooms from "./room-count/BedRooms";
import {ButtonText, HeadingS} from "../../../Typography";
import ThirdStep from "../Spaces";
import {clearType} from "../../../Store/home-store/propertyTypeSlice";

function RoomCount(props) {
	const type = useSelector((state) => {
		return state.propertyType.type;
	});

	const thirdStepVisible = useSelector((state) => {
		return state.showModal.spaceVisible;
	});

	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(clearType());
		dispatch(hideRoomCount());
	};

	const handleNext = () => {
		dispatch(showSpace());
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
					How many rooms does your {type} have?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<Bedrooms />
				<View style={styles.mid} />
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
	mid: {
		height: 20,
	},
});

export default memo(RoomCount);
