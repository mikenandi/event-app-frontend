import React, {memo} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../../colors";
import {Entypo} from "@expo/vector-icons";
import {Body, HeadingS, ButtonText} from "../../../Typography";
import {useDispatch} from "react-redux";
import {hideLocationOption} from "../../../Store/home-store/modalSlice";
import {getGps} from "../../../../Helpers/get-gps-location";
import {getPhoneGpsLocation} from "../../../Store/home-store/locationSlice";

function LocationOptions(props) {
	const dispatch = useDispatch();

	const handleSwitchGps = () => {
		getGps()
			.then((location) => {
				dispatch(getPhoneGpsLocation(location));
			})
			.catch((err) => {
				console.log(err.code, err.message);
			});
		dispatch(hideLocationOption());
	};

	const handleShowMap = () => {
		dispatch(hideLocationOption());
	};

	return (
		<View style={styles.container}>
			<Entypo
				name='location'
				size={80}
				color={color.lightblue}
				style={styles.icon}
			/>
			<View style={styles.explanationContainer}>
				<HeadingS style={styles.questionText}>Where is your house?</HeadingS>
				<Body style={styles.bottomText}>
					Select location of your house so as people interested with your
					property discover location where the property is found.
				</Body>
			</View>
			<View>
				<TouchableOpacity onPress={handleSwitchGps} activeOpacity={0.8}>
					<ButtonText style={styles.topButton}>Am at my property</ButtonText>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleShowMap} activeOpacity={0.8}>
					<ButtonText style={styles.bottomButton}>
						let me choose on map
					</ButtonText>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "absolute",
		backgroundColor: "white",
		width: "100%",
		height: 420,
		bottom: 0,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 10,
		alignItems: "center",
	},
	icon: {
		padding: 20,
		marginVertical: 10,
	},
	questionText: {
		fontWeight: "normal",
	},
	bottomText: {
		color: "gray",
		marginHorizontal: 20,
	},
	explanationContainer: {
		alignItems: "center",
	},
	topButton: {
		width: 240,
		backgroundColor: color.primary,
		padding: 15,
		textAlign: "center",
		borderRadius: 5,
		fontWeight: "bold",
		marginTop: 40,
		color: "white",
	},
	bottomButton: {
		width: 240,
		backgroundColor: color.lightgray,
		padding: 15,
		textAlign: "center",
		fontWeight: "bold",
		borderRadius: 5,
		marginTop: 10,
	},
});

export default memo(LocationOptions);
