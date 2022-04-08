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
					<BodyS>Age: 28</BodyS>
					<BodyS>Gender: male</BodyS>
					<BodyS>Occupation: student</BodyS>
				</View>
			</View>
			<View>
				<View style={styles.container2}>
					<Body style={styles.paymentHeader}>payments.</Body>
					<Body style={styles.detail}>Due date: 10 oct 22</Body>
					<Body style={styles.detail}>Rent for: 3 months</Body>
					<Body style={styles.detail}>Amount: Tsh 4200000</Body>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 10,
		marginRight: 15,
	},
	container1: {
		flexDirection: "row",
		backgroundColor: color.lightgray,
		marginHorizontal: 10,
		alignItems: "center",
		borderRadius: 10,
	},
	name: {
		fontWeight: "bold",
	},
	container2: {
		backgroundColor: color.lightgray,
		padding: 10,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	container: {
		flexDirection: "column",
		backgroundColor: color.lightgray,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	tenantHeader: {
		marginLeft: 15,
		marginBottom: 4,
		fontWeight: "bold",
		color: color.dimblack,
		borderBottomWidth: 1,
		borderBottomColor: color.primary,
		marginTop: 10,
	},
	paymentHeader: {
		fontWeight: "bold",
		color: color.dimblack,
		marginBottom: 4,
	},
	detail: {
		fontWeight: "100",
	},
});

export default memo(TenantDetails);
