import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Home' }}/>
			</Stack.Navigator>
		</NavigationContainer>
		
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
