import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../../colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {Body, BodyS} from "../../../../Typography";
import {showHideFireAlarm} from "../../../../Store/home-store/securitySlice";

function FireAlarmSecurity(props) {
	const show = useSelector((state) => {
		return state.security.fireAlarm;
	});
	const dispatch = useDispatch();

	const handleShowType = () => {
		dispatch(showHideFireAlarm());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowType}>
			<View style={show ? styles.greyBack : styles.amenityContainer}>
				<MaterialCommunityIcons
					name='smoke-detector'
					size={40}
					color={show ? "black" : "gray"}
				/>
				<Body>fire alarm</Body>
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

export default memo(FireAlarmSecurity);
