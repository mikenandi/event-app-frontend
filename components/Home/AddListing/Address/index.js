import React, {useState, memo, useEffect} from "react";
import MapView, {Callout, Marker, Circle} from "react-native-maps";
import {StyleSheet, Text, View, Dimensions, Modal} from "react-native";
import color from "../../../colors";
import axios from "axios";
import {getRegionFromIp} from "../../../Store/home-store/locationSlice";
import {useDispatch, useSelector} from "react-redux";
import Search from "./search";
import TopBar from "./top-bar";
import LocationOptions from "./location-options";
import {movePin} from "../../../Store/home-store/locationSlice";
import {Ionicons} from "@expo/vector-icons";
import {FontAwesome} from "@expo/vector-icons";

function ViewMap() {
	const coordinates = useSelector((state) => {
		return state.location.coordinates;
	});

	const visible = useSelector((state) => {
		return state.showModal.locationOptionVisible;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		axios({
			method: "GET",
			url: "https://api.freegeoip.app/json/?apikey=99a22ff0-9d53-11ec-aea3-63511395cb14",
		})
			.then((res) => {
				dispatch(getRegionFromIp(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<View style={styles.container}>
			<MapView
				initialRegion={{
					latitude: coordinates.latitude,
					longitude: coordinates.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				style={styles.map}
				provider='google'
				mapType='satellite'
				showsCompass={false}
				rotateEnabled={false}>
				<Marker
					coordinate={coordinates}
					draggable={true}
					onDragStart={(e) => {}}
					onDragEnd={(e) => {
						data = {
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude,
						};
						dispatch(movePin(data));
					}}
					opacity={0.8}>
					<Callout style={{borderRadius: 5}}>
						<Text
							style={{
								color: color.primary,
								fontWeight: "bold",
								textTransform: "capitalize",
							}}>
							here
						</Text>
					</Callout>
				</Marker>
			</MapView>

			<TopBar />
			{!visible && <Search />}
			{visible && <LocationOptions />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.lightgray,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});

export default memo(ViewMap);
