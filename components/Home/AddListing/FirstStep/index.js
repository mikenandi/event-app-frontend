import React, {memo} from "react";
import {View, StyleSheet, Modal} from "react-native";
import color from "../../../colors";
import {Entypo} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hidePropertyType} from "../../../Store/home-store/modalSlice";
import {useSelector} from "react-redux";
import SecondStep from "../SecondStep";
import {HeadingS} from "../../../Typography";
import TypeApartment from "./Type/TypeApartment";
import TypeHouse from "./Type/TypeHouse";
import TypeRoom from "./Type/TypeRoom";

function PropertyType(props) {
	const featureVisible = useSelector((state) => {
		return state.showModal.secondStepVisible;
	});

	const dispatch = useDispatch();

	const handleBackToHomePage = () => {
		dispatch(hidePropertyType());
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Entypo
					name='cross'
					size={30}
					onPress={handleBackToHomePage}
					style={styles.backArrow}
				/>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.titleContainer}>
					<HeadingS style={styles.titleText}>
						What kind of a property do you have?
					</HeadingS>
				</View>

				<View style={styles.typesContainer}>
					<TypeApartment />
					<TypeHouse />
					<TypeRoom />
				</View>
			</View>
			<Modal visible={featureVisible} transparent={false} animationType='fade'>
				<SecondStep />
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {flex: 1, backgroundColor: color.primary},
	topContainer: {
		backgroundColor: color.primary,
		paddingHorizontal: 8,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	backArrow: {
		color: "white",
	},
	titleText: {
		color: "white",
		textTransform: "lowercase",
		fontWeight: "bold",
	},
	titleContainer: {
		backgroundColor: color.primary,
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	typesContainer: {
		backgroundColor: "white",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		height: "100%",
		paddingTop: 30,
		paddingLeft: 20,
	},
});

export default memo(PropertyType);
