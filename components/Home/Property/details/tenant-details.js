import React, {memo} from "react";
import {View, Image, StyleSheet} from "react-native";
import color from "../../../colors";
import {add_comma} from "../../../../Helpers/addCommaToNumber";
import {Body, BodyS, Caption, HeadingS} from "../../../Typography";
import {useDispatch, useSelector} from "react-redux";

function TenantDetails(props) {
	return (
		<View style={styles.container}>
			<Body style={styles.tenantHeader}>Tenant</Body>
			<View style={styles.container1}>
				<Image
					source={require("../../../../assets/tenant.jpeg")}
					style={styles.avatar}
				/>
				<View>
					<Body style={styles.name}>John Doe</Body>
				</View>
			</View>
			<View>
				<View style={styles.container2}>
					<Body style={styles.paymentHeader}>Rent payment.</Body>
					<View style={styles.rowContainer}>
						<Body style={styles.detail}>Due date</Body>
						<Body style={styles.rightdetail}>10 oct 22</Body>
					</View>
					<View style={styles.rowContainer}>
						<Body style={styles.detail}>Rent for</Body>
						<Body style={styles.rightdetail}>3 months</Body>
					</View>
					<View style={styles.rowlastContainer}>
						<Body style={styles.detail}>Amount</Body>
						<Body style={styles.rightdetail}>Tsh 4200000</Body>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 15,
	},
	container1: {
		flexDirection: "row",
		marginHorizontal: 10,
		alignItems: "center",
		borderRadius: 10,
	},
	name: {
		fontWeight: "normal",
	},
	container2: {
		padding: 10,
		marginHorizontal: 5,
		borderRadius: 10,
	},
	container: {
		flexDirection: "column",
		borderRadius: 0,
		borderTopWidth: 1,
		borderTopColor: color.lightblue,
	},
	tenantHeader: {
		paddingLeft: 10,
		marginBottom: 5,
		fontWeight: "bold",
		color: "black",
		borderBottomWidth: 0,
		borderBottomColor: color.lightblue,
		marginTop: 5,
	},
	paymentHeader: {
		fontWeight: "normal",
		color: "black",
		marginBottom: 4,
	},
	detail: {
		fontWeight: "normal",
		textTransform: "uppercase",
	},
	ageGenderText: {
		color: "gray",
	},
	rowContainer: {
		borderTopWidth: 1,
		paddingVertical: 10,
		justifyContent: "space-between",
		flexDirection: "row",
		borderTopColor: color.lightblue,
	},
	rowlastContainer: {
		borderBottomWidth: 1,
		borderBottomColor: color.lightblue,
		borderTopWidth: 1,
		borderTopColor: color.lightblue,
		paddingVertical: 10,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	rightdetail: {
		textTransform: "lowercase",
	},
});

export default memo(TenantDetails);
