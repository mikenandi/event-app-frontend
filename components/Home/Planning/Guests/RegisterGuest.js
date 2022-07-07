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
import {useDispatch, useSelector} from "react-redux";
import {
	hideCreateEvent,
	hideRegisterGuest,
} from "../../../../Store/homeStore/modalSlice";
import axios from "axios";
import Loader from "../../../Loader";

function RegisterGuest(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	// setting up states
	const [guestName, setGuestName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [errorMsg, setErrorMsg] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	const handleHideRegisterGuest = () => {
		dispatch(hideRegisterGuest());
		return;
	};

	const handleEmailInput = (email) => {
		setEmail(email);
		return;
	};

	const handleGuestNameInput = (name) => {
		setGuestName(name);
		return;
	};

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});

	const handleRegisterGuest = async () => {
		try {
			// checking if the values are not empty
			if (!guestName || !email) {
				setErrorMsg("fill all fields");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/guest/create",
				data: {
					eventId: eventId,
					fullname: guestName,
					email: email,
				},
			});

			dispatch(hideRegisterGuest());

			return;
		} catch (error) {
			setIsLoading(false);

			setErrorMsg(error.response.data.message);

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);

			return;
		}
	};

	if (isLoading) return <Loader />;

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity
						activeOpcaity={0.8}
						onPress={handleHideRegisterGuest}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>Event details</HeadingS>
				</View>

				<View style={styles.container}>
					{/* form inputs. */}
					<View style={styles.formContainer}>
						{/* error message. */}
						{!!errorMsg && (
							<Caption style={styles.errorText}>{errorMsg}</Caption>
						)}

						{/* input for name of the guest. */}
						<View>
							<Caption style={styles.label}>Guest name</Caption>
							<TextInput
								placeholder='guest name'
								style={styles.textinput}
								value={guestName}
								onChangeText={handleGuestNameInput}
							/>
						</View>

						{/*  input for email/ contacts of the guest. */}
						<View>
							<Caption style={styles.label}>Guest email</Caption>
							<TextInput
								placeholder='email'
								value={email}
								onChangeText={handleEmailInput}
								style={styles.textinput}
							/>
						</View>
					</View>

					{/* done actions. */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleRegisterGuest}
						style={styles.buttonContainer}>
						<View style={styles.button}>
							<ButtonText style={styles.buttonText}>Done</ButtonText>
						</View>
					</TouchableOpacity>
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
	errorText: {
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
		color: "red",
	},
});

export default React.memo(RegisterGuest);
