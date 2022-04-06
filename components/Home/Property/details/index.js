import React, {memo} from "react";
import {View, Image, StyleSheet} from "react-native";
import color from "../../../colors";
import {add_comma} from "../../../../Helpers/addCommaToNumber";
import {Body, BodyS, Caption, HeadingS} from "../../../Typography";
import {useDispatch, useSelector} from "react-redux";
import PropertyImage from "./property-image";
import TopBar from "./topbar";

function Detail(props) {
	return (
		<View style={styles.screen}>
			<TopBar />
			<PropertyImage />
			<View>
				<Body>current tenant</Body>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default memo(Detail);
