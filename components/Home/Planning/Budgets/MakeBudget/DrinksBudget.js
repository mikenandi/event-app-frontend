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
import {useState} from "react";
import {saveFromDrinksBudget} from "../../../../../Store/homeStore/eventSlice";

function NewBudget(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const [errorMsg, setErrorMsg] = React.useState("");
	const [price, setPrice] = React.useState("");

	const handlePriceInput = (price) => {
		console.log(price);
		setPrice(price);

		return;
	};

	const handleDone = () => {
		if (!price) {
			setErrorMsg("enter price you expect to spend on drinks");

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);

			return;
		}

		dispatch(saveFromDrinksBudget({drinksPricePerPerson: price}));
		dispatch(hideNewBudget());
		return;
	};

	return (
		<View style={styles.container}>
			{/* form inputs. */}
			<View style={styles.formContainer}>
				{/* input for notes subject. */}
				{false && (
					<View>
						<Caption style={styles.label}>Expected number guests</Caption>
						<TextInput
							placeholder='number of guests'
							style={styles.textinput}
							keyboardType='number-pad'
						/>
					</View>
				)}

				{/* input for notes body. */}
				<View>
					{!!errorMsg && <Caption style={styles.errorText}>{errorMsg}</Caption>}
					<Caption style={styles.label}>drinks price per person</Caption>
					<TextInput
						placeholder='drinks price per person'
						keyboardType='number-pad'
						style={styles.textinput}
						value={price}
						onChangeText={handlePriceInput}
					/>
				</View>

				{/* input for notes body. */}
				{false && (
					<View>
						<Caption style={styles.label}>Descriptions</Caption>
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
		color: "red",
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
	},
});

export default React.memo(NewBudget);
