import {Text, View, StyleSheet} from "react-native";
import color from "./colors";

export default function Logo(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	titleText: {
		color: color.dimblack,
		fontSize: 18,
		fontFamily: "serif",
		fontWeight: "700",
	},
});
