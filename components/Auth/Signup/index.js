import React, {memo, useState} from "react";
import {
	View,
	StyleSheet,
	StatusBar,
	TextInput,
	Pressable,
	ScrollView,
} from "react-native";
import {
	Body,
	BodyS,
	HeadingS,
	ButtonText,
	HeadingM,
	Caption,
	HeadingL,
} from "../../Typography";
import color from "../../colors";
import axios from "axios";
import {useDispatch} from "react-redux";
import {logIn} from "../../../Store/Auth/authSlice";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../Loader";

function Signup(props) {
	// Saving up input data using use state.
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [fullname, setFullname] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// --useDispatch() from redux/react.
	const dispatch = useDispatch();

	// Error message.
	const [error, setError] = useState("");

	// Function to check if a string is email or not.
	const isEmail = (emailAdress) => {
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (emailAdress.match(regexEmail)) {
			return true;
		} else {
			return false;
		}
	};

	// Functionality to go to the code confirmation code page
	// if the confirmation was true.
	const handleSignup = async () => {
		try {
			if (!(fullname && email && password)) {
				setError("fill all field before submiting");
				setTimeout(() => {
					setError("");
				}, 5000);

				return;
			}
			// Dispaying if the user entered incorrect format of email addres.
			if (!isEmail(email)) {
				setError("invalid email address. ");

				setTimeout(() => {
					setError("");
				}, 5000);

				return;
			}

			// Displaying error when the password length is less than 6.
			if (password.length < 6) {
				setError("password must have 6 characters. ");

				setTimeout(() => {
					setError("");
				}, 5000);

				return;
			}

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/auth/signup",
				data: {
					email: email,
					password: password,
					fullname: fullname,
				},
			});
			//setting values
			let authTokenProvided = response.data.data.auth_token;
			let userIdProvided = response.data.data.user_id;

			await SecureStore.setItemAsync("authToken", authTokenProvided);

			await AsyncStorage.setItem("userId", userIdProvided);

			dispatch(logIn({userId: userIdProvided, authToken: authTokenProvided}));

			return;
		} catch (error) {
			setIsLoading(false);

			setError(error.response.data.message);

			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};

	// Functions to handle updating states of form inputs.
	// --for email.
	const handleInputEmail = (email) => {
		setEmail(email);
	};
	// --for password
	const handleInputPassword = (password) => {
		setPassword(password);
	};

	// handle input fullname
	const handleInputFullname = (fullname) => {
		setFullname(fullname);
	};

	// Going to sign in route.
	const handleSignin = () => {
		props.navigation.navigate("Login");
	};

	if (isLoading) return <Loader />;

	return (
		<ScrollView
			style={styles.scrollContainer}
			contentContainerStyle={styles.contentContainer}>
			<View style={styles.container}>
				<StatusBar backgroundColor='white' />
				<View>
					<HeadingM>Sign up</HeadingM>

					{!!error && <Caption style={styles.errorText}>{error}</Caption>}

					{/* input for fullname */}
					<Caption style={styles.label}>fullname</Caption>

					<TextInput
						placeholder='full name'
						style={styles.inputText}
						textContentType='emailAddress'
						value={fullname}
						onChangeText={handleInputFullname}
					/>

					{/* input for email */}
					<Caption style={styles.label}>email</Caption>

					<TextInput
						placeholder='email'
						style={styles.inputText}
						textContentType='emailAddress'
						value={email}
						onChangeText={handleInputEmail}
					/>

					{/* input for password */}
					<Caption style={styles.label}>password</Caption>

					<TextInput
						placeholder='password'
						style={styles.inputText}
						secureTextEntry={true}
						passwordRules='minlength: 8;'
						textContentType='password'
						value={password}
						onChangeText={handleInputPassword}
					/>

					{/* button for signing up. */}
					<Pressable onPress={handleSignup}>
						<ButtonText style={styles.loginButton}>sign up</ButtonText>
					</Pressable>
					<View style={styles.questionContainer}>
						<BodyS style={styles.question}>Have an account?</BodyS>
						<Pressable style={styles.signupContainer} onPress={handleSignin}>
							<Body style={styles.singupText}>Sign in</Body>
						</Pressable>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	inputText: {
		padding: 10,
		fontSize: 16,
		letterSpacing: 0.5,
		borderRadius: 3,
		width: 250,
		marginVertical: 5,
		backgroundColor: color.lightgray,
	},
	loginButton: {
		backgroundColor: color.primary,
		padding: 15,
		textAlign: "center",
		fontWeight: "bold",
		color: "white",
		marginTop: 10,
		borderRadius: 10,
	},
	forgotPasswordText: {
		textAlign: "right",
		fontWeight: "bold",
		color: color.dimblack,
	},
	question: {
		marginTop: 5,
	},
	singupText: {
		color: color.primary,
		fontWeight: "bold",
	},
	signupContainer: {
		marginTop: 4,
		marginLeft: 4,
	},
	questionContainer: {
		flexDirection: "row",
		alignItems: "baseline",
		marginBottom: 10,
	},
	contentContainerStyle: {},
	showPasswordContainer: {
		flexDirection: "row",
	},
	checkBox: {
		borderWidth: 1,
		padding: 1,
		marginHorizontal: 5,
		borderRadius: 3,
		backgroundColor: color.primary,
	},
	errorText: {
		color: "red",
		fontWeight: "bold",
	},
	contentContainer: {
		flexGrow: 1,
		justifyContent: "center",
	},
	scrollContainer: {
		backgroundColor: "white",
	},
	label: {
		marginTop: 10,
		textTransform: "capitalize",
	},
});

export default memo(Signup);
