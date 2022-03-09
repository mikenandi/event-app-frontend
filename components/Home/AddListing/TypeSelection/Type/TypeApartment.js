import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {showFeatures} from "../../../../Store/homePageStore/modalSlice";
import {Body} from "../../../../Typography";

function TypeApartment(props) {
	const dispatch = useDispatch();

	const handleShowFeatures = () => {
		dispatch(showFeatures());
	};

	return (
		<TouchableOpacity activeOpacity={0.5} onPress={handleShowFeatures}>
			<View style={styles.typeContainer}>
				<MaterialIcons
					name='apartment'
					size={34}
					color={color.dimblack}
					style={styles.icon}
				/>
				<Body style={styles.typeText}>Apartment</Body>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	typeContainer: {
		margin: 5,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},

	icon: {
		marginRight: 25,
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 25,
	},
});

export default memo(TypeApartment);
