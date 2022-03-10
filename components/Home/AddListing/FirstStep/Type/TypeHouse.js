import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {showFeatures} from "../../../../Store/homePageStore/modalSlice";
import {Body} from "../../../../Typography";
import {typeHouse} from "../../../../Store/homePageStore/propertyTypesSlice";

function TypeHouse(props) {
	const dispatch = useDispatch();

	const handleShowFeatures = () => {
		dispatch(typeHouse());
		dispatch(showFeatures());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowFeatures}>
			<View style={styles.typeContainer}>
				<MaterialIcons
					name='house'
					size={34}
					color={color.dimblack}
					style={styles.icon}
				/>
				<Body>House</Body>
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
	typesContainer: {
		backgroundColor: "white",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		height: "100%",
		paddingTop: 30,
	},
});

export default memo(TypeHouse);
