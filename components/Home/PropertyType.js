import React, {memo} from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Modal,
} from "react-native";
import color from "../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
	hidePropertyType,
	showFeatures,
} from "../features/homePageStore/homePageSlice";
import {propertyTypes} from "./propertyTypes";
import {useSelector} from "react-redux";
import Features from "./Features";

function PropertyType(props) {
	const featureVisible = useSelector((state) => {
		return state.homePage.featureVisible;
	});

	const dispatch = useDispatch();

	const handleBackToHomePage = () => {
		dispatch(hidePropertyType());
	};

	const handleShowFeatures = () => {
		dispatch(showFeatures());
	};

	const renderItem = ({item}) => {
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={handleShowFeatures}>
				<View style={styles.typeContainer}>
					<Text style={styles.typeText}>{item.type}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBackToHomePage}
					style={styles.backArrow}
				/>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.questionText}>
						What kind of a property do you have?
					</Text>
				</View>
				<FlatList
					data={propertyTypes}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					contentContainerStyle={styles.spacingContainer}
				/>
			</View>
			<Modal visible={featureVisible} transparent={false}>
				<Features />
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {flex: 1},
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
		fontSize: 30,
		fontWeight: "700",
		color: "white",
	},
	typeContainer: {
		margin: 5,
		borderWidth: 1,
		padding: 10,
		borderColor: color.whitegrey,
		width: "95%",
	},
	typeText: {
		fontSize: 22,
		color: color.dimblack,
		fontWeight: "700",
	},
	bottomContainer: {},
	spacingContainer: {
		paddingBottom: 80,
		justifyContent: "center",
		paddingTop: 15,
		paddingHorizontal: 10,
	},
	questionContainer: {
		borderBottomWidth: 2,
		borderBottomColor: color.primary,
		backgroundColor: color.primary,
		padding: 10,
	},
});

export default memo(PropertyType);
