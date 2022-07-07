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
import axios from "axios";
import Loader from "../Loader";

function RegisterVendor(props) {
	// initializing dispatch
	const dispatch = useDispatch();
	const [errorMsg, setErrorMsg] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [bussinessName, setBussinessName] = React.useState("");
	const [service, setService] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [firstPackPrice, setFirstPackPrice] = React.useState("");
	const [firsPackDetails, setFirstPackDetails] = React.useState("");
	const [secondPackPrice, setSecondPackPrice] = React.useState("");
	const [secondPackDetails, setSecondPackDetails] = React.useState("");
	const userId = useSelector((state) => {
		return state.auth.userId;
	});

	const handleBack = () => {
		dispatch(hideRegisterVendor());
	};

	const handleDone = async () => {
		try {
			if (
				!service ||
				!phoneNumber ||
				!firsPackDetails ||
				!firstPackPrice ||
				!secondPackPrice ||
				!secondPackDetails ||
				!bussinessName
			) {
				setErrorMsg("fill all fields");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/vendor/register-service",
				data: {
					userId: userId,
					service: service,
					firstPackagePrice: firstPackPrice,
					firstPackageDescription: firsPackDetails,
					secondPackagePrice: secondPackPrice,
					secondPackageDescription: secondPackDetails,
					phoneNumber: phoneNumber,
					bussinessName: bussinessName,
				},
			});

			dispatch(hideRegisterVendor());

			return;
		} catch (error) {
			setIsLoading(false);

			console.log(error.response.data);

			setErrorMsg("oops error occured.");

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);

			return;
		}
	};

	if (isLoading) return <Loader />;

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
							{!!errorMsg && (
								<Caption style={styles.labelError}>{errorMsg}</Caption>
							)}
							<Caption style={styles.label}>service</Caption>
							<TextInput
								placeholder='service you offer'
								style={styles.textinput}
								value={service}
								onChangeText={(value) => {
									setService(value);
								}}
							/>
						</View>

						{/*  bussinessName */}
						<View>
							<Caption style={styles.label}>bussiness name</Caption>
							<TextInput
								placeholder='bussines name'
								style={styles.textinput}
								value={bussinessName}
								onChangeText={(value) => {
									setBussinessName(value);
								}}
							/>
						</View>

						{/* phone number  */}
						<View>
							<Caption style={styles.label}>phone number</Caption>
							<TextInput
								placeholder='phone number'
								style={styles.textinput}
								keyboardType='number-pad'
								value={phoneNumber}
								onChangeText={(value) => {
									setPhoneNumber(value);
								}}
							/>
						</View>
						{/* input for package price body. */}
						<View>
							<Caption style={styles.label}>first Package price</Caption>
							<TextInput
								placeholder='price'
								style={styles.textinput}
								keyboardType='number-pad'
								value={firstPackPrice}
								onChangeText={(value) => {
									setFirstPackPrice(value);
								}}
							/>
						</View>
						{/* Description */}
						<View>
							<Caption style={styles.label}>Details</Caption>
							<TextInput
								placeholder='description'
								style={styles.textinput}
								value={firsPackDetails}
								onChangeText={(value) => {
									setFirstPackDetails(value);
								}}
							/>
						</View>
						{/* second package price */}
						<View>
							<Caption style={styles.label}>second Package price</Caption>
							<TextInput
								placeholder='price'
								style={styles.textinput}
								keyboardType='number-pad'
								value={secondPackPrice}
								onChangeText={(value) => {
									setSecondPackPrice(value);
								}}
							/>
						</View>
						{/* Description */}
						<View>
							<Caption style={styles.label}>Details</Caption>
							<TextInput
								placeholder='description'
								style={styles.textinput}
								value={secondPackDetails}
								onChangeText={(value) => {
									setSecondPackDetails(value);
								}}
							/>
						</View>
						{/*  bussinessName */}
						{false && (
							<View>
								<Caption style={styles.label}>Details</Caption>
								<TextInput
									placeholder='description'
									style={styles.textinput}
									value={bussinessName}
									onChangeText={(value) => {
										setBussinessName(value);
									}}
								/>
							</View>
						)}
					</View>

					{/* done actions. */}
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={handleDone}
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
	labelError: {
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
		color: "red",
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
