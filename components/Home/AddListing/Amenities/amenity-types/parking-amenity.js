import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {BodyS} from "../../../../Typography";
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
				<MaterialIcons
					name='local-parking'
					size={40}
					color={show ? "black" : color.dimblack}
				/>
				<BodyS>parking</BodyS>
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
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 5,
		width: 120,
	},
	greyBack: {
		backgroundColor: color.lightgray,
		borderWidth: 1,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 5,
		width: 120,
	},
});

export default memo(ParkingAmenity);
