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

function Planning(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {
		dispatch(hidePlanning());
	};

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
					<GuestPlan />
					<TaskPlan />
					<BudgetPlan />
					<NotesPlan />
					<CreateInvitationsPlan />
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
