import {memo} from "react";
import {View, StyleSheet} from "react-native";
import {HeadingS, HeadingM} from "../Typography";
import color from "../colors";

function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingS style={styles.titleText}>gudpin</HeadingS>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	titleText: {
		fontWeight: "800",
	},
});

export default memo(Logo);
