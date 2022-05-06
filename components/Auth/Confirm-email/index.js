import React, {memo, useState} from "react";
import {View, StyleSheet, StatusBar, TextInput, Pressable} from "react-native";
import {Body, ButtonText, HeadingM, Caption} from "../../Typography";
import color from "../../colors";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {useSelector} from "react-redux";
import {deletingToken} from "../../Store/auth-store/userSlice";

function ConfirmCode(props) {
	// --Error message store value.
	const [code_error, set_code_error] = useState("");

	// --code store value
	const [code, set_code] = useState("");

	// --resend status text
	const [resend_success, set_resend_success] = useState("");
	const [resend_failed, set_resend_failed] = useState("");

	// --getting token from redux store.
	const token = useSelector((state) => {
		return state.user.token;
	});

	// --getting email from redux store.
	const email = useSelector((state) => {
		return state.user.email;
	});

	// --saving input text on usestate.
	const handleInput = (code) => {
		set_code(code);
	};

	// --function that will handle activites after pressing pressing confirm button.
	const handleConfirm = () => {
		if (code.length === 5) {
			// --sending HTTP request for code confirmation
			axios({
				method: "POST",
				url: "http://gudsurvey.herokuapp.com/api/v1/confirm-email-signup",
				data: {
					email: email,
					code: code,
				},
			})
				.then((response) => {
					// --Response was successfull
					if (response.data.success) {
						// --saving data in secure store.
						SecureStore.setItemAsync("authToken", token)
							.then((response) => {})
							.catch((error) => {});

						// --deleting token in redux.
						dispatch(deletingToken());
					}
				})
				.catch((error) => {
					if (error.response) {
						// --for when message is code is wrong or expired.
						if (
							error.response.data.message ===
							"code entered is wrong or expired. "
						) {
							set_code_error("code entered is wrong or expired. ");
						}

						// --When the token was not found in DB.
						if (
							error.response.data.message === "No code was created before. "
						) {
							set_code_error("code has been used. ");
						}
					}
				});
		}

		// --Error message when user code with shorter length.
		if (code.length < 5) {
			set_code_error("code should have five numbers.");
		}
	};

	const handleResend = () => {
		axios({
			method: "POST",
			url: "http://gudsurvey.herokuapp.com/api/v1/resend-verification-code",
			data: {
				email: email,
			},
		})
			.then((response) => {
				// --when it was successfull.
				if (response.data.success) {
					setTimeout(() => {
						set_resend_success("success");
					}, 9000);
					set_resend_success("");
				}
			})
			.catch((error) => {
				// --When there is an error on resending email.
				if (error.response) {
					setTimeout(() => {
						set_resend_failed("resend failed.");
					}, 9000);
					set_resend_failed("");
				}
			});
	};
	const handleSignup = () => {
		props.navigation.navigate("Signup");
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='white' />
			<View>
				<HeadingM>Verification code</HeadingM>

				{/* --place where all errors concerning code will be shown. */}
				{!!code_error && (
					<Caption style={styles.errorMessage}>{code_error}</Caption>
				)}

				{/* --text input which will be intaking the five digit code. */}
				<TextInput
					placeholder='code'
					style={styles.inputText}
					textContentType='emailAddress'
					keyboardType='number-pad'
					maxLength={5}
					value={code}
					onChangeText={handleInput}
				/>

				{/* --Button for verifying code and save token to secure store. */}
				<Pressable onPress={handleConfirm}>
					<ButtonText style={styles.loginButton}>confirm</ButtonText>
				</Pressable>

				{/* --Button for resending the confirmation code. */}
				<Pressable onPress={handleResend}>
					<Body style={styles.resendText}>Resend code</Body>
				</Pressable>
				{!!resend_failed && (
					<Caption style={styles.resendfailed}>{resend_failed}</Caption>
				)}
				{!!resend_success && (
					<Caption style={styles.resendsuccess}>{resend_success}</Caption>
				)}
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
		fontSize: 24,
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
	resendText: {
		marginTop: 10,
	},
	errorMessage: {
		color: "red",
	},
	resendfailed: {
		color: "red",
	},
	resendsuccess: {
		color: "green",
	},
});

export default memo(ConfirmCode);
