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
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
	hideBudgets,
	showNewBudget,
} from "../../../../Store/homeStore/modalSlice";
import {useSelector} from "react-redux";
import NewBudgets from "./MakeBudget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getBudgetData} from "../../../../Store/homeStore/eventSlice";

function Budgets(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = async () => {
		let stringStoredValue = JSON.stringify(budgetData);
		await AsyncStorage.setItem(eventId, stringStoredValue);

		dispatch(hideBudgets());
	};

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});

	const handleNewNote = () => {};

	const visible = useSelector((state) => {
		return state.showModal.newBudgetVisible;
	});

	const handleFoodBudget = () => {
		dispatch(showNewBudget("food"));
	};

	const handleDrinksBudget = () => {
		dispatch(showNewBudget("drinks"));
	};

	const handleDecorationBudget = () => {
		dispatch(showNewBudget("decorations"));
	};

	const handlePhotographBudget = () => {
		dispatch(showNewBudget("photography"));
	};

	const handleVenueBudget = () => {
		dispatch(showNewBudget("venue"));
	};

	const handleMcBudget = () => {
		dispatch(showNewBudget("mc"));
	};

	const handleTransportatioBudget = () => {
		dispatch(showNewBudget("transportation"));
	};
	const handleMarketingBudget = () => {
		dispatch(showNewBudget("marketing"));
	};

	const budgetData = useSelector((state) => {
		return state.event.budgetData;
	});

	React.useEffect(async () => {
		(async () => {
			let availableBudgets = await AsyncStorage.getItem(eventId);
			let object = JSON.parse(availableBudgets);

			dispatch(getBudgetData(object));
			return;
		})();
	}, []);

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			{/* top bar */}

			<View style={styles.topBar}>
				<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
					<AntDesign name='arrowleft' size={24} color={color.dimblack} />
				</TouchableOpacity>
				<HeadingS style={styles.titleText}>Budget</HeadingS>
			</View>

			<View style={styles.container}>
				{/* modal for total budget. */}
				{true && (
					<View style={styles.totalBudgetContainer}>
						<HeadingM>TZS {budgetData.totalBudget}</HeadingM>
						<Body
							style={{
								color: color.grey,
								fontWeight: "bold",
								textTransform: "capitalize",
								marginTop: 5,
							}}>
							total budget
						</Body>
					</View>
				)}

				<ScrollView contentContainerStyle={styles.contentContainer}>
					{/* budget for food */}
					<TouchableOpacity
						style={styles.taskContainer}
						activeOpacity={0.8}
						onPress={handleFoodBudget}>
						{/* icon for the task. */}
						{true && (
							<View style={styles.boxcontainer}>
								<MaterialIcons
									name='sticky-note-2'
									size={28}
									color={color.primary}
								/>
							</View>
						)}

						{/* food budget. */}
						<View style={styles.taskDetailsContainer}>
							<Body style={styles.taskTitleText}>food</Body>

							<View style={styles.budgetValueContainer}>
								<MaterialCommunityIcons
									name='subdirectory-arrow-right'
									size={24}
									color={color.primary}
								/>
								<HeadingS style={styles.descriptionText}>
									TZS{" "}
									{Number(budgetData.numberOfGuestsExpected) *
										Number(budgetData.pricePerPlate)}
								</HeadingS>
							</View>
						</View>
					</TouchableOpacity>

					{/* budget for drinks */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleDrinksBudget}
						style={styles.taskContainer}>
						{/* icon for the task. */}
						{true && (
							<View style={styles.boxcontainer}>
								<MaterialIcons
									name='sticky-note-2'
									size={28}
									color={color.primary}
								/>
							</View>
						)}

						{/* budget budget. */}
						<View style={styles.taskDetailsContainer}>
							<Body style={styles.taskTitleText}>drinks</Body>

							<View style={styles.budgetValueContainer}>
								<MaterialCommunityIcons
									name='subdirectory-arrow-right'
									size={24}
									color={color.primary}
								/>
								<HeadingS style={styles.descriptionText}>
									TZS{" "}
									{Number(budgetData.numberOfGuestsExpected) *
										Number(budgetData.drinksPricePerPerson)}
								</HeadingS>
							</View>
						</View>
					</TouchableOpacity>

					{/* budget for venue */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleVenueBudget}
						style={styles.taskContainer}>
						{/* icon for the task. */}
						{true && (
							<View style={styles.boxcontainer}>
								<MaterialIcons
									name='sticky-note-2'
									size={28}
									color={color.primary}
								/>
							</View>
						)}

						{/* food budget. */}
						<View style={styles.taskDetailsContainer}>
							<Body style={styles.taskTitleText}>venue</Body>

							<View style={styles.budgetValueContainer}>
								<MaterialCommunityIcons
									name='subdirectory-arrow-right'
									size={24}
									color={color.primary}
								/>
								<HeadingS style={styles.descriptionText}>
									TZS {budgetData.venueCost}
								</HeadingS>
							</View>
						</View>
					</TouchableOpacity>

					{/* budget for decorations */}
					{false && (
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={handleDecorationBudget}
							style={styles.taskContainer}>
							{/* icon for the task. */}
							{true && (
								<View style={styles.boxcontainer}>
									<MaterialIcons
										name='sticky-note-2'
										size={28}
										color={color.primary}
									/>
								</View>
							)}

							{/* food budget. */}
							<View style={styles.taskDetailsContainer}>
								<Body style={styles.taskTitleText}>Decorations</Body>

								<View style={styles.budgetValueContainer}>
									<MaterialCommunityIcons
										name='subdirectory-arrow-right'
										size={24}
										color={color.primary}
									/>
									<HeadingS style={styles.descriptionText}>
										TZS {budgetData.decorations}
									</HeadingS>
								</View>
							</View>
						</TouchableOpacity>
					)}

					{/* budget for transportations */}
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={handleTransportatioBudget}
						style={styles.taskContainer}>
						{/* icon for the task. */}
						{true && (
							<View style={styles.boxcontainer}>
								<MaterialIcons
									name='sticky-note-2'
									size={28}
									color={color.primary}
								/>
							</View>
						)}

						{/* food budget. */}
						<View style={styles.taskDetailsContainer}>
							<Body style={styles.taskTitleText}>transportations</Body>

							<View style={styles.budgetValueContainer}>
								<MaterialCommunityIcons
									name='subdirectory-arrow-right'
									size={24}
									color={color.primary}
								/>
								<HeadingS style={styles.descriptionText}>
									TZS {budgetData.transportations}
								</HeadingS>
							</View>
						</View>
					</TouchableOpacity>

					{/* budget for MC */}
					{false && (
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={handleMcBudget}
							style={styles.taskContainer}>
							{/* icon for the task. */}
							{true && (
								<View style={styles.boxcontainer}>
									<MaterialIcons
										name='sticky-note-2'
										size={28}
										color={color.primary}
									/>
								</View>
							)}

							{/* food budget. */}
							<View style={styles.taskDetailsContainer}>
								<Body style={styles.taskTitleText}>MC</Body>

								<View style={styles.budgetValueContainer}>
									<MaterialCommunityIcons
										name='subdirectory-arrow-right'
										size={24}
										color={color.primary}
									/>
									<HeadingS style={styles.descriptionText}>
										TZS {budgetData.mc}
									</HeadingS>
								</View>
							</View>
						</TouchableOpacity>
					)}

					{/* budget for photography */}
					{false && (
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={handlePhotographBudget}
							style={styles.taskContainer}>
							{/* icon for the task. */}
							{true && (
								<View style={styles.boxcontainer}>
									<MaterialIcons
										name='sticky-note-2'
										size={28}
										color={color.primary}
									/>
								</View>
							)}

							{/* food budget. */}
							<View style={styles.taskDetailsContainer}>
								<Body style={styles.taskTitleText}>photography</Body>

								<View style={styles.budgetValueContainer}>
									<MaterialCommunityIcons
										name='subdirectory-arrow-right'
										size={24}
										color={color.primary}
									/>
									<HeadingS style={styles.descriptionText}>
										TZS {budgetData.photography}
									</HeadingS>
								</View>
							</View>
						</TouchableOpacity>
					)}

					{/* budget for marketing */}
					{false && (
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={handleMarketingBudget}
							style={styles.taskContainer}>
							{/* icon for the task. */}
							{true && (
								<View style={styles.boxcontainer}>
									<MaterialIcons
										name='sticky-note-2'
										size={28}
										color={color.primary}
									/>
								</View>
							)}

							{/* food budget. */}
							<View style={styles.taskDetailsContainer}>
								<Body style={styles.taskTitleText}>marketing</Body>

								<View style={styles.budgetValueContainer}>
									<MaterialCommunityIcons
										name='subdirectory-arrow-right'
										size={24}
										color={color.primary}
									/>
									<HeadingS style={styles.descriptionText}>
										TZS {budgetData.marketing}
									</HeadingS>
								</View>
							</View>
						</TouchableOpacity>
					)}
				</ScrollView>
			</View>

			{/* floationg action button */}
			{false && (
				<TouchableOpacity
					style={styles.floatingActionButton}
					activeOpacity={0.8}
					onPress={handleNewNote}>
					<FontAwesome name='pencil' size={24} color='black' />
				</TouchableOpacity>
			)}

			{/* modal for creating new task. */}
			<Modal animationType='fade' transparent={false} visible={visible}>
				<NewBudgets />
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
		marginLeft: 10,
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
		marginHorizontal: 20,
		borderRadius: 10,
		marginTop: 10,
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
		marginTop: 10,
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
	budgetValueContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	totalBudgetContainer: {
		backgroundColor: color.lightgray,
		paddingHorizontal: 10,
		marginHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	contentContainer: {
		paddingBottom: 160,
	},
});

export default React.memo(Budgets);
