import React, {memo} from "react";
import {View, Modal, Image, StyleSheet, TouchableOpacity} from "react-native";
import color from "../../colors";
import {Entypo} from "@expo/vector-icons";
import {add_comma} from "../../../Helpers/addCommaToNumber";
import {Body, BodyS, Caption, HeadingS} from "../../Typography";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {showDetail} from "../../Store/home-store/modalSlice-home";

function Listing(props) {
	var price = props.price;

	const dispatch = useDispatch();

	const handleShowDetail = () => {
		dispatch(showDetail());
	};

	return (
		<View style={styles.card}>
			<View style={styles.topContainer}>
				<View>
					<TouchableOpacity activeOpacity={1} onPress={handleShowDetail}>
						<Image
							source={require("../../../assets/house.png")}
							style={styles.propetyImage}
						/>
					</TouchableOpacity>

					{props.warning && (
						<View style={styles.stickerContainer}>
							<MaterialCommunityIcons
								name='calendar-outline'
								size={24}
								color='black'
							/>
						</View>
					)}
					<BodyS style={styles.propertyType}>{props.type}</BodyS>
				</View>

				<View style={styles.detailsContainer}>
					<View>
						<HeadingS style={styles.price}>
							<Body>TSH</Body> {add_comma(price)}
						</HeadingS>
					</View>
					<Entypo name='dots-three-vertical' size={14} color={color.dimblack} />
				</View>
				<View style={styles.pinContainer}>
					<Ionicons
						name='ios-pin-outline'
						size={24}
						color={color.primary}
						style={styles.pinIcon}
					/>
					<View>
						<Body style={styles.location}>House Name</Body>
						<View style={styles.amenityContainer}>
							<Caption style={styles.amenitynumber}>3 Rooms</Caption>
							<Entypo name='dot-single' size={10} color={color.dimblack} />
							<Caption style={styles.amenitynumber}>2 Bathrooms</Caption>
							<Entypo name='dot-single' size={10} color={color.dimblack} />
							<Caption style={styles.amenitynumber}>Furnished</Caption>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		marginBottom: 9,
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
		color: "black",
		marginLeft: 5,
		textTransform: "capitalize",
	},

	amenitynumber: {
		color: color.dimblack,
		marginHorizontal: 4,
		textTransform: "lowercase",
	},
	amenityContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
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
		fontWeight: "bold",
	},
	pinContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	pinIcon: {
		marginLeft: 5,
	},
	stickerContainer: {
		position: "absolute",
		backgroundColor: "white",
		opacity: 0.8,
		padding: 5,
		borderRadius: 0,
		left: 5,
		top: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
});

export default memo(Listing);
