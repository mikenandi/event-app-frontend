import React, {memo, useEffect, useState} from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Modal,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {ButtonText, HeadingS, Body, BodyS, HeadingM} from "../../../Typography";
import {hidePrice, hideReview} from "../../../Store/home-store/modalSlice";
import {clearPrice, savePrice} from "../../../Store/home-store/roomSlice";

function Review(props) {
	// const price = useSelector((state) => {
	// 	return state.room.price;
	// });

	// const visible = useSelector((state) => {
	// 	return state.showModal.reviewVisible;
	// });

	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hideReview());
	};

	const handleNext = () => {};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBack}
					style={styles.backArrow}
				/>
				<HeadingM style={styles.titleText}>Let's review and post.</HeadingM>
				{/* <TouchableOpacity activeOpacity={0.9} onPress={handleNext}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity> */}
			</View>
			{/* <View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>lets review it now</HeadingS>
			</View> */}

			<View style={styles.bottomContainer}>
				{/* <HeadingM>hello</HeadingM> */}
				<TouchableOpacity activeOpacity={0.9} onPress={handleNext}>
					<View style={styles.actionButton}>
						<ButtonText style={styles.postButton}>post property</ButtonText>
					</View>
				</TouchableOpacity>
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
		alignItems: "center",
	},
	backArrow: {
		color: "white",
		marginRight: 15,
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
	postButton: {
		color: "white",
		fontWeight: "700",
		textAlign: "center",
	},
	bottomContainer: {
		backgroundColor: "white",
		height: "100%",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 20,
		padding: 10,
	},
	label: {
		color: color.dimblack,
		textTransform: "capitalize",
	},
	fetchedContainer: {
		padding: 15,
		borderRadius: 10,
	},
	labelDataContainer: {
		padding: 5,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	inputText: {
		fontSize: 25,
		letterSpacing: 0.25,
		width: 240,
		padding: 10,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		width: 240,
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginTop: 60,
		borderColor: color.primary,
	},
	actionButton: {
		backgroundColor: color.primary,
		paddingVertical: 15,
		paddingHorizontal: 10,
		color: "white",
		fontWeight: "700",
		borderRadius: 3,
		position: "absolute",
		top: 400,

		width: "100%",
	},
});

export default memo(Review);
