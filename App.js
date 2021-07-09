import React from 'react';
import { View,useColorScheme, Text } from 'react-native';
import { styles } from './styles/app.style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppHeader from './components/AppHeader/AppHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonalPage from './components/PersonalPage/PersonnalPage/PersonalPage';
import TvShowPage from './components/TvshowPage/TvShowPage/TvShowPage';
import MoviePage from './components/MoviePage/MoviePage/MoviePage';
import HomePage from './components/HomePage/HomePage/HomePage';




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
          <NavigationContainer theme={DarkTheme}>
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
                  let iconName = focused ? "home-automation" : "home-outline"
                  return <MaterialCommunityIcons name={iconName}  color="white" size={28} />
                },
              }}/>
              
                    <BottomTab.Screen 
              name="MoviePage" component={MoviePage} 
              options={{
                title: "Movies",
                tabBarIcon: ({focused}) => {
                  let iconName = focused ? "movie" : "movie-open-outline"
                  return <MaterialCommunityIcons name={iconName} color="white" size={28} />
                },
              }}/>
                    <BottomTab.Screen 
              name="TvShowPage" component={TvShowPage} 
              options={{
                title: "TV Shows",
                tabBarIcon: ({focused}) => {
                  let iconName = focused ? "television-pause" : "television-play"
                  return <MaterialCommunityIcons name={iconName} color="white" size={28} />
                },
              }}/>
                 <BottomTab.Screen 
              name="PersonalPage" component={PersonalPage} 
              options={{
                title: "Profile",
                tabBarIcon: ({focused}) => {
                  let iconName = focused ? "account-group" : "account"
                  return <MaterialCommunityIcons name={iconName} color="white" size={28} />
                },
              }}/>
            </BottomTab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    </SafeAreaProvider>
  );
}


