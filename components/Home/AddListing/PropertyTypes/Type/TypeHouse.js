import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../../colors";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {showRoomCount} from "../../../../Store/home-store/modalSlice";
import {HeadingS} from "../../../../Typography";
import {typeHouse} from "../../../../Store/home-store/propertyTypeSlice";
import RoomCount from "../../RoomCount";

function TypeHouse(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModal.roomCountVisible;
	});

	const handleNext = () => {
		dispatch(typeHouse());
		dispatch(showRoomCount());
	};

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={handleNext}>
			<View style={styles.typeContainer}>
				<HeadingS>House</HeadingS>
				<MaterialIcons
					name='house'
					size={34}
					color='black'
					style={styles.icon}
				/>
			</View>
			<Modal transparent={false} animationType='fade' visible={visible}>
				<RoomCount />
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

export default memo(TypeHouse);
