import React, {memo} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import color from "../colors";
import {Entypo} from "@expo/vector-icons";
import {add_comma} from "../../Helpers/addCommaToNumber";
import {Body, BodyS, Caption, HeadingS} from "../Typography";

function Listing(props) {
	var price = props.price;

	return (
		<View style={styles.card}>
			<View style={styles.topContainer}>
				<View>
					<Image
						source={require("../../assets/house.png")}
						style={styles.propetyImage}
					/>
					<BodyS style={styles.propertyType}>apartment</BodyS>
				</View>

				<View style={styles.detailsContainer}>
					<View>
						<HeadingS style={styles.price}>
							<Body>TZS</Body> {add_comma(price)}
						</HeadingS>
						<BodyS style={styles.location}>House Name</BodyS>
					</View>
					<Entypo name='dots-three-vertical' size={14} color={color.dimblack} />
				</View>
				<View style={styles.amenityContainer}>
					<Caption style={styles.amenitynumber}>3 Rooms</Caption>
					<Entypo name='dot-single' size={10} color={color.dimblack} />
					<Caption style={styles.amenitynumber}>2 Bathrooms</Caption>
					<Entypo name='dot-single' size={10} color={color.dimblack} />
					<Caption style={styles.amenitynumber}>Furnished</Caption>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		marginBottom: 4,
		width: "100%",
		marginTop: 1,
	},
	topContainer: {
		marginBottom: 10,
	},
	propetyImage: {
		flex: 1,
		width: "100%",
		height: 240,
		backgroundColor: color.lightgray,
	},
	detailsContainer: {
		marginHorizontal: 10,
		marginVertical: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	location: {
		color: color.dimblack,
		marginLeft: 3,
		textTransform: "capitalize",
	},
	locationContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 10,
		paddingBottom: 10,
		marginLeft: 12,
		alignItems: "center",
	},
	left: {
		color: "crimson",
	},
	iconsContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	iconTextContainer: {
		flexDirection: "row",
		marginTop: 10,
		alignItems: "baseline",
	},
	iconBathtub: {
		marginRight: 5,
	},
	iconBed: {
		marginRight: 5,
		marginLeft: 15,
	},
	iconText: {
		color: "grey",
		fontSize: 12,
		fontWeight: "700",
	},
	rentalStatusText: {
		position: "absolute",
		padding: 6,
		backgroundColor: color.primary,
		borderRadius: 6,
		left: 10,
		top: 10,
	},
	amenity: {
		flexDirection: "row",
		marginHorizontal: 12,
		alignItems: "baseline",
	},
	amenitynumber: {
		color: color.dimblack,
		marginHorizontal: 4,
		textTransform: "lowercase",
	},
	amenityContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
	},
	dotsepator: {
		textAlign: "center",
	},
	price: {},
	propertyType: {
		position: "absolute",
		backgroundColor: "black",
		opacity: 0.8,
		color: "white",
		textTransform: "capitalize",
		padding: 5,
		borderRadius: 0,
		right: 3,
		bottom: 3,
	},
});

export default memo(Listing);
