import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {ButtonText, HeadingS, Body} from "../../../Typography";
import {hideAmenity} from "../../../Store/homePageStore/modalSlice";
import {clearFloor} from "../../../Store/homePageStore/propertyTypesSlice";
import ElectricityAmenity from "./amenity-types/electricity-amenity";
import WaterAmenity from "./amenity-types/water-amenity";
import AcAmenity from "./amenity-types/ac-amenity";
import FanAmenity from "./amenity-types/fan-amenity";
import PoolAmenity from "./amenity-types/pool-amenity";
import ParkingAmenity from "./amenity-types/parking-amenity";

function Amenity(props) {
	const dispatch = useDispatch();

	const handleHideAmenity = () => {
		dispatch(hideAmenity());
		dispatch(clearFloor());
	};

	const handleNextStep = () => {};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleHideAmenity}
					style={styles.backArrow}
				/>
				<TouchableOpacity activeOpacity={0.9} onPress={handleNextStep}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					What type of what amenities does your property have?
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.rowContainer}>
					<WaterAmenity />
					<ElectricityAmenity />
				</View>
				<View style={styles.rowContainer}>
					<AcAmenity />
					<FanAmenity />
				</View>
				<View style={styles.rowContainer}>
					<PoolAmenity />
					<ParkingAmenity />
				</View>
			</View>
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
	titleText: {
		color: "white",
		fontWeight: "bold",
	},
	titleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: color.primary,
		backgroundColor: color.primary,
		padding: 10,
	},
	nextText: {
		backgroundColor: "white",
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: color.dimblack,
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
	bottomContainer: {
		backgroundColor: "white",
		height: "100%",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 20,
		padding: 10,
	},
	spaceSpecificText: {
		marginVertical: 5,
		fontWeight: "bold",
	},
	spaceSpecificContainer: {
		marginHorizontal: 45,
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	amenityContainer: {
		flex: 1,
		borderWidth: 1,
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 5,
	},
});

export default memo(Amenity);
