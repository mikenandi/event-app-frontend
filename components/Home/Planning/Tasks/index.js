import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	StatusBar,
	Modal,
	FlatList,
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
import axios from "axios";
import {getTaskData} from "../../../../Store/homeStore/eventSlice";

function Tasks(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {
		dispatch(hideTasks());
	};

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});

	const taskData = useSelector((state) => {
		return state.event.taskData;
	});

	const visible = useSelector((state) => {
		return state.showModal.createTaskVisible;
	});

	React.useEffect(() => {
		(async () => {
			try {
				let response = await axios({
					method: "GET",
					url: "http://evento-tz-backend.herokuapp.com/api/v1/task/tasks",
					params: {
						eventId: eventId,
					},
				});

				let responseProvided = response.data.data;

				dispatch(getTaskData(responseProvided));

				return;
			} catch (error) {
				console.log(error.response.data);
			}
		})();
	}, [visible]);

	const handleShowCreateTask = () => {
		dispatch(showCreateTask());
	};

	// item to render for the flatlist.
	const renderItem = ({item}) => {
		return (
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
					<Body style={styles.taskTitleText}>{item.title}</Body>

					<View>
						<Body style={styles.descriptionText}>{item.description}</Body>
						<View style={styles.assignedToContainer}>
							<Ionicons
								name='ios-return-down-forward-outline'
								size={28}
								color={color.primary}
							/>
							<BodyS style={styles.assigneeText}>{item.assigned_to}</BodyS>
						</View>
					</View>

					<View style={styles.captionContainer}>
						<Caption style={styles.ovalShape}>pending</Caption>
						<Caption style={styles.ovalShape}>{item.deadline}</Caption>
					</View>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			{/* top bar */}

			<View style={styles.topBar}>
				<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
					<Ionicons name='arrow-back' size={24} color='black' />
				</TouchableOpacity>
				<HeadingS style={styles.titleText}>Tasks</HeadingS>
			</View>

			<View style={styles.container}>
				<FlatList
					data={taskData}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					contentContainerStyle={styles.flatlistContainer}
				/>
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
		marginTop: 20,
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
	flatlistContainer: {
		paddingBottom: 80,
	},
});

export default React.memo(Tasks);
