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
	hideGuests,
	hidePlanning,
	showRegisterGuest,
} from "../../../../Store/homeStore/modalSlice";
import {
	Ionicons,
	FontAwesome5,
	Foundation,
	FontAwesome,
	Fontisto,
} from "@expo/vector-icons";
import RegisterGuest from "./RegisterGuest";
import {useSelector} from "react-redux";

function Event(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {
		dispatch(hideGuests());
	};

	const visible = useSelector((state) => {
		return state.showModal.registerGuestVisible;
	});

	const handleRegisterGuest = () => {
		dispatch(showRegisterGuest());
	};
	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />

			<View style={styles.topBar}>
				<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
					<Ionicons name='arrow-back' size={28} color='black' />
				</TouchableOpacity>
				<HeadingS style={styles.titleText}>Guests list</HeadingS>
			</View>

			<View style={styles.container}>
				{/* guest container */}
				<View style={styles.guestContainer}>
					<View style={styles.avatar}>
						<Fontisto name='person' size={24} color={color.primary} />
					</View>
					<View style={styles.detailsContainer}>
						<Body>Name Person</Body>
						<BodyS>mike12og@gmail.com</BodyS>
					</View>
				</View>
			</View>
			{/* floating action button */}
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.floatingActionButton}
				onPress={handleRegisterGuest}>
				<FontAwesome5 name='pencil-alt' size={24} color='black' />
			</TouchableOpacity>

			<Modal animationType='fade' visible={visible} transparent={false}>
				<RegisterGuest />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: "white",
		flex: 1,
	},
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: "white",
	},
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
	},
	guestContainer: {
		flexDirection: "row",
		alignItems: "center",
		margin: 10,
	},
	detailsContainer: {
		marginLeft: 10,
	},
	avatar: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color.lightgray,
		borderRadius: 25,
	},
	floatingActionButton: {
		flexDirection: "row",
		width: 50,
		height: 50,
		backgroundColor: color.lightblue,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		position: "absolute",
		right: 20,
		bottom: 40,
	},
	guestText: {
		marginLeft: 5,
	},
});

export default React.memo(Event);
