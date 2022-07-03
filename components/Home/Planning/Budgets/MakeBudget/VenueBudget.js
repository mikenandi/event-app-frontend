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
} from "../../../../Typography";
import color from "../../../../colors";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideNewNote} from "../../../../../Store/homeStore/modalSlice";
import {useSelector} from "react-redux";

function NewBudget(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			{/* form inputs. */}
			<View style={styles.formContainer}>
				{/* input for notes subject. */}
				<View>
					<Caption style={styles.label}>Price</Caption>
					<TextInput
						placeholder='number of guests'
						style={styles.textinput}
						keyboardType='number-pad'
					/>
				</View>

				{/* input for notes body. */}
				<View>
					<Caption style={styles.label}>Descriptions</Caption>
					<TextInput placeholder='description' style={styles.textinput} />
				</View>
			</View>

			{/* done actions. */}
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<ButtonText style={styles.buttonText}>Done</ButtonText>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
	label: {
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
	},
	formContainer: {
		alignItems: "center",
	},
});

export default React.memo(NewBudget);
