import {memo} from "react";
import {View, StyleSheet, Image} from "react-native";
import {HeadingS, HeadingM} from "../Typography";
import color from "../colors";

function Logo(props) {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/gudsurvey_word.png")}
				style={styles.logo}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 120,
		height: 60,
		resizeMode: "contain",
		marginLeft: 5,
	},
});

export default memo(Logo);
