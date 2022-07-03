import React from "react";
import {StyleSheet, TouchableOpacity, View, Modal} from "react-native";
import {HeadingS} from "../../../Typography";
import color from "../../../colors";
import {useDispatch} from "react-redux";
import {showReminders} from "../../../../Store/homeStore/modalSlice";
import {FontAwesome5} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import Reminders from "../Reminders";

function Notes(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleShowModal = () => {
		dispatch(showReminders());
	};

	const visible = useSelector((state) => {
		return state.showModal.remindersVisible;
	});

	return (
		<View>
			{/* button for creating invitations */}
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.8}
				onPress={handleShowModal}>
				<View style={styles.boxcontainer}>
					<FontAwesome5 name='business-time' size={30} color='white' />
				</View>
				<HeadingS style={styles.buttonText}>Reminders</HeadingS>
			</TouchableOpacity>

			{/* modal for budget */}
			<Modal animationType='fade' visible={visible} transparent={false}>
				<Reminders />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "white",
		padding: 5,
		borderRadius: 5,
		alignItems: "center",
		margin: 5,
		flexDirection: "row",
		marginLeft: 15,
	},
	buttonText: {
		color: color.dimblack,
		marginLeft: 10,
	},
	boxcontainer: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: color.primary,
		width: 60,
		height: 60,
		borderRadius: 10,
	},
});

export default React.memo(Notes);
