import {memo} from "react";
import {View, StyleSheet, Image} from "react-native";
import {HeadingS, HeadingM} from "../Typography";
import color from "../colors";

function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingM style={styles.logoText}>Evento</HeadingM>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	logoText: {
		marginLeft: 10,
		color: color.primary,
		fontWeight: "bold",
		fontFamily: "serif",
	},
});

export default memo(Logo);
