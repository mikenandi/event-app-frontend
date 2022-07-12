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
import {Body, HeadingM, BodyS, HeadingS, ButtonText} from "../../Typography";
import color from "../../colors";
import {EvilIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import BudgetPlan from "./Plans/Budgets";
import TaskPlan from "./Plans/Tasks";
import NotesPlan from "./Plans/Notes";
import RemindersPlan from "./Plans/Reminders";
import CreateInvitationsPlan from "./Plans/CreateInvitations";
import GuestPlan from "./Plans/Guests";
import {hidePlanning} from "../../../Store/homeStore/modalSlice";
import {deactivePlanEventId} from "../../../Store/homeStore/eventSlice";
import {useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Planning(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {
		dispatch(hidePlanning());
		dispatch(deactivePlanEventId());
		return;
	};

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});

	// initiating async values if not created.
	const intiateAsyncValuesForBudget = async () => {
		let allSavedKeys = await AsyncStorage.getAllKeys();
		let available = allSavedKeys.includes(eventId);
		if (!available) {
			let budgetData = {
				numberOfGuestsExpected: "0",
				pricePerPlate: "0",
				drinksPricePerPerson: "0",
				venueCost: "0",
				decorations: "0",
				transportations: "0",
				mc: "0",
				photography: "0",
				marketing: "0",
			};

			let stringStoredValue = JSON.stringify(budgetData);
			await AsyncStorage.setItem(eventId, stringStoredValue);

			return;
		}
		return;
	};

	React.useEffect(async () => {
		intiateAsyncValuesForBudget();
	}, []);

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
						<EvilIcons name='close' size={30} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>Plans</HeadingS>
				</View>

				<View style={styles.container}>
					<GuestPlan eventId={eventId} />
					<TaskPlan eventId={eventId} />
					<BudgetPlan eventId={eventId} />
					{false && <NotesPlan eventId={eventId} />}
					<CreateInvitationsPlan eventId={eventId} />
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
		borderRadius: 10,
		fontSize: 16,
		borderWidth: 1,
		borderColor: color.primary,
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
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: color.primary,
		width: 60,
		height: 60,
		borderRadius: 10,
	},
});

export default React.memo(Planning);
