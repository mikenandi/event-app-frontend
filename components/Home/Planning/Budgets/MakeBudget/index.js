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
} from "../../../../Typography";
import color from "../../../../colors";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
	hideNewBudget,
	hideNewNote,
} from "../../../../../Store/homeStore/modalSlice";
import {useSelector} from "react-redux";
import FoodBudget from "./FoodBudget";
import MarketingBudget from "./MarketingBudget";
import McBudgets from "./McBudgets";
import PhotographyBudget from "./PhotographyBudget";
import TransportationBudget from "./TransportationBudget";
import VenueBudget from "./VenueBudget";
import DrinksBudget from "./DrinksBudget";
import DecorationBudget from "./DecorationBudget";

function NewBudget(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const budgetFor = useSelector((state) => {
		return state.showModal.budgetControl;
	});

	const handleBack = () => {
		dispatch(hideNewBudget());
	};

	return (
		<ScrollView>
			<StatusBar backgroundColor='white' />
			<View style={styles.screen}>
				<View style={styles.topBar}>
					<TouchableOpacity activeOpcaity={0.8} onPress={handleBack}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</TouchableOpacity>
					<HeadingS style={styles.titleText}>{budgetFor} budget</HeadingS>
				</View>

				{budgetFor === "food" && <FoodBudget />}
				{budgetFor === "transportation" && <TransportationBudget />}
				{budgetFor === "venue" && <VenueBudget />}
				{budgetFor === "decorations" && <DecorationBudget />}
				{budgetFor === "mc" && <McBudgets />}
				{budgetFor === "drinks" && <DrinksBudget />}
				{budgetFor === "marketing" && <MarketingBudget />}
				{budgetFor === "photography" && <PhotographyBudget />}
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
		textTransform: "capitalize",
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

export default React.memo(NewBudget);
