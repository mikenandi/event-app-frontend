import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {BodyS} from "../../../../Typography";

function AcAmenity(props) {
	const dispatch = useDispatch();

	const handleShowAmenityType = () => {};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowAmenityType}>
			<View style={styles.amenityContainer}>
				<MaterialCommunityIcons
					name='air-conditioner'
					size={40}
					color={color.dimblack}
				/>
				<BodyS>air conditioner</BodyS>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	amenityContainer: {
		borderWidth: 1,
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 5,
		width: 120,
	},
});

export default memo(AcAmenity);
