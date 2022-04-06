import React, {useState} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import List from "./Property";
import DATA from "../data";
import {StatusBar} from "react-native";
import color from "../colors";
import {HeadingM} from "../Typography";

export default function Listings() {
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

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor={color.lightgray} />
			<FlatList
				data={DATA}
				renderItem={renderItem}
				removeClippedSubviews={true}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={true}
			/>
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
