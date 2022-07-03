import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	StatusBar,
} from "react-native";
import {
	Body,
	HeadingM,
	BodyS,
	HeadingS,
	ButtonText,
	Caption,
} from "../Typography";
import color from "../colors";
import {EvilIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideCreateEvent} from "../../Store/homeStore/modalSlice";

function Event(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	// function to hide event.
	const handleHideCreateEvent = () => {
		dispatch(hideCreateEvent());
	};

	return (
		<ScrollView>
			<StatusBar backgroundColor={color.lightgray} />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					{/* button to cancel action. */}
					<TouchableOpacity activeOpcaity={0.8} onPress={handleHideCreateEvent}>
						<EvilIcons name='close' size={30} color='black' />
					</TouchableOpacity>

					{/* title of the event. */}
					<HeadingS style={styles.titleText}>Event details</HeadingS>
				</View>

				<View style={styles.container}>
					<View style={styles.inputsContainer}>
						{/* input for event title */}
						<View>
							<Caption style={styles.label}>Event title</Caption>
							<TextInput placeholder='event title' style={styles.textinput} />
						</View>

						{/* input for category of event */}
						<View>
							<Caption style={styles.label}>Category of event</Caption>
							<TextInput
								placeholder='category of event'
								style={styles.textinput}
							/>
						</View>

						{/* input for date which the event will be done. */}
						<View>
							<Caption style={styles.label}>date of event</Caption>
							<TextInput placeholder='date of event' style={styles.textinput} />
						</View>

						{/* input for time when it will be done. */}
						<View>
							<Caption style={styles.label}>time</Caption>
							<TextInput placeholder='time' style={styles.textinput} />
						</View>

						{/* input for location where event will be done. */}
						<View>
							<Caption style={styles.label}>Venue</Caption>
							<TextInput placeholder='venue' style={styles.textinput} />
						</View>
					</View>

					{/* button to complete an action. */}
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<ButtonText style={styles.buttonText}>Done</ButtonText>
						</View>
					</View>
				</View>
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
		backgroundColor: "white",
	},
	textinput: {
		padding: 10,
		margin: 5,
		borderRadius: 10,
		width: 280,
		fontSize: 16,
		backgroundColor: color.lightgray,
	},
	button: {
		backgroundColor: color.primary,
		width: 120,
		padding: 15,
		borderRadius: 20,
		alignItems: "center",
	},
	buttonContainer: {
		alignItems: "center",
		margin: 10,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
	},
	label: {
		marginLeft: 10,
		textTransform: "capitalize",
		marginTop: 10,
		fontWeight: "bold",
	},
	inputsContainer: {
		alignItems: "center",
	},
});

export default React.memo(Event);
