import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {ButtonText, HeadingS, Body} from "../../../Typography";
import {hideAmenity} from "../../../Store/home-store/modalSlice";
import {clearFloor} from "../../../Store/home-store/roomSlice";
import ElectricityAmenity from "./amenity-types/electricity-amenity";
import WaterAmenity from "./amenity-types/water-amenity";
import AcAmenity from "./amenity-types/ac-amenity";
import FanAmenity from "./amenity-types/fan-amenity";
import PoolAmenity from "./amenity-types/pool-amenity";
import ParkingAmenity from "./amenity-types/parking-amenity";
import {clearAmenities} from "../../../Store/home-store/amenitySlice";

function Amenity(props) {
	const dispatch = useDispatch();

	const handleHideAmenity = () => {
		dispatch(hideAmenity());
		dispatch(clearAmenities());
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
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default memo(Amenity);
