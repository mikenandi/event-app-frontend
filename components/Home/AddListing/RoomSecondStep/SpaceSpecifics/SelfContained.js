import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {BodyS, HeadingS} from "../../../../Typography";
import {selfContained} from "../../../../Store/home-store/roomSlice";
import {
	showAmenity,
	showFlooring,
} from "../../../../Store/home-store/modalSlice";

function DiningArea(props) {
	const dispatch = useDispatch();

	const handleShowNextStep = () => {
		dispatch(selfContained());
		dispatch(showFlooring());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleShowNextStep}>
			<View style={styles.typeContainer}>
				<HeadingS style={styles.typeText}>Self contained room</HeadingS>
				<BodyS style={styles.captionText}>
					Room that used to be master bedroom
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

export default memo(DiningArea);
