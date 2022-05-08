// --MODULE IMPORTS.
import React, {useState, useEffect} from "react";
import {View, FlatList, Modal, StyleSheet} from "react-native";
import List from "./Property";
import DATA from "../data";
import {StatusBar} from "react-native";
import color from "../colors";
import {HeadingM} from "../Typography";
import {useSelector, useDispatch} from "react-redux";
import Details from "./Property/details";
import {saveToken} from "../Store/auth-store/userSlice";
import * as SecureStore from "expo-secure-store";

export default function Listings() {
	// --initiating dispatch
	const dispatch = useDispatch();

	// --getting bearer token and save it up to store.
	useEffect(() => {
		// --getting token from secure store.
		SecureStore.getItemAsync("authToken")
			.then((response) => {
				// --saving up the auth token.
				dispatch(saveToken(response));
			})
			.catch((error) => {
				// console.log(error.message);
			});
	}, []);

	// --Render item for tenant.
	const renderItem = ({item}) => {
		return (
			<List
				price={item.price}
				id={item.id}
				warning={item.warning}
				tenantName={item.tenantName}
				type={item.type}
			/>
		);
	};

	// --variable that will make property details visible.
	const visible = useSelector((state) => {
		return state.showModalHome.detailVisible;
	});

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />

			{/* --Flatlist for maping out data and making them scrollable. */}
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={true}
			/>

			{/* --A modal to show the details of the property */}
			<Modal transparent={false} animationType='none' visible={visible}>
				<Details />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	contentContainer: {
		width: "100%",
	},
});
