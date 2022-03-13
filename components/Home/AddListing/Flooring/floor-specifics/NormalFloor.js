import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {BodyS, HeadingS} from "../../../../Typography";
import {showAmenity} from "../../../../Store/home-store/modalSlice";
import {normalFloor} from "../../../../Store/home-store/floorSlice";

function NormalFloor(props) {
	const dispatch = useDispatch();

	const handleShowNextStep = () => {
		dispatch(normalFloor());
		dispatch(showAmenity());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleShowNextStep}>
			<View style={styles.typeContainer}>
				<HeadingS style={styles.typeText}>Normal floor</HeadingS>
				<BodyS style={styles.captionText}>
					the floor that is made up of cement
				</BodyS>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	typeContainer: {
		width: "90%",
		margin: 5,
		padding: 10,
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: color.dimblack,
		borderRadius: 5,
	},
	typeText: {
		marginBottom: 5,
	},
	captionText: {
		color: color.dimblack,
	},
});

export default memo(NormalFloor);
