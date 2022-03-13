import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {showFeatures} from "../../../../Store/home-store/modalSlice";
import {HeadingS} from "../../../../Typography";
import {typeHouse} from "../../../../Store/home-store/roomSlice";

function TypeHouse(props) {
	const dispatch = useDispatch();

	const handleShowFeatures = () => {
		// dispatch(typeHouse());
		// dispatch(showFeatures());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowFeatures}>
			<View style={styles.typeContainer}>
				<HeadingS>House</HeadingS>
				<MaterialIcons
					name='house'
					size={34}
					color='black'
					style={styles.icon}
				/>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	typeContainer: {
		width: "90%",
		margin: 5,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: color.dimblack,
		borderRadius: 5,
	},
	icon: {
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 5,
	},
});

export default memo(TypeHouse);
