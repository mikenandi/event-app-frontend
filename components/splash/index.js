import React, {memo, useState} from "react";
import {View, StyleSheet, StatusBar, Image} from "react-native";

function Splash(props) {
	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />

			{/* --getting the splash screen while waiting for setting up the token. */}
			<Image
				source={require("../../assets/splash.png")}
				style={styles.logoImage}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
	},
	logoImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});

export default memo(Splash);
