import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../../colors";
import {Fontisto} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {
	showRoomSecondStep,
	showThirdStep,
} from "../../../../Store/homePageStore/modalSlice";
import {Body} from "../../../../Typography";
import {typeRoom} from "../../../../Store/homePageStore/propertyTypesSlice";
import RoomSecondStep from "../../RoomSecondStep";

function TypeRoom(props) {
	const dispatch = useDispatch();

	const handleShowFeatures = () => {
		dispatch(typeRoom());
		dispatch(showRoomSecondStep());
	};
	const visible = useSelector((state) => {
		return state.showModal.roomSecondStepVisible;
	});

	return (
		<TouchableOpacity activeOpacity={0.5} onPress={handleShowFeatures}>
			<View style={styles.typeContainer}>
				<Fontisto
					name='room'
					size={34}
					color={color.dimblack}
					style={styles.icon}
				/>
				<Body style={styles.typeText}>Room</Body>
			</View>
			<Modal transparent={false} animationType='slide' visible={visible}>
				<RoomSecondStep />
			</Modal>
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

export default memo(TypeRoom);
