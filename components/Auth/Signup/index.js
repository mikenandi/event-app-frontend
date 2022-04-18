import React, {memo} from "react";
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
import {FontAwesome5} from "@expo/vector-icons";

function Signup(props) {
	const handleSignup = () => {
		props.navigation.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={color.lightgray} />
			<ScrollView
				contentContainerStyle={styles.contentContainerStyle}
				showsVerticalScrollIndicator={false}>
				<View>
					<HeadingM>Sign up</HeadingM>

					<Caption>Phone</Caption>
					<TextInput
						placeholder='phone'
						style={styles.inputText}
						textContentType='emailAddress'
					/>
					<Caption>Name</Caption>
					<TextInput
						placeholder='Name'
						style={styles.inputText}
						textContentType='emailAddress'
					/>
					<Caption>username</Caption>
					<TextInput
						placeholder='username'
						style={styles.inputText}
						textContentType='emailAddress'
					/>

					<Caption>password</Caption>
					<TextInput
						placeholder='password'
						style={styles.inputText}
						secureTextEntry={true}
						passwordRules='minlength: 8;'
						textContentType='password'
					/>

					<ButtonText style={styles.loginButton}>sign up</ButtonText>
					<View style={styles.questionContainer}>
						<BodyS style={styles.question}>Have an account?</BodyS>
						<Pressable style={styles.signupContainer} onPress={handleSignup}>
							<Body style={styles.singupText}>Sign in</Body>
						</Pressable>
					</View>
				</View>
			</ScrollView>
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
	contentContainerStyle: {
		marginTop: 32,
	},
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
});

export default memo(Signup);
