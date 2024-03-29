import React, {memo} from "react";
import {
	View,
	Button,
	Image,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import color from "../colors";
import {Body, BodyS, HeadingM, HeadingS} from "../Typography";
import {Entypo} from "@expo/vector-icons";
import {MaterialCommunityIcons, Feather} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {hideProfile} from "../../Store/homeStore/modalSlice";
import {logOut} from "../../Store/Auth/authSlice";
import Loader from "../Loader";

function Profile(props) {
	// initializing dispatch.

	const dispatch = useDispatch();
	const [profile, setProfile] = React.useState({});

	const [isloading, set_isloading] = React.useState(false);

	// function to change state of the visible property to hide the modal
	const handleHide = () => {
		dispatch(hideProfile());
	};

	const userId = useSelector((state) => {
		return state.auth.userId;
	});

	React.useEffect(() => {
		(async function () {
			try {
				let response = await axios({
					method: "GET",
					url: "http://evento-tz-backend.herokuapp.com/api/v1/user/profile",
					params: {
						userId: userId,
					},
				});

				setProfile(response.data.data);

				return;
			} catch (error) {
				console.log(error.response.data);
				return;
			}
		})();
	}, []);

	const handleLogOut = async () => {
		try {
			await SecureStore.deleteItemAsync("authToken");

			set_isloading(true);
			dispatch(hideProfile());
			dispatch(logOut());

			setTimeout(() => {}, 5000);

			return;
		} catch (error) {
			return;
		}
	};

	if (isloading) return <Loader />;

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={color.primary} />
			<View style={styles.topbarContainer}>
				<View style={styles.topbarLeftContainer}>
					<TouchableOpacity activeOpacity={0.9} onPress={handleHide}>
						<Ionicons name='arrow-back' size={30} color='white' />
					</TouchableOpacity>
					<HeadingM style={styles.headerText}>Profile</HeadingM>
				</View>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={handleLogOut}
					style={styles.logoutButton}>
					<Body style={styles.logoutText}>Log out</Body>
				</TouchableOpacity>
			</View>
			<View>
				<View style={styles.avatarContainer}>
					<View style={styles.avatarIcon}>
						<Ionicons name='person-outline' size={60} color={color.dimblack} />
					</View>

					<HeadingS style={styles.nameText}>your profile</HeadingS>
					<View style={styles.locationContainer}>
						{false && (
							<Entypo name='location-pin' size={20} color={color.lightgray} />
						)}

						<BodyS style={styles.locationText}></BodyS>
					</View>
				</View>
				<View>
					{true && (
						<View style={styles.detailContainer}>
							<Ionicons name='person-outline' size={24} color={color.primary} />
							<View style={styles.detailsTextContainer}>
								<HeadingS>Full name</HeadingS>
								<BodyS>{profile.fullname}</BodyS>
							</View>
						</View>
					)}

					{true && (
						<View style={styles.detailContainer}>
							<Ionicons name='person-outline' size={24} color={color.primary} />
							<View style={styles.detailsTextContainer}>
								<HeadingS>username</HeadingS>
								<BodyS>{profile.email}</BodyS>
							</View>
						</View>
					)}

					<View style={styles.detailContainer}>
						<MaterialCommunityIcons
							name='email-outline'
							size={24}
							color={color.primary}
						/>
						<View style={styles.detailsTextContainer}>
							<HeadingS>Email Address</HeadingS>
							<BodyS>{profile.email}</BodyS>
						</View>
					</View>

					{false && (
						<View style={styles.detailContainer}>
							<Ionicons
								name='ios-call-outline'
								size={24}
								color={color.primary}
							/>
							<View style={styles.detailsTextContainer}>
								<HeadingS>Phone Number</HeadingS>
								<BodyS>0787293023</BodyS>
							</View>
						</View>
					)}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topbarContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: color.primary,
		padding: 15,
	},
	headerText: {
		marginLeft: 15,
		color: "white",
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 80,
	},
	avatarContainer: {
		backgroundColor: color.primary,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		borderBottomRightRadius: 80,
	},
	locationContainer: {
		flexDirection: "row",
	},
	locationText: {
		color: color.lightgray,
		fontFamily: "serif",
		marginLeft: 5,
	},
	detailContainer: {
		flexDirection: "row",
		marginHorizontal: 20,
		marginTop: 20,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	detailsTextContainer: {
		marginLeft: 10,
		borderBottomWidth: 1,
		width: "80%",
		paddingBottom: 5,
		borderBottomColor: color.lightgray,
	},
	topbarLeftContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	logoutText: {
		color: color.primary,
		fontWeight: "bold",
	},
	avatarIcon: {
		width: 120,
		height: 120,
		borderRadius: 80,
		backgroundColor: color.lightblue,
		alignItems: "center",
		justifyContent: "center",
	},
	logoutButton: {
		padding: 10,
		backgroundColor: "white",
		borderRadius: 20,
	},
	nameText: {
		color: color.lightgray,
	},
});

export default memo(Profile);
