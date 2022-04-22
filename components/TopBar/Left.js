import {memo} from "react";
import {View, StyleSheet} from "react-native";
import {HeadingS, HeadingM} from "../Typography";
import color from "../colors";

function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingS style={styles.titleText}>
				gud<HeadingS style={styles.surveyText}>survey</HeadingS>
			</HeadingS>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	titleText: {
		fontWeight: "bold",
		color: "black",
		fontFamily: "serif",
	},
	surveyText: {
		fontWeight: "normal",
	},
});

export default memo(Logo);
