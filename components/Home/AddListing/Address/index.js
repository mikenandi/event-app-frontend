import React, {useState, memo, useEffect} from "react";
import MapView, {Callout, Marker, Circle} from "react-native-maps";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import color from "../../../colors";
import axios from "axios";
import {getRegionFromIp} from "../../../Store/home-store/locationSlice";
import {useDispatch, useSelector} from "react-redux";
import Search from "./search";
import TopBar from "./top-bar";

function ViewMap() {
	const region = useSelector((state) => {
		return state.location.initialRegion;
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

	const [pin, setPin] = useState({
		latitude: region.latitude,
		longitude: region.longitude,
	});

	return (
		<View style={styles.container}>
			<MapView
				initialRegion={{
					latitude: region.latitude,
					longitude: region.longitude,
					latitudeDelta: 0.2,
					longitudeDelta: 0.0421,
				}}
				style={styles.map}
				provider='google'
				mapType='standard'
				showsCompass={false}
				rotateEnabled={false}>
				<Marker
					coordinate={pin}
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
			<Search />
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
