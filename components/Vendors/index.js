import React from "react";
import {StyleSheet, View} from "react-native";
import {Body} from "../Typography";
import color from "../colors";

function Vendor(props) {
	return (
		<View>
			<Body>vendors screen.</Body>
		</View>
	);
}

const styles = StyleSheet.create({});

export default React.memo(Vendor);
