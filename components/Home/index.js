import React, {useState} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import List from "./List2";
import DATA from "../data";
import {current} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {setScrollDirection} from "../features/homePageStore/homePageSlice";

export default function Listings() {
	const [offset, setOffset] = useState(0);

	const dispatch = useDispatch();

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
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
