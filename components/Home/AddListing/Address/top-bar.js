import React, {memo} from "react";
import {View, TouchableOpacity, StyleSheet, Modal} from "react-native";
import {ButtonText} from "../../../Typography";
import {Ionicons} from "@expo/vector-icons";
import color from "../../../colors";
import {hideMap, showAddressData} from "../../../Store/home-store/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import AddressData from "../AddressData";

function TopBar(props) {
	const visible = useSelector((state) => {
		return state.showModal.addressDataVisible;
	});

	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hideMap());
	};

	const handleNext = () => {
		dispatch(showAddressData());
	};

	return (
		<View style={styles.topContainer}>
			<Ionicons
				name='arrow-back-outline'
				size={24}
				color='black'
				style={styles.icon}
				onPress={handleBack}
			/>
			<TouchableOpacity activeOpacity={0.9} onPress={handleNext}>
				<ButtonText style={styles.nextText}>Next</ButtonText>
			</TouchableOpacity>
			<Modal transparent={false} animationType='fade' visible={visible}>
				<AddressData />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		position: "absolute",
		top: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		alignItems: "center",
	},
	icon: {
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 25,
		marginLeft: 10,
		opacity: 0.9,
	},
	nextText: {
		backgroundColor: color.lightgray,
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: "black",
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
});

export default memo(TopBar);
