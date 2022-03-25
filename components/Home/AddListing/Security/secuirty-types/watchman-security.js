import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../../../Typography";
import {showHideWatchMan} from "../../../../Store/home-store/securitySlice";

function WatchManSecurity(props) {
	const show = useSelector((state) => {
		return state.security.watchman;
	});
	const dispatch = useDispatch();

	const handleShowAmenityType = () => {
		dispatch(showHideWatchMan());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowAmenityType}>
			<View style={show ? styles.greyBack : styles.amenityContainer}>
				<MaterialIcons
					name='security'
					size={40}
					color={show ? "black" : "gray"}
				/>
				<Body>gate watchman</Body>
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
		borderWidth: 1,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 5,
		width: 120,
		height: 120,
		backgroundColor: color.lightgray,
	},
});

export default memo(WatchManSecurity);
