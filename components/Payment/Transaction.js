import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Modal,
} from "react-native";
import {useState} from "react";
import Card from "../Card";
import {Foundation} from "@expo/vector-icons";
import TenantProfile from "./TenantProfile";
import color from "../colors";

export default function Transaction(props) {
	const [visible, setVisible] = useState(false);
	return (
		<View>
			<Card style={styles.card}>
				<View style={styles.detailsContainer}>
					<View>
						<Text style={styles.amountPaid}>
							<Text style={styles.currencyName}>TZS</Text> 000,000
						</Text>
						<Text style={styles.rentLocationText}>
							Monthly rent(location name)
						</Text>
					</View>
					<View style={styles.paidSignContainer}>
						<Foundation
							name='dollar'
							size={24}
							color={color.primary}
							style={styles.dolarIcon}
						/>
						<Text style={styles.paidText}>PAID</Text>
					</View>
				</View>
				<View style={styles.dateImageContainer}>
					<View>
						<Text style={styles.topDetail}>12.12.2020</Text>
						<Text style={styles.bottomDetail}>PAID ON</Text>
					</View>
					<View>
						<Text style={styles.topDetail}>12 Months</Text>
						<Text style={styles.bottomDetail}>PAID FOR</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => setVisible(!visible)}>
						<Image
							source={require("../../assets/mike.jpg")}
							style={styles.avatar}
						/>
					</TouchableOpacity>
					<Modal animationType='slide' transparent={false} visible={visible}>
						<TenantProfile setVisible={setVisible} visible={visible} />
					</Modal>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		justifyContent: "space-between",
		marginHorizontal: 8,
		marginTop: 5,
		borderRadius: 10,
	},
	detailsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	timePaid: {
		fontSize: 14,
		marginLeft: 20,
		marginTop: 5,
		fontFamily: "serif",
	},
	amountPaid: {
		fontSize: 30,
		color: color.dimblack,
		fontFamily: "serif",
	},
	currencyName: {
		fontSize: 15,
		color: color.dimblack,
		fontFamily: "serif",
	},
	rentLocationText: {
		color: "gray",
		marginTop: 2,
		fontFamily: "serif",
	},
	amountText: {
		fontWeight: "700",
		fontFamily: "serif",
	},
	paidSignContainer: {
		flexDirection: "row",
		backgroundColor: color.lightgray,
		width: 70,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	dolarIcon: {
		marginRight: 5,
	},
	paidText: {
		color: color.primary,
		fontSize: 17,
		fontWeight: "700",
		fontFamily: "serif",
	},
	dateImageContainer: {
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: color.secondary,
	},

	topDetail: {
		fontSize: 18,
		color: color.dimblack,
	},
	bottomDetail: {
		color: "grey",
		fontWeight: "700",
		fontFamily: "serif",
	},
});
