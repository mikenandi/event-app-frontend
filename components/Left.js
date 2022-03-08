import {Text, View, StyleSheet} from "react-native";
import {HeadingS} from "./Typography";
export default function Logo(props) {
	return (
		<View style={styles.container}>
			<HeadingS style={styles.titleText}>{props.title}</HeadingS>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	titleText: {
		color: "black",
	},
});
