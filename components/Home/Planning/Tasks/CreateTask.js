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
} from "../../../Typography";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
	hideCreateEvent,
	hideCreateTask,
} from "../../../../Store/homeStore/modalSlice";
import {useSelector} from "react-redux";
import Loader from "../../../Loader";
import axios from "axios";

function CreateTask(props) {
	// initializing dispatch
	const dispatch = useDispatch();
	//setting up states.
	const [loading, setIsLoading] = React.useState(false);
	const [errorMsg, setErrorMsg] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [assignedTo, setAssignedTo] = React.useState("me");
	const [deadline, setDeadline] = React.useState("");

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});

	const handleTitleInput = (title) => {
		setTitle(title);
	};

	const handleDescriptionInput = (desc) => {
		setDescription(desc);
	};

	const handleAssignedToInput = (assignedTo) => {
		setAssignedTo(assignedTo);
	};

	const handleDeadlineInput = (deadline) => {
		setDeadline(deadline);
	};

	const handleCreateTask = async () => {
		try {
			if (!title || !description || !assignedTo || !deadline) {
				setErrorMsg("fill all fields");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/task/create",
				data: {
					eventId: eventId,
					title: title,
					description: description,
					deadline: deadline,
					assignedTo: assignedTo,
				},
			});

			dispatch(hideCreateTask());
			return;
		} catch (error) {
			setIsLoading(false);

			setErrorMsg("error");

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);

			return;
		}
	};

	const handleBack = () => {
		dispatch(hideCreateTask());
	};

	if (loading) return <Loader />;

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleBack}>
						<Ionicons name='arrow-back' size={24} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>Create Task</HeadingS>
				</View>

				<View style={styles.container}>
					{/* form inputs. */}
					<View style={styles.formContainer}>
						{/* input for name of the guest. */}
						<View>
							{!!errorMsg && (
								<Caption style={styles.errorText}>{errorMsg}</Caption>
							)}
							<Caption style={styles.label}>Title of task</Caption>
							<TextInput
								placeholder='title of task'
								style={styles.textinput}
								value={title}
								onChangeText={handleTitleInput}
							/>
						</View>

						{/*  input for email/ contacts of the guest. */}
						<View>
							<Caption style={styles.label}>Description</Caption>
							<TextInput
								placeholder='description of task'
								style={styles.textinput}
								value={description}
								onChangeText={handleDescriptionInput}
								multiline
							/>
						</View>

						{/* assigned to  */}
						<View>
							<Caption style={styles.label}>Assinged to</Caption>
							<TextInput
								placeholder='Assigned to'
								style={styles.textinput}
								value={assignedTo}
								onChangeText={handleAssignedToInput}
							/>
						</View>

						{/*  input for email/ contacts of the guest. */}
						<View>
							<Caption style={styles.label}>Deadline</Caption>
							<TextInput
								placeholder='Deadline'
								style={styles.textinput}
								value={deadline}
								onChangeText={handleDeadlineInput}
							/>
						</View>
					</View>

					{/* done actions. */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleCreateTask}
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
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
	},
	label: {
		fontWeight: "bold",
		marginLeft: 10,
		marginTop: 10,
	},
	formContainer: {
		alignItems: "center",
	},
	errorText: {
		color: "red",
		fontWeight: "bold",
		marginLeft: 10,
		textTransform: "capitalize",
	},
});

export default React.memo(CreateTask);
