import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {FontAwesome5} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../../../Typography";
import {showHideParking} from "../../../../Store/home-store/amenitySlice";

function ParkingAmenity(props) {
	const show = useSelector((state) => {
		return state.amenity.parking;
	});

	const dispatch = useDispatch();

	const handleShowAmenityType = () => {
		dispatch(showHideParking());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowAmenityType}>
			<View style={show ? styles.greyBack : styles.amenityContainer}>
				<FontAwesome5 name='car' size={40} color={show ? "black" : "gray"} />
				<Body>parking</Body>
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

export default memo(ParkingAmenity);
