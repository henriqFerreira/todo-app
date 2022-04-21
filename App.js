import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

{/* Componentes */}
import HomeScreen from './pages/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<NavigationContainer>
				<Drawer.Navigator
					initialRouteName='Home'
					screenOptions={{
						drawerType: 'slide',
						headerShown: false,
						drawerStyle: {
							borderRightWidth: 3,
							borderRightColor: '#ABC2FF'
						}
					}}
					>
					<Drawer.Screen name='Home' component={HomeScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
