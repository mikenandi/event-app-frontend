import {View, Text, Image, StyleSheet} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {FontAwesome5} from "@expo/vector-icons";
import color from "../colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function TenantProfile(props) {
	return (
		<View style={styles.modalContainer}>
			<View style={styles.topContainer}>
				<View style={styles.avatarbackArrrowContainer}>
					<Ionicons
						name='arrow-back'
						size={30}
						onPress={() => props.setVisible(!props.visible)}
						style={styles.backButton}
					/>
					<Image
						source={require("./../../assets/mike.jpg")}
						style={styles.avatarBig}
					/>
				</View>
				<View style={styles.tenantIconContainer}>
					<Text style={styles.tenantName}>Michael Nandi</Text>
					<Text style={styles.ocupationText}>Student</Text>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<MaterialIcons
					name='email'
					size={28}
					color={color.dimblack}
					style={styles.icon}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.iconLabel}>Email</Text>
					<Text style={styles.textValue}>mike12og@gmail.com</Text>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<MaterialIcons
					name='phone'
					size={28}
					color={color.dimblack}
					style={styles.icon}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.iconLabel}>Phone</Text>
					<Text style={styles.textValue}>0748023727</Text>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<FontAwesome5
					name='house-user'
					size={28}
					color={color.dimblack}
					style={styles.icon}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.iconLabel}>House Rented</Text>
					<Text style={styles.textValue}>location of the house</Text>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<MaterialCommunityIcons
					name='calendar-export'
					size={28}
					color={color.dimblack}
					style={styles.icon}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.iconLabel}>Rent Expires on</Text>
					<Text style={styles.textValue}>10 April 2022</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	avatarBig: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: color.secondary,
		marginTop: 15,
	},
	modalContainer: {
		flex: 1,
	},
	backButton: {
		padding: 10,
		marginRight: 50,
		color: "black",
	},
	avatarbackArrrowContainer: {
		flexDirection: "row",
	},
	topContainer: {
		backgroundColor: color.lightgray,
		borderBottomWidth: 2,
		borderBottomColor: color.grey,
	},
	menuIconContainer: {
		flexDirection: "row",
	},
	tenantName: {
		fontSize: 20,
		color: color.dimblack,
		marginTop: 10,
	},
	tenantIconContainer: {
		alignItems: "center",
	},
	ocupationText: {
		fontSize: 15,
		color: color.dimblack,
		marginBottom: 30,
		fontFamily: "serif",
	},
	infoContainer: {
		marginHorizontal: 20,
		padding: 10,
		flexDirection: "row",
	},
	textContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
		borderBottomWidth: 1,
		borderBottomColor: color.dimblack,
		width: "80%",
	},
	icon: {marginRight: 10},
	iconLabel: {color: color.dimblack, fontSize: 16, fontFamily: "serif"},
	textValue: {
		fontSize: 16,
		marginBottom: 5,
	},
});
