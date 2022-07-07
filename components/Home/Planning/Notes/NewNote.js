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
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {hideNewNote} from "../../../../Store/homeStore/modalSlice";
import axios, {Axios} from "axios";
import Loader from "../../../Loader";

function NewNote(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	// setting up datates
	const [errorMsg, setErrorMsg] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [subject, setSubject] = React.useState("");
	const [content, setContent] = React.useState("");

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});

	const handleSubjectInput = (subject) => {
		setSubject(subject);
	};

	const handleContentInput = (content) => {
		setContent(content);
	};

	const handleCreateNewNote = async () => {
		try {
			if (!subject || !content) {
				setErrorMsg("fill all fields");

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);

				return;
			}

			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "http://evento-tz-backend.herokuapp.com/api/v1/note/create",
				data: {
					eventId: eventId,
					subject: subject,
					content: content,
				},
			});

			dispatch(hideNewNote());

			return;
		} catch (error) {
			setErrorMsg("");

			setTimeout(() => {
				setErrorMsg("");
			}, 5000);

			setIsLoading(false);

			return;
		}
	};

	const handleBack = () => {
		dispatch(hideNewNote());
	};

	if (isLoading) return <Loader />;

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleBack}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>New notes</HeadingS>
				</View>

				<View style={styles.container}>
					{/* form inputs. */}
					<View style={styles.formContainer}>
						{/* input for notes subject. */}
						<View>
							<Caption style={styles.label}>Subject</Caption>
							<TextInput
								placeholder='subject'
								style={styles.textinput}
								value={subject}
								onChangeText={handleSubjectInput}
							/>
						</View>

						{/* input for notes body. */}
						<View>
							<Caption style={styles.label}>Note</Caption>
							<TextInput
								placeholder='your note of the note'
								style={styles.textinput}
								multiline={true}
								value={content}
								onChangeText={handleContentInput}
							/>
						</View>
					</View>

					{/* done actions. */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleCreateNewNote}
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
});

export default React.memo(NewNote);
