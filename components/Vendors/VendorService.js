import React from "react";
import {StyleSheet, View} from "react-native";
import {Body, HeadingS, BodyS} from "../Typography";
import color from "../colors";
import {
	Fontisto,
	Feather,
	Octicons,
	MaterialCommunityIcons,
	Entypo,
	MaterialIcons,
} from "@expo/vector-icons";

function VendorService(props) {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Fontisto name='shopping-store' size={24} color={color.primary} />
			</View>
			<View>
				<HeadingS style={styles.titleText}>food and catering</HeadingS>
				<View>
					<View style={styles.dotTextContainer}>
						<Body style={styles.packageText}>Package</Body>
						<MaterialIcons
							name='arrow-right-alt'
							size={24}
							color={color.primary}
						/>
						<Body style={styles.priceText}>TSH 5000</Body>
					</View>
					<BodyS style={styles.descriptionText}>some package description</BodyS>
				</View>
				<View>
					<View style={styles.dotTextContainer}>
						<Body style={styles.packageText}>Package</Body>
						<MaterialIcons
							name='arrow-right-alt'
							size={24}
							color={color.primary}
						/>
						<Body style={styles.priceText}>TSH 5000</Body>
					</View>

					<BodyS style={styles.descriptionText}>some package description</BodyS>
				</View>

				<View>
					<View style={styles.dotTextContainer}>
						<Body style={styles.packageText}>Package</Body>
						<MaterialIcons
							name='arrow-right-alt'
							size={24}
							color={color.primary}
						/>
						<Body style={styles.priceText}>TSH 5000</Body>
					</View>

					<BodyS style={styles.descriptionText}>some package description</BodyS>
				</View>
				<View style={styles.bottomContainer}>
					<Feather name='corner-down-right' size={24} color={color.primary} />

					<View style={styles.personDetails}>
						<Body>Name person</Body>
						<Body>contacts.</Body>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 20,
		marginTop: 20,
	},
	iconContainer: {
		marginRight: 10,
	},
	titleText: {
		textTransform: "capitalize",
	},
	dotTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
	},
	bottomContainer: {
		flexDirection: "row",
		marginTop: 10,
	},
	personDetails: {
		marginLeft: 10,
	},
	packageText: {
		marginRight: 5,
	},
	priceText: {
		fontWeight: "bold",
	},
	descriptionText: {
		color: color.dimblack,
	},
});

export default React.memo(VendorService);
