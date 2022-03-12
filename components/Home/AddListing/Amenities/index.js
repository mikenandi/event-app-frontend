import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {ButtonText, HeadingS, Body} from "../../../Typography";
import {hideAmenity} from "../../../Store/homePageStore/modalSlice";
import {clearRoomType} from "../../../Store/homePageStore/propertyTypesSlice";

function Amenities(props) {
	const dispatch = useDispatch();

	const handleHideAmenities = () => {
		dispatch(clearRoomType());
		dispatch(hideAmenity());
	};

	const handleNextStep = () => {};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleHideAmenities}
					style={styles.backArrow}
				/>
				<TouchableOpacity activeOpacity={0.9} onPress={handleNextStep}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					What amenities are available at your property?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}></View>
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

export default memo(Amenities);
