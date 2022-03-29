import React, {memo, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import color from "../../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {ButtonText, HeadingS, Body, BodyS} from "../../../Typography";
import axios from "axios";
import {
	clearLocationData,
	saveLocationData,
} from "../../../Store/home-store/locationSlice";
import {hideAddressData} from "../../../Store/home-store/modalSlice";

function AddressData(props) {
	const location = useSelector((state) => {
		return state.location.location_data;
	});

	const coordinates = useSelector((state) => {
		return state.location.coordinates;
	});

	useEffect(() => {
		axios({
			method: "GET",
			url: "https://nominatim.openstreetmap.org/reverse",
			params: {
				format: "json",
				lat: coordinates.latitude,
				lon: coordinates.longitude,
				zoom: 18,
				addressdetails: 1,
			},
		})
			.then((res) => {
				const data = res.data.address;
				dispatch(saveLocationData(data));
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(clearLocationData());
		dispatch(hideAddressData());
	};

	const handleNextStep = () => {};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBack}
					style={styles.backArrow}
				/>
				<TouchableOpacity activeOpacity={0.9} onPress={handleNextStep}>
					<ButtonText style={styles.nextText}>Next</ButtonText>
				</TouchableOpacity>
			</View>
			<View style={styles.titleContainer}>
				<HeadingS style={styles.titleText}>
					Here is what we've got from your location pin
				</HeadingS>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.fetchedContainer}>
					<View style={styles.labelDataContainer}>
						<Ionicons name='pin-outline' size={30} color={color.lightblue} />
						<View>
							<BodyS style={styles.label}>country</BodyS>
							<HeadingS>{location.country}</HeadingS>
						</View>
					</View>
					<View style={styles.labelDataContainer}>
						<Ionicons name='pin-outline' size={30} color={color.lightblue} />
						<View>
							<BodyS style={styles.label}>city</BodyS>
							<HeadingS>{location.city}</HeadingS>
						</View>
					</View>

					<View style={styles.labelDataContainer}>
						<Ionicons name='pin-outline' size={30} color={color.lightblue} />
						<View>
							<BodyS style={styles.label}>district</BodyS>
							<HeadingS>{location.city_district}</HeadingS>
						</View>
					</View>
					<View style={styles.labelDataContainer}>
						<Ionicons name='pin-outline' size={30} color={color.lightblue} />
						<View>
							<BodyS style={styles.label}>ward</BodyS>
							<HeadingS>{location.ward}</HeadingS>
						</View>
					</View>
					<View style={styles.labelDataContainer}>
						<Ionicons name='pin-outline' size={30} color={color.lightblue} />
						<View>
							<BodyS style={styles.label}>House number</BodyS>
							<HeadingS>{location.house_number}</HeadingS>
						</View>
					</View>
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
		color: "white",
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
		color: "black",
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
	label: {
		color: color.dimblack,
		textTransform: "capitalize",
	},
	fetchedContainer: {
		padding: 15,
		borderRadius: 10,
	},
	labelDataContainer: {
		borderBottomWidth: 1,
		borderBottomColor: color.grey,
		padding: 5,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	bottomDetailContainer: {
		padding: 5,
	},
});

export default memo(AddressData);
