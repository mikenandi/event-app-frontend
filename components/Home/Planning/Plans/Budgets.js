import React from "react";
import {StyleSheet, TouchableOpacity, View, Modal} from "react-native";
import {Body, HeadingM, BodyS, HeadingS, ButtonText} from "../../../Typography";
import color from "../../../colors";
import {useDispatch} from "react-redux";
import {showBudgets} from "../../../../Store/homeStore/modalSlice";
import {Ionicons} from "@expo/vector-icons";
import Budgets from "../Budgets";
import {useSelector} from "react-redux";

function Budget(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleShowModal = () => {
		dispatch(showBudgets());
	};

	const visible = useSelector((state) => {
		return state.showModal.budgetsVisible;
	});

	return (
		<View>
			{/* tasks Budget */}
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.8}
				onPress={handleShowModal}>
				<View style={styles.boxcontainer}>
					<Ionicons name='wallet' size={30} color='white' />
				</View>
				<HeadingS style={styles.buttonText}>Budget</HeadingS>
			</TouchableOpacity>

			{/* modal for budget */}
			<Modal animationType='fade' visible={visible} transparent={false}>
				<Budgets />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
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
	boxcontainer: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: color.primary,
		width: 60,
		height: 60,
		borderRadius: 10,
	},
});

export default React.memo(Budget);
