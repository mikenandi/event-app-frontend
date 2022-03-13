import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideFeatures} from "../../../Store/home-store/modalSlice";
import MasterBedroom from "./SpaceSpecifics/MasterBedroom";
import {ButtonText, HeadingS, Body} from "../../../Typography";
import KitchenSpace from "./SpaceSpecifics/KitchenSpace";
import DiningArea from "./SpaceSpecifics/DiningArea";

function Features(props) {
	const dispatch = useDispatch();

	const handleHideFeatures = () => {
		dispatch(hideFeatures());
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
				<ButtonText style={styles.nextText}>Next</ButtonText>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					How many rooms does your house have?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<MasterBedroom />
				<DiningArea />
				<KitchenSpace />
			</View>
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
		paddingTop: 50,
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
