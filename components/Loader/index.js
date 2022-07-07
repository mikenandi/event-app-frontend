import React from "react";
import LottieView from "lottie-react-native";
import {StatusBar, View, StyleSheet} from "react-native";

function Loader(props) {
	return (
		<View style={styles.screen}>
			<StatusBar />
			<LottieView
				source={require("../../assets/99694-loader-red.json")}
				autoPlay
				loop
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});

export default React.memo(Loader);
