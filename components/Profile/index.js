import React, {memo, useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import {Feather} from "@expo/vector-icons";
import {Caption, BodyS, HeadingS, Body} from "../Typography";
import color from "../colors";

function Profile(props) {
	const editProfileHandler = () => {};

	return (
		<View style={styles.screen}>
			<View style={styles.avatarContainer}>
				<Image
					source={require("../../assets/tenant.jpeg")}
					style={styles.avatar}
				/>
				<View>
					<HeadingS>Michael Nandi</HeadingS>
					<BodyS style={styles.showProfileText}>show profile</BodyS>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<MaterialCommunityIcons
						name='account-circle-outline'
						size={30}
						color='gray'
						style={styles.icon}
					/>
					<Body style={styles.iconText}>Edit profile</Body>
				</View>
				<View style={styles.rowContainer}>
					<AntDesign
						name='creditcard'
						size={30}
						color='gray'
						style={styles.icon}
					/>
					<Body style={styles.iconText}>payouts</Body>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<MaterialCommunityIcons
						name='account-group-outline'
						size={30}
						color='gray'
						style={styles.icon}
					/>
					<Body style={styles.iconText}>Tenants</Body>
				</View>
				<View style={styles.rowContainer}>
					<MaterialIcons
						name='insert-chart-outlined'
						size={30}
						color='gray'
						style={styles.icon}
					/>
					<Body style={styles.iconText}>Payments summary</Body>
				</View>
			</View>
			<View>
				<View style={styles.rowContainer}>
					<Feather
						name='help-circle'
						size={30}
						color='black'
						style={styles.icon}
					/>
					<Body style={styles.iconText}>help</Body>
				</View>
				<View style={styles.rowContainer}>
					<AntDesign
						name='setting'
						size={30}
						color='gray'
						style={styles.icon}
					/>
					<Body style={styles.iconText}>settings</Body>
				</View>
			</View>
			<View style={styles.rowContainer}>
				<Feather name='log-out' size={30} color='gray' style={styles.icon} />
				<Body style={styles.iconText}>sign out</Body>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10,
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
		marginVertical: 8,
	},
	container: {},
	avatarContainer: {
		paddingLeft: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: color.lightgray,
	},
	icon: {
		marginRight: 15,
		color: "black",
	},
	iconText: {
		textTransform: "capitalize",
	},
	showProfileText: {
		color: color.primary,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
});

export default memo(Profile);
