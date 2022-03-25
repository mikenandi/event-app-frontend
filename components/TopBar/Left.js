import {memo} from "react";
import {View, StyleSheet} from "react-native";
import {HeadingS} from "../Typography";
import color from "../colors";
function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingS style={styles.titleText}>Logo</HeadingS>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	titleText: {},
});

export default memo(Logo);
