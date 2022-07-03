import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	StatusBar,
} from "react-native";
import {Body, HeadingM, BodyS, HeadingS, ButtonText} from "../../../Typography";
import color from "../../../colors";
import {EvilIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
	Ionicons,
	FontAwesome5,
	Foundation,
	FontAwesome,
} from "@expo/vector-icons";

function Event(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {};

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
						<EvilIcons name='close' size={30} color='white' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>Planning</HeadingS>
				</View>
				<Body>some guest here.</Body>
				<View style={styles.container}></View>
			</View>
		</ScrollView>
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
		backgroundColor: color.primary,
	},
	textinput: {
		padding: 10,
		margin: 10,
		borderRadius: 10,
		fontSize: 16,
		borderWidth: 1,
		borderColor: color.primary,
	},
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
	titleText: {
		color: "white",
		fontWeight: "bold",
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

export default React.memo(Event);
