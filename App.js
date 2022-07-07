import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import Home from "./components/Home";
import color from "./components/colors";
import {StatusBar, Text} from "react-native";
import Left from "./components/TopBar/Left";
import Right from "./components/TopBar/Right";
import Profile from "./components/Profile";
import Vendors from "./components/Vendors";
import Messages from "./components/Messages";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ConfirmCode from "./components/Auth/Confirm-email";
import Splash from "./components/splash";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./Store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import {logIn} from "./Store/Auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "./components/Loader";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyAuth() {
	// setting loading state
	const [isLoading, setIsLoading] = React.useState(true);

	// inititializing dispatch
	const dispatch = useDispatch();

	const isLogedOut = useSelector((state) => {
		return state.auth.isLogedOut;
	});

	React.useEffect(() => {
		(async () => {
			try {
				let savedToken = await SecureStore.getItemAsync("authToken");
				let savedUserId = await AsyncStorage.getItem("userId");

				if (!!savedToken) {
					dispatch(logIn({authToken: savedToken, userId: savedUserId}));

					setIsLoading(false);

					return;
				}

				setIsLoading(false);

				return;
			} catch (error) {
				return;
			}
		})();
	}, []);

	if (isLoading) return <Loader />;

	return (
		<Stack.Navigator initialRouteName='login'>
			{isLogedOut ? (
				<>
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
				</>
			) : (
				<>
					<Stack.Screen
						name='AppContents'
						component={MyTabs}
						options={{
							headerShown: false,
						}}
					/>
				</>
			)}
		</Stack.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='homepage'
			screenOptions={{
				tabBarActiveTintColor: color.primary,
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
				name='Vendors'
				component={Vendors}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Entypo name='shop' size={size} color={color} />
					),
					headerLeft: () => <Left title='Payments' />,
					headerRight: () => <Right />,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		// --wrapping our APP with store.
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar backgroundColor='white' />

				{/* the app wrapped with authentication screens. */}
				<MyAuth />
			</NavigationContainer>
		</Provider>
	);
}
