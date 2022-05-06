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
} from "../../Typography";
import color from "../../colors";
import axios from "axios";
import {useDispatch} from "react-redux";
import {saveEmail, saveToken} from "../../Store/auth-store/userSlice";

function Signup(props) {
	// Saving up input data using use state.
	const [password, set_password] = useState("");
	const [email, set_email] = useState("");

	// --useDispatch() from redux/react.
	const dispatch = useDispatch();

	// Error message.
	// --For email
	const [email_error, set_email_error] = useState("");
	// --For password
	const [password_error, set_password_error] = useState("");

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
	const handleSignup = () => {
		// Sending request using axios.
		if (password.length >= 6 && isEmail(email)) {
			axios({
				method: "POST",
				url: "http://gudsurvey.herokuapp.com/api/v1/signup",
				data: {
					email: email,
					password: password,
					from: "landlord",
				},
			})
				.then((response) => {
					if (response.data.success) {
						// --saving token & email temporarily to redux
						dispatch(saveEmail(email));
						dispatch(saveToken(response.data.auth_token.token));

						// --going to confirm code page.
						props.navigation.navigate("Confirm");
					} else {
						set_email_error("email already taken. ");
					}
				})
				.catch((error) => {
					console.log(error.response.data);
				});
		}

		// Displaying error when the password length is less than 6.
		if (password.length < 6) {
			set_password_error("password must have 6 characters. ");
		}

		// Displaying error when the password length is less than 6.
		if (password.length >= 6) {
			set_password_error("");
		}

		// Dispaying if the user entered incorrect format of email addres.
		if (!isEmail(email)) {
			set_email_error("invalid email address. ");
		}

		// Dispaying if the user correct format of email addres.
		if (isEmail(email)) {
			set_email_error("");
		}
	};

	// Functions to handle updating states of form inputs.
	// --for email.
	const handleInputEmail = (email) => {
		set_email(email);
	};
	// --for password
	const handleInputPassword = (password) => {
		set_password(password);
	};

	// Going to sign in route.
	const handleSignin = () => {
		props.navigation.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='white' />
			<View>
				<HeadingM>Sign up</HeadingM>

				<Caption>email</Caption>
				{!!email_error && (
					<Caption style={styles.error_text}>{email_error}</Caption>
				)}

				<TextInput
					placeholder='email'
					style={styles.inputText}
					textContentType='emailAddress'
					value={email}
					onChangeText={handleInputEmail}
				/>

				<Caption>password</Caption>
				{!!password_error && (
					<Caption style={styles.error_text}>{password_error}</Caption>
				)}

				<TextInput
					placeholder='password'
					style={styles.inputText}
					secureTextEntry={true}
					passwordRules='minlength: 8;'
					textContentType='password'
					value={password}
					onChangeText={handleInputPassword}
				/>

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
		borderRadius: 3,
		borderWidth: 1,
		width: 250,
		marginVertical: 5,
	},
	loginButton: {
		backgroundColor: color.primary,
		padding: 15,
		textAlign: "center",
		fontWeight: "bold",
		color: "white",
		marginTop: 10,
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
	error_text: {
		color: "red",
	},
});

export default memo(Signup);
