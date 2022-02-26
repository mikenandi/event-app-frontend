import React, {memo} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import color from "../colors";
import {useDispatch} from "react-redux";
import {
	noMasterBedroom,
	yesMasterBedroom,
} from "../features/homePageStore/spaceFeatureSlice";
import {useSelector} from "react-redux";

function MasterBedroom(props) {
	const yes = useSelector((state) => {
		return state.spaceFeatures.showYesMasterBedroom;
	});

	const no = useSelector((state) => {
		return state.spaceFeatures.showNoMasterBedroom;
	});

	const dispatch = useDispatch();

	const handleYes = () => {
		dispatch(yesMasterBedroom());
	};

	const handleNo = () => {
		dispatch(noMasterBedroom());
	};

	return (
		<View>
			<View style={styles.typeContainer}>
				<Text style={styles.questionText}>Is there any Master bedroom?</Text>
				<View style={styles.yesnoContainer}>
					<Pressable
						onPress={handleYes}
						style={yes ? styles.active : styles.inactive}>
						<Text style={yes ? styles.activeText : styles.inactiveText}>
							yes
						</Text>
					</Pressable>
					<Pressable
						onPress={handleNo}
						style={no ? styles.active : styles.inactive}>
						<Text style={no ? styles.activeText : styles.inactiveText}>no</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	questionText: {
		fontSize: 16,
		color: color.dimblack,
	},
	typeContainer: {
		alignItems: "center",
		justifyContent: "space-around",
		margin: 5,
		padding: 10,
		width: "95%",
	},
	yesnoContainer: {
		flexDirection: "row",
	},
	activeText: {
		fontWeight: "100",
		color: color.primary,
	},
	inactiveText: {
		fontWeight: "100",
		color: color.dimblack,
	},
	active: {
		backgroundColor: color.lightgray,
		margin: 5,
		padding: 5,
		width: 50,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		borderColor: color.whitegrey,
	},
	inactive: {
		margin: 5,
		padding: 5,
		width: 50,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		borderWidth: 1,
		borderColor: color.whitegrey,
	},
});

export default memo(MasterBedroom);
