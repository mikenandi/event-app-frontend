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
} from "../../../Typography";
import color from "../../../colors";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideNewNote} from "../../../../Store/homeStore/modalSlice";

function NewNote(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hideNewNote());
	};

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleBack}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>New notes</HeadingS>
				</View>

				<View style={styles.container}>
					{/* form inputs. */}
					<View style={styles.formContainer}>
						{/* input for notes subject. */}
						<View>
							<Caption style={styles.label}>Subject</Caption>
							<TextInput placeholder='subject' style={styles.textinput} />
						</View>

						{/* input for notes body. */}
						<View>
							<Caption style={styles.label}>Note</Caption>
							<TextInput
								placeholder='your note of the note'
								style={styles.textinput}
								multiline={true}
							/>
						</View>
					</View>

					{/* done actions. */}
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
		margin: 10,
		borderRadius: 5,
		fontSize: 16,
		backgroundColor: color.lightgray,
		width: 280,
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
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
	},
	formContainer: {
		alignItems: "center",
	},
});

export default React.memo(NewNote);
