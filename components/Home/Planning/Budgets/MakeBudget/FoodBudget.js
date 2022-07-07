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
import {
	hideNewBudget,
	hideNewNote,
} from "../../../../../Store/homeStore/modalSlice";
import {useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {saveFromFoodBudget} from "../../../../../Store/homeStore/eventSlice";

function NewBudget(props) {
	// initializing dispatch
	const dispatch = useDispatch();
	const [numberOfGuests, setNumberOfGuests] = React.useState("");
	const [pricePerPlate, setPricePerPlate] = React.useState("");
	const [errorMsg, setErrorMsg] = React.useState("");

	const handleNumberOfGuestInput = (numberOfGuests) => {
		setNumberOfGuests(numberOfGuests);
	};

	const handlePriceInput = (price) => {
		setPricePerPlate(price);
	};

	const handleDone = async () => {
		try {
			if (!numberOfGuests || !pricePerPlate) {
				setErrorMsg("fill all fields");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			dispatch(
				saveFromFoodBudget({
					numberOfGuestsExpected: numberOfGuests,
					pricePerPlate: pricePerPlate,
				}),
			);
			dispatch(hideNewBudget());

			return;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			{/* form inputs. */}
			<View style={styles.formContainer}>
				{/* input for notes subject. */}
				<View>
					{!!errorMsg && <Caption style={styles.errorText}>{errorMsg}</Caption>}
					<Caption style={styles.label}>Expected number</Caption>
					<TextInput
						placeholder='number of guests'
						style={styles.textinput}
						keyboardType='number-pad'
						value={numberOfGuests}
						onChangeText={handleNumberOfGuestInput}
					/>
				</View>

				{/* input for notes body. */}
				<View>
					<Caption style={styles.label}>Price per plate</Caption>
					<TextInput
						placeholder='price per plate'
						keyboardType='number-pad'
						style={styles.textinput}
						value={pricePerPlate}
						onChangeText={handlePriceInput}
					/>
				</View>

				{/* input for notes body. */}
				{false && (
					<View>
						<Caption style={styles.label}>Describe menu</Caption>
						<TextInput placeholder='description' style={styles.textinput} />
					</View>
				)}
			</View>

			{/* done actions. */}
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={handleDone}
				style={styles.buttonContainer}>
				<View style={styles.button}>
					<ButtonText style={styles.buttonText}>Done</ButtonText>
				</View>
			</TouchableOpacity>
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
	errorText: {
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
		color: "red",
	},
});

export default React.memo(NewBudget);
