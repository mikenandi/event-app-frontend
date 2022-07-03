import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	StatusBar,
	Modal,
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
import {
	AntDesign,
	FontAwesome5,
	FontAwesome,
	Ionicons,
	Entypo,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
	hideTasks,
	showCreateTask,
} from "../../../../Store/homeStore/modalSlice";
import CreateTask from "./CreateTask";
import {useSelector} from "react-redux";

function Tasks(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {
		dispatch(hideTasks());
	};

	const handleShowCreateTask = () => {
		dispatch(showCreateTask());
	};

	const visible = useSelector((state) => {
		return state.showModal.createTaskVisible;
	});

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			{/* top bar */}

			<View style={styles.topBar}>
				<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
					<AntDesign name='arrowleft' size={24} color={color.dimblack} />
				</TouchableOpacity>
				<HeadingS style={styles.titleText}>Tasks</HeadingS>
			</View>

			<View style={styles.container}>
				<View style={styles.taskContainer}>
					{/* icon for the task. */}
					{true && (
						<View style={styles.boxcontainer}>
							<MaterialCommunityIcons
								name='timeline-text'
								size={22}
								color={color.primary}
							/>
						</View>
					)}

					{/* task details. */}
					<View style={styles.taskDetailsContainer}>
						<Body style={styles.taskTitleText}>title of task</Body>

						<View>
							<Body style={styles.descriptionText}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati libero tempore adipisci voluptatem, nihil rerum cumque
								debitis expedita voluptatum cupiditate? Illo, nisi asperiores
								eius aspernatur porro error beatae eveniet! Nostrum.
							</Body>
							<View style={styles.assignedToContainer}>
								<Ionicons
									name='ios-return-down-forward-outline'
									size={28}
									color={color.primary}
								/>
								<BodyS style={styles.assigneeText}>Myself</BodyS>
							</View>
						</View>

						<View style={styles.captionContainer}>
							<Caption style={styles.ovalShape}>pending</Caption>
							<Caption style={styles.ovalShape}>11-06-2022</Caption>
						</View>
					</View>
				</View>
			</View>

			{/* floationg action button */}
			<TouchableOpacity
				style={styles.floatingActionButton}
				activeOpacity={0.8}
				onPress={handleShowCreateTask}>
				<FontAwesome name='pencil' size={24} color='black' />
			</TouchableOpacity>

			{/* modal for creating new task. */}
			<Modal animationType='fade' transparent={false} visible={visible}>
				<CreateTask />
			</Modal>
		</View>
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
	button: {
		backgroundColor: "white",
		padding: 5,
		borderRadius: 5,
		alignItems: "center",
		margin: 5,
		flexDirection: "row",
		marginLeft: 15,
	},
	buttonText: {
		color: color.dimblack,
		marginLeft: 10,
	},
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
	},
	boxcontainer: {
		borderRadius: 10,
		marginRight: 10,
	},
	captionContainer: {
		flexDirection: "row",
		marginTop: 5,
		width: 280,
		padding: 5,
	},
	descriptionText: {
		color: color.dimblack,
		marginRight: 5,
		marginTop: 10,
	},
	floatingActionButton: {
		width: 50,
		height: 50,
		borderRadius: 10,
		backgroundColor: color.lightblue,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: 20,
		bottom: 40,
	},
	taskContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		marginHorizontal: 10,
		borderRadius: 10,
	},
	assignedtoText: {
		color: color.dimblack,
		marginBottom: 5,
	},
	timerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
	},
	taskTitleText: {
		textTransform: "capitalize",
	},
	taskDetailsContainer: {
		width: "90%",
	},
	ovalShape: {
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 8,
		borderColor: color.grey,
		marginRight: 15,
	},
	assignedToContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 5,
	},
	assigneeText: {
		marginLeft: 10,
		fontWeight: "normal",
	},
});

export default React.memo(Tasks);
