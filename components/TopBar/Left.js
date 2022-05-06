import {memo} from "react";
import {View, StyleSheet} from "react-native";
import {HeadingS, HeadingM} from "../Typography";
import color from "../colors";

function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingM style={styles.titleText}>gudsurvey</HeadingM>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	titleText: {
		fontWeight: "normal",
		color: "black",
		textTransform: "lowercase",
		fontFamily: "serif",
	},
});

export default memo(Logo);
