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

function ForgotPassword(props) {
	const handleSignup = () => {
		props.navigation.navigate("Signup");
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={color.lightgray} />
			<View>
				<HeadingM>Forgot password</HeadingM>

				<Caption>username or email</Caption>
				<TextInput
					placeholder='email'
					style={styles.inputText}
					textContentType='emailAddress'
				/>

				<ButtonText style={styles.loginButton}>reset</ButtonText>
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
