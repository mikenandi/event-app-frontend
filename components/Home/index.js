// --MODULE IMPORTS.
import React, {useState, useEffect} from "react";
import {
	View,
	FlatList,
	Modal,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import {StatusBar} from "react-native";
import color from "../colors";
import {Body, HeadingM} from "../Typography";
import {useSelector, useDispatch} from "react-redux";
import * as SecureStore from "expo-secure-store";
import Event from "./Event";
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import CreateEvent from "./CreateEvent";
import Planning from "./Planning";
import {showCreateEvent, showPlanning} from "../../Store/homeStore/modalSlice";
import axios from "axios";
import {getEventData} from "../../Store/homeStore/eventSlice";

export default function Listings() {
	// initiating dispatch
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModal.createEventVisible;
	});

	const userId = useSelector((state) => {
		return state.auth.userId;
	});

	const eventData = useSelector((state) => {
		return state.event.eventData;
	});

	// loading events data.
	React.useEffect(() => {
		(async () => {
			try {
				let response = await axios({
					method: "GET",
					url: "http://evento-tz-backend.herokuapp.com/api/v1/event/events",
					params: {
						userId: userId,
					},
				});

				let responseData = response.data.data;

				dispatch(getEventData(responseData));
				return;
			} catch (error) {
				console.log(error.response.data);
				return;
			}
		})();
	}, [visible]);

	const planningVisible = useSelector((state) => {
		return state.showModal.planningVisible;
	});

	const handleShowCreateEvent = () => {
		dispatch(showCreateEvent());
	};

	const handleShowPlanning = () => {
		dispatch(showPlanning());
	};

	const renderItem = ({item}) => {
		return (
			<Event
				id={item.id}
				title={item.title}
				location={item.location}
				date={item.date_of_event.substr(0, 2)}
				month={item.date_of_event.substr(3, 3)}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			{/* title */}
			<Body style={styles.titleText}>my events</Body>

			{/* events flat list */}

			<FlatList
				data={eventData}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				contentContainerStyle={styles.flatlistContainer}
			/>

			{/* floatin action button */}
			<TouchableOpacity
				style={styles.floatingActionButton}
				activeOpacity={0.8}
				onPress={handleShowCreateEvent}>
				<MaterialCommunityIcons name='pen' size={24} color={color.primary} />
				{false && <Body>create event</Body>}
			</TouchableOpacity>

			{/* modal for creating event. */}
			<Modal transparent={false} animationType='fade' visible={visible}>
				<CreateEvent />
			</Modal>

			{/* modal for planning event */}
			<Modal transparent={false} animationType='fade' visible={planningVisible}>
				<Planning />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
	},
	floatingActionButton: {
		position: "absolute",
		bottom: 30,
		right: 30,
		flexDirection: "row",
		backgroundColor: color.lightblue,
		padding: 15,
		borderRadius: 10,
	},
	titleText: {
		color: color.dimblack,
		marginLeft: 10,
		marginVertical: 5,
	},
	flatlistContainer: {
		paddingBottom: 80,
	},
});
