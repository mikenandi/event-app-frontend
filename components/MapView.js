import * as React from "react";
import MapView, {Callout, Marker, Circle} from "react-native-maps";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import color from "./colors";

export default function App() {
	const [pin, setPin] = React.useState({
		latitude: -6.786481,
		longitude: 39.221757,
	});

	return (
		<View style={styles.container}>
			<MapView
				initialRegion={{
					latitude: -6.786481,
					longitude: 39.221757,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				style={styles.map}
				provider='google'
				mapType='standard'
				showsCompass={false}
				rotateEnabled={false}>
				<Marker
					coordinate={pin}
					pinColor={color.primary}
					draggable={true}
					onDragStart={(e) => {
						console.log("On Drag start", e.nativeEvent.coordinate);
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude,
						});
					}}
					opacity={0.8}>
					<Callout style={{borderRadius: 5}}>
						<Text>i am here</Text>
					</Callout>
				</Marker>
				<Circle center={pin} radius={1000} />
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.lightgray,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});

// import React, {useState, useEffect} from "react";
// import {Platform, Text, View, StyleSheet} from "react-native";
// import Constants from "expo-constants";
// import * as Location from "expo-location";

// export default function App() {
// 	const [location, setLocation] = useState(null);
// 	const [errorMsg, setErrorMsg] = useState(null);

// 	useEffect(() => {
// 		(async () => {
// 			if (Platform.OS === "android" && !Constants.isDevice) {
// 				setErrorMsg(
// 					"Oops, this will not work on Snack in an Android emulator. Try it on your device!",
// 				);
// 				return;
// 			}
// 			let {status} = await Location.requestForegroundPermissionsAsync();
// 			if (status !== "granted") {
// 				setErrorMsg("Permission to access location was denied");
// 				return;
// 			}

// 			let location = await Location.getCurrentPositionAsync({});
// 			setLocation(location);
// 		})();
// 	}, []);

// 	let text = "Waiting..";
// 	if (errorMsg) {
// 		text = errorMsg;
// 	} else if (location) {
// 		console.log(location);
// 		text = JSON.stringify(location);
// 	}

// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.paragraph}>{text}</Text>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		padding: 20,
// 	},
// 	paragraph: {
// 		fontSize: 18,
// 		textAlign: "center",
// 	},
// });
