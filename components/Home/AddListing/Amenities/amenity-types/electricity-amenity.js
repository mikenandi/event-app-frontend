import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {Entypo} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {BodyS} from "../../../../Typography";
import {showHideElectricity} from "../../../../Store/home-store/amenitySlice";

function ElectricityAmenity(props) {
	const show = useSelector((state) => {
		return state.amenity.electricity;
	});
	const dispatch = useDispatch();

	const handleShowAmenityType = () => {
		dispatch(showHideElectricity());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowAmenityType}>
			<View style={show ? styles.greyBack : styles.amenityContainer}>
				<Entypo name='flash' size={40} color={show ? "black" : "gray"} />
				<BodyS>electricity</BodyS>
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

export default memo(ElectricityAmenity);
