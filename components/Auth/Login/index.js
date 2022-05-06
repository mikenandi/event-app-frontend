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

function Login(props) {
	// --value for email
	const [email, set_email] = useState("");
	const [email_error, set_email_error] = useState("");

	// --value for password
	const [password, set_password] = useState("");
	const [password_error, set_password_error] = useState("");

	// --function for geting value of email.
	const handleInputEmail = (email) => {
		set_email(email);
	};
	// --function for getting value of password
	const handleInputPassword = (password) => {
		set_password(password);
	};

	// Function to check if a string is email or not.
	const isEmail = (emailAdress) => {
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (emailAdress.match(regexEmail)) {
			return true;
		} else {
			return false;
		}
	};

	// Functionality to get home page
	const handleLogin = () => {
		// --Validating data before sending them.
		if (password.length >= 6 && isEmail(email)) {
			// --Sending HTTP request using axios.
			axios({
				method: "POST",
				url: "http://gudsurvey.herokuapp.com/api/v1/signin",
				data: {
					email: email,
					password: password,
				},
			})
				.then((response) => {
					// --Response was successfull
					if (response.data.success) {
						// --saving data in secure store.
						let token = response.data.auth_token.token;
						SecureStore.setItemAsync("authToken", token)
							.then((response) => {})
							.catch((error) => {});
					}
				})
				.catch((error) => {
					// --error was catched.
					if (error.response) {
						// --error message when a person entered a wrong email addres.
						if (error.response.data.message === "Email not found. ") {
							set_email_error("no account with such email.");
						}

						// --error message when a person entered wrong password.
						if (error.response.data.message === "wrong password") {
							set_password_error("you entered wrong password.");
						}
					}
				});
		}

		// --Displaying error when the password length is less than 6.
		if (password.length < 6) {
			set_password_error("password must have 6 characters. ");
		}

		// --Displaying error when the password length is less than 6.
		if (password.length >= 6) {
			set_password_error("");
		}

		// --Dispaying if the user entered incorrect format of email addres.
		if (!isEmail(email)) {
			set_email_error("invalid email address. ");
		}

		// --Dispaying if the user correct format of email addres.
		if (isEmail(email)) {
			set_email_error("");
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

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='white' />
			<View>
				<HeadingM>Sign in</HeadingM>

				<Caption>email</Caption>
				{/* --email error */}
				{!!email_error && (
					<Caption style={styles.errorMessage}>{email_error}</Caption>
				)}

				{/* --inputs for email address. */}
				<TextInput
					placeholder='email'
					style={styles.inputText}
					value={email}
					onChangeText={handleInputEmail}
				/>

				<Caption>password</Caption>

				{/* --password error. */}
				{!!password_error && (
					<Caption style={styles.errorMessage}>{password_error}</Caption>
				)}

				{/* --inputs for password. */}
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
		marginTop: 15,
	},
	errorMessage: {
		color: "red",
	},
});

export default memo(Login);
