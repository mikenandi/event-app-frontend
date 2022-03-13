import React, {memo} from "react";
import {View, Text, StyleSheet, FlatList, ScrollView} from "react-native";
import Request from "./Request";
import DATA from "../../requestData";
import {Body, HeadingS} from "../../Typography";
import color from "../../colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideRequest} from "../../Store/home-store/modalSlice";

function Requests() {
	const renderItem = ({item}) => {
		return <Request price={item.price} tenantName={item.tenantName} />;
	};

	const headerText = () => {
		return <Body>Rental Offers</Body>;
	};

	const dispatch = useDispatch();

	const handleBackHomePage = () => {
		dispatch(hideRequest());
	};
	return (
		<View style={styles.screen}>
			<View style={styles.topBarcontainer}>
				<Ionicons
					name='arrow-back-outline'
					size={24}
					color={color.dimblack}
					style={styles.backicon}
					onPress={handleBackHomePage}
				/>
				<HeadingS style={styles.notificationText}>notifications</HeadingS>
			</View>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={headerText}
				ListHeaderComponentStyle={styles.headerTextStyle}
				contentContainerStyle={styles.requestContainer}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	topBarcontainer: {
		height: 50,
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: color.lightgray,
		backgroundColor: color.lightgray,
		flexDirection: "row",
	},
	notificationText: {
		marginLeft: 15,
		textTransform: "capitalize",
	},
	requestContainer: {
		marginHorizontal: 15,
	},
	backicon: {
		marginLeft: 10,
		marginRight: 10,
	},
	headerTextStyle: {
		paddingVertical: 5,
	},
});

export default memo(Requests);
