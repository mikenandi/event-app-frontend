import React, {useState} from "react";
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
import {EvilIcons, Octicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideCreateEvent} from "../../Store/homeStore/modalSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Loader from "../Loader";
import {useSelector} from "react-redux";
import {transformToStringMonth} from "../../Helpers";

function Event(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	// setting up states.
	const [title, setTitle] = React.useState("");
	const [monthOfEvent, setMonthOfEvent] = React.useState("");
	const [dateOfEvent, setDateOfEvent] = React.useState("");
	const [yearOfEvent, setYearOfEvent] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [errorMsg, setErrorMsg] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	// function to hide event.
	const handleHideCreateEvent = () => {
		dispatch(hideCreateEvent());
		return;
	};

	const userId = useSelector((state) => {
		return state.auth.userId;
	});

	const handleTitleInput = (title) => {
		setTitle(title);
		return;
	};

	const handleDateInput = (date) => {
		setDateOfEvent(date);
		return;
	};
	const handleMonthInput = (date) => {
		setMonthOfEvent(date);
		return;
	};
	const handleYearInput = (date) => {
		setYearOfEvent(date);
		return;
	};

	const handleLocationInput = (location) => {
		setLocation(location);
		return;
	};

	const transformDate = (date) => {
		return date.padStart(2, "0");
	};

	const handleCreateEvent = async () => {
		try {
			if (!(title && location && dateOfEvent && monthOfEvent && yearOfEvent)) {
				setErrorMsg("fill all fields.");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			if (Number(dateOfEvent) > 31 || Number(dateOfEvent) < 0) {
				setErrorMsg("invalid date");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			let month;
			if (Number(monthOfEvent) > 12 || Number(monthOfEvent) < 1) {
				setErrorMsg("invalid month");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			} else {
				month = transformToStringMonth(monthOfEvent);
			}

			if (yearOfEvent.length < 4) {
				setErrorMsg("invalid year");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			let date = transformDate(dateOfEvent);

			let formatedDate = date + "-" + month + "-" + yearOfEvent;

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/event/create",
				data: {
					userId: userId,
					title: title,
					dateOfEvent: formatedDate,
					location: location,
				},
			});

			dispatch(hideCreateEvent());

			return;
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			setErrorMsg(error.response.data.message);

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);

			return;
		}
	};

	if (isLoading) return <Loader />;

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					{/* button to cancel action. */}
					<TouchableOpacity activeOpcaity={0.8} onPress={handleHideCreateEvent}>
						<EvilIcons name='close' size={30} color='black' />
					</TouchableOpacity>

					{/* title of the event. */}
					<HeadingS style={styles.titleText}>Event details</HeadingS>
				</View>

				<View style={styles.container}>
					<View style={styles.inputsContainer}>
						{/* input for event title */}
						<View>
							{/* error displays. */}
							{!!errorMsg && (
								<Caption style={styles.errorText}>{errorMsg}</Caption>
							)}

							<Caption style={styles.label}>Event title</Caption>
							<TextInput
								placeholder='event title'
								value={title}
								onChangeText={handleTitleInput}
								style={styles.textinput}
							/>
						</View>

						{/* input for category of event */}
						{false && (
							<View>
								<Caption style={styles.label}>Category of event</Caption>

								<TextInput
									placeholder='category of event'
									style={styles.textinput}
								/>
							</View>
						)}

						{/* input for time when it will be done. */}
						{false && (
							<View>
								<Caption style={styles.label}>time</Caption>
								<TextInput placeholder='time' style={styles.textinput} />
							</View>
						)}

						{/* input for location where event will be done. */}
						<View>
							<Caption style={styles.label}>location to be held</Caption>
							<TextInput
								placeholder='venue'
								value={location}
								onChangeText={handleLocationInput}
								style={styles.textinput}
							/>
						</View>

						{/* input for date which the event will be done. */}
						<View>
							<Caption style={styles.label}>date of event</Caption>
							<View style={styles.dateContainer}>
								<TextInput
									placeholder='DD'
									value={dateOfEvent}
									onChangeText={handleDateInput}
									style={styles.dateInput}
									keyboardType='number-pad'
									maxLength={2}
								/>
								<Octicons name='dash' size={24} color={color.grey} />
								<TextInput
									placeholder='MM'
									value={monthOfEvent}
									onChangeText={handleMonthInput}
									style={styles.dateInput}
									keyboardType='number-pad'
									maxLength={2}
								/>
								<Octicons name='dash' size={24} color={color.grey} />
								<TextInput
									placeholder='YY'
									value={yearOfEvent}
									onChangeText={handleYearInput}
									style={styles.dateInput}
									keyboardType='number-pad'
									maxLength={4}
								/>
							</View>
						</View>
					</View>

					{/* button to complete an action. */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleCreateEvent}
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
	screen: {
		backgroundColor: "white",
		flex: 1,
	},
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: "white",
	},
	textinput: {
		padding: 10,
		margin: 5,
		borderRadius: 10,
		width: 280,
		fontSize: 16,
		backgroundColor: color.lightgray,
	},
	button: {
		backgroundColor: color.primary,
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		width: "90%",
	},
	buttonContainer: {
		alignItems: "center",
		margin: 10,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
	},
	label: {
		marginLeft: 10,
		textTransform: "capitalize",
		marginTop: 10,
		fontWeight: "bold",
	},
	inputsContainer: {
		alignItems: "center",
	},
	errorText: {
		marginLeft: 10,
		textTransform: "capitalize",
		marginTop: 10,
		fontWeight: "bold",
		color: "red",
	},
	dateContainer: {
		flexDirection: "row",
		padding: 10,
		margin: 5,
		borderRadius: 10,
		width: 280,
		backgroundColor: color.lightgray,
		alignItems: "center",
	},
	dateInput: {
		fontSize: 20,
		paddingHorizontal: 10,
	},
});

export default React.memo(Event);
