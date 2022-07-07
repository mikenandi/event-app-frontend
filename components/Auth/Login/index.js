import React, {memo, useState} from "react";
import {View, StyleSheet, StatusBar, TextInput, Pressable} from "react-native";
import {
	Body,
	BodyS,
	HeadingL,
	ButtonText,
	HeadingM,
	Caption,
} from "../../Typography";
import color from "../../colors";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {logIn} from "../../../Store/Auth/authSlice";
import Loader from "../../Loader";
import {useDispatch} from "react-redux";

function Login(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	// setting up states.
	const [email, setEmail] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// --function for geting value of email.
	const handleInputEmail = (email) => {
		setEmail(email);
	};

	// --function for getting value of password
	const handleInputPassword = (password) => {
		setPassword(password);
	};

	// Function to check if a string is email or not.
	const isEmail = (emailAdress) => {
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (emailAdress.match(regexEmail)) return true;
		else return false;
	};

	// Functionality to get home page
	const handleLogin = async () => {
		try {
			if (!(password && email)) {
				setErrorMsg("fill all fields");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			if (password.length < 6) {
				setErrorMsg("length should be greater than 6");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			if (!isEmail(email)) {
				setErrorMsg("invalid email");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/auth/login",
				data: {
					email: email,
					password: password,
				},
			});

			let authTokenProvided = response.data.data.auth_token;
			let userIdProvided = response.data.data.user_id;

			await SecureStore.setItemAsync("authToken", authTokenProvided);

			await AsyncStorage.setItem("userId", userIdProvided);

			dispatch(logIn({userId: userIdProvided, authToken: authTokenProvided}));
			return;
		} catch (error) {
			setIsLoading(false);
			console.log(error.response.data.message);
			setErrorMsg(error.response.data.message);

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);
			return;
		}
	};

	// --going to signup screen.
	const handleSignup = () => {
		props.navigation.navigate("Signup");
	};

	// --going to forgot password screen.
	const handleForgot = () => {
		props.navigation.navigate("ForgotPassword");
	};

	if (isLoading) return <Loader />;

	// if (true) return <Loader />;

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='white' />
			<View>
				<HeadingM>Sign in</HeadingM>

				{/* --email error */}
				{!!errorMsg && (
					<Caption style={styles.errorMessage}>{errorMsg}</Caption>
				)}

				{/* --inputs for email address. */}
				<Caption style={styles.label}>email</Caption>
				<TextInput
					placeholder='email'
					style={styles.inputText}
					value={email}
					onChangeText={handleInputEmail}
				/>

				{/* --inputs for password. */}
				<Caption style={styles.label}>password</Caption>

				<TextInput
					placeholder='password'
					style={styles.inputText}
					secureTextEntry={true}
					value={password}
					onChangeText={handleInputPassword}
				/>

				{/* --button for person who forgot their password. */}
				<Pressable onPress={handleForgot}>
					<BodyS style={styles.forgotPasswordText}>Forgot password?</BodyS>
				</Pressable>

				{/* --button for signing in */}
				<Pressable onPress={handleLogin}>
					<ButtonText style={styles.loginButton}>sign in</ButtonText>
				</Pressable>

				{/* --Link for a person who need to go to signup page. */}
				<View style={styles.questionContainer}>
					<BodyS style={styles.question}>Don't have an account?</BodyS>
					<Pressable style={styles.signupContainer} onPress={handleSignup}>
						<Body style={styles.singupText}>Sign up</Body>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	inputText: {
		padding: 10,
		fontSize: 16,
		letterSpacing: 0.5,
		borderRadius: 5,
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
		marginTop: 20,
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
		marginTop: 15,
	},
	errorMessage: {
		color: "red",
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	label: {
		marginTop: 10,
		textTransform: "capitalize",
	},
});

export default memo(Login);
