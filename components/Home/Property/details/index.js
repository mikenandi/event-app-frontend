import React, {memo} from "react";
import {View, Image, StyleSheet} from "react-native";
import color from "../../../colors";
import {add_comma} from "../../../../Helpers/addCommaToNumber";
import {Body, BodyS, Caption, HeadingS} from "../../../Typography";
import {useDispatch, useSelector} from "react-redux";
import PropertyImage from "./property-image";
import TopBar from "./topbar";
import TenantDetails from "./tenant-details";

function Detail(props) {
	return (
		<View style={styles.screen}>
			<TopBar />
			<PropertyImage />
			<TenantDetails />
			{/* <View>
				<Body>payment Details.</Body>
				<View style={styles.container}>
					<Body>Due date: 10 oct 22</Body>
					<Body>Paid Rent for: 3 months</Body>
					<Body>Paid amount: 4200000</Body>
				</View>
			</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	container: {
		backgroundColor: color.lightgray,
		marginTop: 10,
		padding: 10,
		marginHorizontal: 10,
		borderRadius: 10,
	},
});

export default memo(Detail);
