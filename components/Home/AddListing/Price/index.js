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
import {ButtonText, HeadingS, Body, BodyS} from "../../../Typography";
import {hidePrice, showReview} from "../../../Store/home-store/modalSlice";
import {add_comma} from "../../../../Helpers/addCommaToNumber";
import {remove_comma} from "../../../../Helpers/remove_comma";
import {clearPrice, savePrice} from "../../../Store/home-store/roomSlice";
import Review from "../Review";

function Price(props) {
	const price = useSelector((state) => {
		return state.room.price;
	});

	const visible = useSelector((state) => {
		return state.showModal.reviewVisible;
	});

	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(clearPrice());
		dispatch(hidePrice());
	};

	const handleNext = () => {
		dispatch(showReview());
	};

	const handleChangeText = (price) => {
		dispatch(savePrice(price));
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
					what is the rental price per month?
				</HeadingS>
			</View>

			<View style={styles.bottomContainer}>
				<View style={styles.inputContainer}>
					<HeadingS>Tsh</HeadingS>
					<TextInput
						placeholder='price'
						style={styles.inputText}
						keyboardType='numeric'
						multiline={false}
						maxLength={15}
						value={price}
						onChangeText={handleChangeText}
					/>
				</View>
			</View>

			{/* {visible && <Review />} */}
			<Modal transparent={false} animationType='fade' visible={visible}>
				<Review />
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
		padding: 10,
		alignItems: "center",
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
		fontSize: 20,
		letterSpacing: 0.15,
		width: 240,
		padding: 5,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		width: 240,
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 2,
		marginTop: 60,
		borderColor: color.primary,
	},
});

export default memo(Price);
