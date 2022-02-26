import React from "react";
import {View, Text, StyleSheet, FlatList, ScrollView} from "react-native";
import Request from "./Request";
import DATA from "../data";

export default function Home() {
	const renderItem = ({item}) => {
		return <Request price={item.price} tenantName={item.tenantName} />;
	};
	return (
		<View style={styles.screen}>
			<View style={styles.requestContainer}>
				<FlatList
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
