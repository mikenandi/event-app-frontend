import React, {memo} from "react";
import {View, StyleSheet, StatusBar, TextInput, Pressable} from "react-native";
import {
	Body,
	BodyS,
	HeadingS,
	ButtonText,
	HeadingM,
	Caption,
} from "../../Typography";
import color from "../../colors";
import {Ionicons} from "@expo/vector-icons";
import axios from "axios";

function ForgotPassword(props) {
	// --email states using useState hook.
	const [email, set_email] = useState("");
	const [email_error, set_email_error] = useState("");

	// --saving up the email data.
	const handleEmailInput = () => {
		set_email(email);
	};

	// --function to check if a string is email or not.
	const isEmail = (emailAdress) => {
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (emailAdress.match(regexEmail)) {
			return true;
		} else {
			return false;
		}
	};

	// --function for sending five digit code.
	const handleSendCode = () => {
		if (isEmail(email)) {
			axios({
				method: "POST",
				url: "http://gudsurvey.herokuapp.com/api/v1/password-recovery-email",
				data: {
					email: email,
				},
			})
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					if (error.response) {
						console.log(error.response.data);
					}
				});
		}
	};

	// --going to signup page.
	const handleSignup = () => {
		props.navigation.navigate("Signup");
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='white' />
			<View>
				<HeadingM>Forgot password</HeadingM>

				<Caption>email</Caption>
				{/* --email error message */}
				{email_error && <Caption>{email_error}</Caption>}

				{/* --input for email. */}
				<TextInput
					placeholder='email'
					style={styles.inputText}
					textContentType='emailAddress'
					value={email}
					onChangeText={handleEmailInput}
				/>

				{/* --button for sending code. */}
				<Pressable onPress={handleSendCode}>
					<ButtonText style={styles.loginButton}>send code</ButtonText>
				</Pressable>
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
});

export default memo(ForgotPassword);
