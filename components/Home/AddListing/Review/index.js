import React, {memo, useEffect, useState} from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {ButtonText, HeadingM, Body} from "../../../Typography";
import {hideAll, hideReview} from "../../../Store/home-store/modalSlice";
import ImagePreview from "./image-preview";
import PriceFeatures from "./price-features";
import AmenityReview from "./amenity-review";
import SecurityReview from "./security-review";
import Spaces from "./spaces";

function Review(props) {
	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hideReview());
	};

	const handlePost = () => {
		dispatch(hideAll());
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
				<HeadingM style={styles.titleText}>Let's review and post.</HeadingM>
			</View>
			<ScrollView>
				<View style={styles.bottomContainer}>
					<Body style={styles.reviewTitle}>Property images</Body>
					<ImagePreview />
					<PriceFeatures />
					<Spaces />
					<AmenityReview />
					<SecurityReview />
				</View>
			</ScrollView>
			<TouchableOpacity activeOpacity={0.9} onPress={handlePost}>
				<View style={styles.actionButton}>
					<ButtonText style={styles.postButton}>post property</ButtonText>
				</View>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {flex: 1},
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
		paddingTop: 10,
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
		position: "relative",
		width: "90%",
		marginLeft: 20,
		marginTop: 20,
		bottom: 10,
	},
});

export default memo(Review);
