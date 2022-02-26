import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Transaction from "./Transaction";
import PaymentSummary from "./PaymentSummary";

export default function Payments() {
	return (
		<View style={styles.screen}>
			<PaymentSummary />
			<Transaction />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
