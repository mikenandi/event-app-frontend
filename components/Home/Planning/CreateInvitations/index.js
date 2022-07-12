import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	StatusBar,
	Modal,
	FlatList,
} from "react-native";
import {Body, HeadingM, BodyS, HeadingS, ButtonText} from "../../../Typography";
import color from "../../../colors";
import {useDispatch} from "react-redux";
import {
	hideGuests,
	hideInvitations,
	hidePlanning,
	showRegisterGuest,
} from "../../../../Store/homeStore/modalSlice";
import {
	Ionicons,
	FontAwesome5,
	Foundation,
	FontAwesome,
	Fontisto,
} from "@expo/vector-icons";
// import RegisterGuest from "./RegisterGuest";
import {useSelector} from "react-redux";
import axios from "axios";
import Loader from "../../../Loader";
import {getGuestData} from "../../../../Store/homeStore/eventSlice";

function Event(props) {
	// initializing dispatch
	const dispatch = useDispatch();

	const handleHidePlanning = () => {
		dispatch(hideInvitations());
	};

	const [isLoading, setIsLoading] = React.useState(false);

	// const visible = useSelector((state) => {
	// 	return state.showModal.registerGuestVisible;
	// });

	// const ()=>{} = () => {
	// 	dispatch(showRegisterGuest());
	// };

	const guestData = useSelector((state) => {
		return state.event.guestData;
	});

	const eventId = useSelector((state) => {
		return state.event.planEventId;
	});
	// console.log(eventId);
	// loading data
	React.useEffect(() => {
		(async () => {
			try {
				// console.log(eventId);
				let response = await axios({
					method: "GET",
					url: "http://evento-tz-backend.herokuapp.com/api/v1/guest/guests",
					params: {
						eventId: eventId,
					},
				});

				let dataProvided = response.data.data;

				dispatch(getGuestData(dataProvided));

				return;
			} catch (error) {
				console.log(error);
				console.log(error.response);
				return;
			}
		})();
	}, []);

	const handleSendInvitations = async () => {
		try {
			setIsLoading(true);

			let response = await axios({
				method: "POST",
				url: "https://evento-tz-backend.herokuapp.com/api/v1/guest/send-invitations",
				params: {
					eventId: eventId,
				},
			});

			setIsLoading(false);
			// console.log(response.data);

			return;
		} catch (error) {
			setIsLoading(false);
			console.log(error.response.data);
			return;
		}
	};

	const Guest = (props) => {
		return (
			<View>
				{/* guest container */}
				<View style={styles.guestContainer}>
					<View style={styles.avatar}>
						<Fontisto name='person' size={24} color={color.primary} />
					</View>
					<View style={styles.detailsContainer}>
						<Body>{props.fullname}</Body>
						<BodyS>{props.email}</BodyS>
					</View>
				</View>
			</View>
		);
	};

	const renderItem = ({item}) => {
		return <Guest email={item.email} fullname={item.fullname} />;
	};

	if (isLoading) return <Loader />;

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />

			<View style={styles.topBar}>
				<TouchableOpacity activeOpcaity={0.8} onPress={handleHidePlanning}>
					<Ionicons name='arrow-back' size={28} color='black' />
				</TouchableOpacity>
				<HeadingS style={styles.titleText}>
					Guests list to send invitations
				</HeadingS>
			</View>

			<View style={styles.container}>
				{false && (
					<View style={styles.summaryContainer}>
						<HeadingS>Total guests</HeadingS>
						<HeadingS>{guestData.length}</HeadingS>
					</View>
				)}

				<FlatList
					data={guestData}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
				/>
			</View>
			{/* floating action button */}

			{guestData.length >= 1 && (
				<TouchableOpacity
					activeOpacity={0.8}
					style={styles.floatingActionButton}
					onPress={handleSendInvitations}>
					<FontAwesome name='send' size={20} color={color.primary} />
				</TouchableOpacity>
			)}

			{/* 
			<Modal animationType='fade' visible={visible} transparent={false}>
				<RegisterGuest />
			</Modal> */}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: "white",
		flex: 1,
	},
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: "white",
	},
	titleText: {
		color: "black",
		fontWeight: "normal",
		marginLeft: 10,
	},
	guestContainer: {
		flexDirection: "row",
		alignItems: "center",
		margin: 10,
	},
	detailsContainer: {
		marginLeft: 10,
	},
	avatar: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color.lightgray,
		borderRadius: 25,
	},
	floatingActionButton: {
		flexDirection: "row",
		width: 50,
		height: 50,
		backgroundColor: color.lightblue,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		position: "absolute",
		right: 20,
		bottom: 40,
	},
	guestText: {
		marginLeft: 5,
	},
	summaryContainer: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderBottomWidth: 2,
		borderBottomColor: color.primary,
		flexDirection: "row",
		padding: 10,
		alignItems: "center",
		justifyContent: "space-around",
	},
});

export default React.memo(Event);
