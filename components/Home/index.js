import React, {useState} from "react";
import {View, FlatList, Modal, StyleSheet} from "react-native";
import List from "./Property";
import DATA from "../data";
import {StatusBar} from "react-native";
import color from "../colors";
import {HeadingM} from "../Typography";
import {useSelector, useDispatch} from "react-redux";
import Details from "./Property/details";

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

	const visible = useSelector((state) => {
		return state.showModalHome.detailVisible;
	});

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={true}
			/>

			{/* A modal to show the details of the property */}
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
