import React, {memo} from "react";
import {View, StyleSheet, Modal} from "react-native";
import color from "../colors";
import {Entypo} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hidePropertyType} from "../features/homePageStore/homePageSlice";
import {useSelector} from "react-redux";
import Features from "./Features";
import {HeadingS, Body} from "../Typography";
import TypeApartment from "./TypeApartment";
import TypeHouse from "./TypeHouse";
import TypeRoom from "./TypeRoom";

function PropertyType(props) {
	const featureVisible = useSelector((state) => {
		return state.homePage.featureVisible;
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
				<View style={styles.questionContainer}>
					<HeadingS style={styles.questionText}>
						What kind of a property do you have?
					</HeadingS>
				</View>

				<View style={styles.typesContainer}>
					<TypeApartment />
					<TypeHouse />
					<TypeRoom />
				</View>
			</View>
			<Modal visible={featureVisible} transparent={false}>
				<Features />
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
		color: color.dimblack,
	},
	questionText: {
		color: "white",

		textTransform: "lowercase",
	},
	questionContainer: {
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
	},
});

export default memo(PropertyType);
