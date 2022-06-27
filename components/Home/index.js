// --MODULE IMPORTS.
import React, {useState, useEffect} from "react";
import {View, FlatList, Modal, StyleSheet} from "react-native";
import DATA from "../data";
import {StatusBar} from "react-native";
import color from "../colors";
import {Body, HeadingM} from "../Typography";
import {useSelector, useDispatch} from "react-redux";
import * as SecureStore from "expo-secure-store";

export default function Listings() {
	// --initiating dispatch
	const dispatch = useDispatch();

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			<Body>home page here</Body>
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
