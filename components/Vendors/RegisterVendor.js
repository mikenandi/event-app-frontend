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
} from "../Typography";
import color from "../colors";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {hideRegisterVendor} from "../../Store/VendorStore/modalSlice";

function RegisterVendor(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(hideRegisterVendor());
	};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleBack}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>Register your service.</HeadingS>
				</View>
				<View style={styles.container}>
					{/* form inputs. */}
					<View style={styles.formContainer}>
						{/* input for service */}
						<View>
							<Caption style={styles.label}>service</Caption>
							<TextInput placeholder='price' style={styles.textinput} />
						</View>
						<View>
							<Caption style={styles.label}>name</Caption>
							<TextInput placeholder='name' style={styles.textinput} />
						</View>
						<View>
							<Caption style={styles.label}>phone number</Caption>
							<TextInput
								placeholder='phone number'
								style={styles.textinput}
								keyboardType='number-pad'
							/>
						</View>
						{/* input for package price body. */}
						<View>
							<Caption style={styles.label}>first Package price</Caption>
							<TextInput
								placeholder='price'
								style={styles.textinput}
								keyboardType='number-pad'
							/>
						</View>
						{/* Description */}
						<View>
							<Caption style={styles.label}>Details</Caption>
							<TextInput placeholder='description' style={styles.textinput} />
						</View>
						{/* second package price */}
						<View>
							<Caption style={styles.label}>second Package price</Caption>
							<TextInput
								placeholder='price'
								style={styles.textinput}
								keyboardType='number-pad'
							/>
						</View>
						{/* Description */}
						<View>
							<Caption style={styles.label}>Details</Caption>
							<TextInput placeholder='description' style={styles.textinput} />
						</View>
						{/* third package details */}
						<View>
							<Caption style={styles.label}>third Package price</Caption>
							<TextInput
								placeholder='price'
								style={styles.textinput}
								keyboardType='number-pad'
							/>
						</View>
						{/* Description */}
						<View>
							<Caption style={styles.label}>Details</Caption>
							<TextInput placeholder='description' style={styles.textinput} />
						</View>
					</View>

					{/* done actions. */}
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<ButtonText style={styles.buttonText}>Done</ButtonText>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
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
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: "white",
	},
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
		textTransform: "capitalize",
	},
});

export default React.memo(RegisterVendor);
