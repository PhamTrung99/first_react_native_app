import React from 'react';
import { View } from 'react-native';
import { styles } from './styles/app.style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/HomePage/HomePage/HomePage';
import AppHeader from './components/AppHeader/AppHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonalPage from './components/PersonalPage/PersonnalPage/PersonalPage';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function App() {

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { flex: 14 }]}>
        <View style={[styles.view_header, { flex: 1.4 }]}>
          <AppHeader></AppHeader>
        </View>
        <View style={[styles.view_middle, { flex: 12.6 }]}>
          <NavigationContainer >
            <BottomTab.Navigator
              initialRouteName="HomePage"
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveBackgroundColor: 'black',
                activeBackgroundColor: 'black',
              }}
              
            >
              <BottomTab.Screen
              name="HomePage" component={HomePage} 
              options={{
                title: "Home",
                tabBarIcon: ({focused}) => {
                  let iconName = focused ? "home" : "home-outline"
                  return <MaterialCommunityIcons name={iconName}  color="white" size={30} />
                },
              }}/>
                 <BottomTab.Screen 
              name="PersonalPage" component={PersonalPage} 
              options={{
                title: "Profile",
                tabBarIcon: ({focused}) => {
                  let iconName = focused ? "account-box" : "account-box-outline"
                  return <MaterialCommunityIcons name={iconName} color="white" size={30} />
                },
              }}/>
            </BottomTab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    </SafeAreaProvider>
  );
}


