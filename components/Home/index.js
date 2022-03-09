import React, {useState} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import List from "./List";
import DATA from "../data";

export default function Listings() {
	const renderItem = ({item}) => {
		return <List price={item.price} tenantName={item.tenantName} />;
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				removeClippedSubviews={true}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.contentContainer}
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
