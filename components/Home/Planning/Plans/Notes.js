import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	StatusBar,
	Modal,
} from "react-native";
import {Body, HeadingM, BodyS, HeadingS, ButtonText} from "../../../Typography";
import color from "../../../colors";
import {useDispatch} from "react-redux";
import {showNotes} from "../../../../Store/homeStore/modalSlice";
import {Foundation} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import Notes from "../Notes";

function Note(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleShowModal = () => {
		dispatch(showNotes());
	};

	const visible = useSelector((state) => {
		return state.showModal.notesVisible;
	});

	return (
		<View>
			{/* button for creating invitations */}
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.8}
				onPress={handleShowModal}>
				<View style={styles.boxcontainer}>
					<Foundation name='clipboard-pencil' size={30} color='white' />
				</View>
				<HeadingS style={styles.buttonText}>Notes</HeadingS>
			</TouchableOpacity>

			{/* modal for budget */}
			<Modal animationType='fade' visible={visible} transparent={false}>
				<Notes />
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

export default React.memo(Note);
