import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {BodyS, HeadingS} from "../../../../Typography";
import {showAmenity} from "../../../../Store/home-store/modalSlice";
import {tilesFloor} from "../../../../Store/home-store/floorSlice";

function Tiles(props) {
	const dispatch = useDispatch();

	const handleShowNextStep = () => {
		dispatch(tilesFloor());
		dispatch(showAmenity());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleShowNextStep}>
			<View style={styles.typeContainer}>
				<HeadingS style={styles.typeText}>Tiles floor</HeadingS>
				<BodyS style={styles.captionText}>
					the floor that is made up of tiles
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

export default memo(Tiles);
