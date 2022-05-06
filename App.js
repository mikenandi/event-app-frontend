import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo, Foundation} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import Home from "./components/Home";
import Payments from "./components/Payment";
import color from "./components/colors";
import {StatusBar, Text} from "react-native";
import Left from "./components/TopBar/Left";
import Right from "./components/TopBar/Right";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ConfirmCode from "./components/Auth/Confirm-email";
import Splash from "./components/splash";
import {Provider} from "react-redux";
import {store} from "./components/Store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyAuth() {
	return (
		<Stack.Navigator initialRouteName='login'>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='ForgotPassword'
				component={ForgotPassword}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Signup'
				component={Signup}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='Confirm'
				component={ConfirmCode}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='homepage'
			screenOptions={{
				tabBarActiveTintColor: "black",
				headerShown: true,
			}}>
			<Tab.Screen
				name='property list'
				component={Home}
				options={{
					tabBarLabel: "",
					title: "",
					tabBarIcon: ({color, size}) => (
						<Entypo name='home' size={size} color={color} />
					),
					headerLeft: () => <Left />,
					headerRight: () => <Right />,
					headerShown: true,
				}}
			/>

			{/* <Tab.Screen
				name='Payments'
				component={Payments}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<AntDesign name='swap' size={size} color={color} />
					),
					headerLeft: () => <Left title='Payments' />,
				}}
			/> */}
			<Tab.Screen
				name='Messages'
				component={Messages}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Ionicons name='chatbubbles' size={size} color={color} />
					),
					headerLeft: () => <Left />,
					headerRight: () => <Right />,
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Ionicons name='person' size={size} color={color} />
					),
					headerLeft: () => <Left />,
					headerRight: () => <Right />,
					headerShown: true,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	// --isloading state.
	const [is_loading, set_is_loading] = React.useState(true);

	// --storing token.
	const [authToken, set_authToken] = React.useState("");

	// --Checking for authentication token.
	React.useEffect(() => {
		SecureStore.getItemAsync("authToken")
			.then((response) => {
				// --saving up the auth token.
				set_authToken(response);

				// --checking up if length of token is greater than zero
				// -- then home page should be shown.
				if (response.length > 0) {
					set_is_loading(false);
				}
			})
			.catch((error) => {});
	}, []);

	// --when waiting for status of the splash screen.
	if (is_loading) {
		return <Splash />;
	}

	return (
		// --wrapping our APP with store.
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar backgroundColor='white' />

				{/* --checking if the token is availabe then show authentication if availabe show home screen. */}
				{authToken ? <MyTabs /> : <MyAuth />}
			</NavigationContainer>
		</Provider>
	);
}
