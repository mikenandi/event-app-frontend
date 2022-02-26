import React, {memo, useState} from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Pressable,
	TextInput,
	Modal,
} from "react-native";
import color from "../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideFeatures} from "../features/homePageStore/homePageSlice";
import Bathrooms from "./Bathrooms";
import Bedrooms from "./BedRooms";
import MasterBedroom from "./MasterBedroom";
import Map from "../MapView";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

function Features(props) {
	const [showMap, setShowMap] = useState(false);
	const dispatch = useDispatch();

	const handleHideFeatures = () => {
		dispatch(hideFeatures());
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleHideFeatures}
					style={styles.backArrow}
				/>
				<Text style={styles.nextText}>Next</Text>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Tell us more about the space you have?
					</Text>
				</View>
				{/* <Bedrooms />
				<Bathrooms />

				<View>
					<MasterBedroom />
				</View> */}
				<View>
					<Text
						style={styles.showMapButton}
						onPress={() => setShowMap(!showMap)}>
						Pick from map
					</Text>
				</View>
				<Modal transparent={false} visible={showMap} animationType='fade'>
					<Map />
				</Modal>
			</View>
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
	titleText: {
		fontSize: 30,
		fontWeight: "700",
		color: "white",
	},
	titleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: color.primary,
		backgroundColor: color.primary,
		padding: 10,
	},
	nextText: {
		backgroundColor: "white",
		paddingVertical: 5,
		paddingHorizontal: 10,
		color: color.dimblack,
		fontSize: 20,
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
	showMapButton: {
		margin: 20,
		fontSize: 18,
		width: 140,
		height: 40,
		padding: 5,
		textAlign: "center",
		backgroundColor: color.secondary,
	},
});

export default memo(Features);
