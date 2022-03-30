import React, {memo, useState} from "react";
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
import {hidePrice} from "../../../Store/home-store/modalSlice";

function Price(props) {
	const visible = useSelector((state) => {
		return state.showModal.galleryVisible;
	});

	const [price, set_price] = useState("");

	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hidePrice());
	};

	const handleNext = () => {};

	const handleChangeText = (popular_location_name) => {};

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
				<HeadingS style={styles.titleText}>what is the rental price?</HeadingS>
			</View>

			<View style={styles.bottomContainer}>
				{/* <View style={styles.fetchedContainer}>
					<View style={styles.labelDataContainer}>
						<Ionicons name='pin-outline' size={50} color={color.lightblue} />
						<View>
							<BodyS style={styles.label}>Enter popular location name</BodyS>
							<TextInput
								placeholder='mfano sinza madukani'
								style={styles.inputText}
								multiline={true}
								maxLength={100}
								value={popular_location_name}
								onChangeText={handleChangeText}
							/>
						</View>
					</View>
				</View> */}
			</View>
			{/* <Modal transparent={false} animationType='fade' visible={visible}>
				<Gallery />
			</Modal> */}
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
	bottomDetailContainer: {
		padding: 5,
	},
	inputText: {
		fontSize: 20,
		letterSpacing: 0.25,
		width: 200,
		padding: 5,
	},
});

export default memo(Price);
