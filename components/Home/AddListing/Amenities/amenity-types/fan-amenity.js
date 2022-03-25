import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {FontAwesome5} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../../../Typography";
import {showHideFan} from "../../../../Store/home-store/amenitySlice";

function FanAmenity(props) {
	const show = useSelector((state) => {
		return state.amenity.fan;
	});
	const dispatch = useDispatch();

	const handleShowAmenityType = () => {
		dispatch(showHideFan());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowAmenityType}>
			<View style={show ? styles.greyBack : styles.amenityContainer}>
				<FontAwesome5 name='fan' size={40} color={show ? "black" : "gray"} />
				<Body>fan</Body>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	amenityContainer: {
		borderWidth: 1,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		width: 120,
		height: 110,
	},
	greyBack: {
		backgroundColor: color.lightgray,
		borderWidth: 1,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		width: 120,
		height: 110,
	},
});

export default memo(FanAmenity);
