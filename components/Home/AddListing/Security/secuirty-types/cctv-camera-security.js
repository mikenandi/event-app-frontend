import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../../../Typography";
import {showHideCctvCamera} from "../../../../Store/home-store/securitySlice";

function CctvSecurity(props) {
	const show = useSelector((state) => {
		return state.security.cctvCamera;
	});

	const dispatch = useDispatch();

	const handleShowType = () => {
		dispatch(showHideCctvCamera());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowType}>
			<View style={show ? styles.greyBack : styles.amenityContainer}>
				<MaterialCommunityIcons
					name='cctv'
					size={40}
					color={show ? "black" : "grey"}
				/>
				<Body>CCTV camera</Body>
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
		height: 120,
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
		height: 120,
	},
});

export default memo(CctvSecurity);
