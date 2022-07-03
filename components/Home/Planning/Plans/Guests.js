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
import {
	showGuests,
	showInvitations,
} from "../../../../Store/homeStore/modalSlice";
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import Guests from "../Guests";

function GuestsPlans(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleShowModal = () => {
		dispatch(showGuests());
	};

	const visible = useSelector((state) => {
		return state.showModal.guestsVisible;
	});

	return (
		<View>
			{/* button for creating invitations */}
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.8}
				onPress={handleShowModal}>
				<View style={styles.boxcontainer}>
					<Ionicons name='people' size={30} color='white' />
				</View>
				<HeadingS style={styles.buttonText}>Guests</HeadingS>
			</TouchableOpacity>

			{/* modal for budget */}
			<Modal animationType='fade' visible={visible} transparent={false}>
				<Guests />
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

export default React.memo(GuestsPlans);
