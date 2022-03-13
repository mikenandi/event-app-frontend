import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {dinningAreaStatus} from "../../../../Store/home-store/houseSlice";
import {useSelector} from "react-redux";
import {MaterialIcons} from "@expo/vector-icons";
import {BodyS} from "../../../../Typography";

function DiningArea(props) {
	const show = useSelector((state) => {
		return state.house.dinningArea;
	});

	const dispatch = useDispatch();

	const handleActive = () => {
		dispatch(dinningAreaStatus());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleActive}>
			<View style={styles.typeContainer}>
				<MaterialIcons
					name='dinner-dining'
					size={24}
					color={show ? color.secondary : color.grey}
					style={show ? styles.activeIcon : styles.inactiveIcon}
				/>
				<BodyS style={styles.typeText}>Dinning area</BodyS>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	typeContainer: {
		margin: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	inactiveIcon: {
		marginRight: 10,
		padding: 9,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: color.grey,
		marginVertical: 5,
	},
	activeIcon: {
		marginRight: 10,
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 20,
		marginVertical: 5,
	},
	typeText: {
		textTransform: "capitalize",
	},
});

export default memo(DiningArea);
