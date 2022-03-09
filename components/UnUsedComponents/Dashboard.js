import {StyleSheet} from "react-native";
import Card from "../Card";
import Summary from "./Summary";
import Total from "./Total";

export default function Dashbord(props) {
	return (
		<Card style={styles.card}>
			<Summary valueMeaning='PENDING' color='crimson' />
			<Total />
			<Summary valueMeaning='COLLECTED' color='black' />
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "95%",
		height: "40%",
		marginVertical: 10,
		flexDirection: "row",
		padding: 5,
		alignItems: "center",
		justifyContent: "space-around",
		marginLeft: 8,
	},
});
