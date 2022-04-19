import {memo} from "react";
import {View, StyleSheet} from "react-native";
import {HeadingS, HeadingM} from "../Typography";
import color from "../colors";

function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingS style={styles.titleText}>gudsurvey</HeadingS>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	titleText: {
		fontWeight: "700",
		color: color.primary,
	},
});

export default memo(Logo);
