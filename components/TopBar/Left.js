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
		fontWeight: "600",
		color: "black",
	},
});

export default memo(Logo);
