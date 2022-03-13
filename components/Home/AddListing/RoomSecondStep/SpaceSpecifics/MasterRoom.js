import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {BodyS, HeadingS} from "../../../../Typography";
import {masterRoom} from "../../../../Store/home-store/roomSlice";
import {
	showAmenity,
	showFlooring,
} from "../../../../Store/home-store/modalSlice";

function MasterBedroom(props) {
	const dispatch = useDispatch();

	const handleShowNextAmenity = () => {
		dispatch(masterRoom());
		dispatch(showFlooring());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleShowNextAmenity}>
			<View style={styles.typeContainer}>
				<HeadingS style={styles.typeText}>Master room</HeadingS>
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
	inactiveIcon: {
		marginRight: 10,
		padding: 9,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: color.grey,
		marginVertical: 5,
	},
	activeIcon: {
		marginRight: 10,
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 20,
		marginVertical: 5,
	},
	typeText: {
		marginBottom: 5,
	},
	captionText: {
		color: color.dimblack,
	},
});

export default memo(MasterBedroom);
