import React, {memo} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Body, BodyS} from "../../../Typography";
import {useSelector} from "react-redux";
import color from "../../../colors";

function Spaces(props) {
	const space = useSelector((state) => {
		return state.house.spaces;
	});

	const room = useSelector((state) => {
		if (state.propertyType.type === "room") return true;
		else return false;
	});

	/**
	 * a function to check if all all amenities are false.
	 * @returns boolean
	 */
	const no_space = () => {
		if (
			!space.kitchenSpace &&
			!space.masterBedroom &&
			!space.dinningArea &&
			!space.livingRoom
		)
			return true;
		else return false;
	};

	return (
		<View>
			{!room && (
				<View style={styles.container}>
					<Body style={styles.boldHeader}> Room types</Body>

					<View style={styles.amenityContainer}>
						{space.livingRoom && (
							<View style={styles.space}>
								<BodyS>Dinning Room</BodyS>
							</View>
						)}
						{space.dinningArea && (
							<View style={styles.space}>
								<BodyS>Living room</BodyS>
							</View>
						)}
						{space.kitchenSpace && (
							<View style={styles.space}>
								<BodyS>Kitchen</BodyS>
							</View>
						)}
						{space.masterBedroom && (
							<View style={styles.space}>
								<BodyS>Master bedroom</BodyS>
							</View>
						)}

						{no_space() && (
							<View style={styles.no_amenity}>
								<BodyS>Nothing was selected.</BodyS>
							</View>
						)}
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	boldHeader: {
		borderBottomWidth: 1,
		borderBottomColor: "gray",
		marginBottom: 5,
	},
	container: {
		marginLeft: 15,
		marginTop: 10,
	},
	amenityContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	},
	space: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
		backgroundColor: color.lightgray,
		padding: 8,
		borderRadius: 15,
		marginTop: 5,
	},
	no_amenity: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
		backgroundColor: color.lightred,
		borderRadius: 5,
		padding: 8,
		marginTop: 5,
	},
});

export default memo(Spaces);
