import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../../colors";
import {Fontisto} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {showRoomSecondStep} from "../../../../Store/home-store/modalSlice";
import {HeadingS} from "../../../../Typography";
import {typeRoom} from "../../../../Store/home-store/roomSlice";
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
		<TouchableOpacity activeOpacity={0.9} onPress={handleShowFeatures}>
			<View style={styles.typeContainer}>
				<HeadingS style={styles.typeText}>Room</HeadingS>
				<Fontisto name='room' size={34} color='black' style={styles.icon} />
			</View>
			<Modal transparent={false} animationType='fade' visible={visible}>
				<RoomSecondStep />
			</Modal>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	typeContainer: {
		width: "90%",
		margin: 5,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: color.dimblack,
		borderRadius: 5,
	},
	icon: {
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 5,
	},
});

export default memo(TypeRoom);
