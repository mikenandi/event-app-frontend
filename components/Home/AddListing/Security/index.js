import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {ButtonText, HeadingS, Body} from "../../../Typography";
import {clearSecurity} from "../../../Store/home-store/securitySlice";
import {hideSecurity, showMap} from "../../../Store/home-store/modalSlice";
import FenceSecurity from "./secuirty-types/fence-security";
import WatchmanSecurity from "./secuirty-types/watchman-security";
import FireAlarmSecurity from "./secuirty-types/fire-alarm-security";
import CctvCameraSecurity from "./secuirty-types/cctv-camera-security";
import ViewMap from "../Address";

function Security(props) {
	const visible = useSelector((state) => {
		return state.showModal.mapVisible;
	});

	const dispatch = useDispatch();

	const handleHideSecurity = () => {
		dispatch(clearSecurity());
		dispatch(hideSecurity());
	};

	const handleNextStep = () => {
		dispatch(showMap());
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleHideSecurity}
					style={styles.backArrow}
				/>
				<TouchableOpacity activeOpacity={0.9} onPress={handleNextStep}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					security features available at your property
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.rowContainer}>
					<FenceSecurity />
					<WatchmanSecurity />
				</View>
				<View style={styles.rowContainer}>
					<FireAlarmSecurity />
					<CctvCameraSecurity />
				</View>
				<View style={styles.rowContainer}></View>
			</View>
			<Modal transparent={false} animationType='fade' visible={visible}>
				<ViewMap />
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {flex: 1, backgroundColor: color.primary},
	topContainer: {
		backgroundColor: color.primary,
		paddingHorizontal: 8,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	backArrow: {
		color: "white",
	},
	titleText: {
		color: "white",
		fontWeight: "bold",
	},
	titleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: color.primary,
		backgroundColor: color.primary,
		padding: 10,
	},
	nextText: {
		backgroundColor: "white",
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: color.dimblack,
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
	bottomContainer: {
		backgroundColor: "white",
		height: "100%",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 20,
		padding: 10,
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default memo(Security);
