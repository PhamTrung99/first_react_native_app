import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonalPage from '../components/PersonalPage/PersonnalPage/PersonalPage';
import TvShowPage from '../components/TvshowPage/TvShowPage/TvShowPage';
import MoviePage from '../components/MoviePage/MoviePage/MoviePage';
import HomePage from '../components/HomePage/HomePage/HomePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchPage from '../components/SearchPage/SearchPage';




export default function BottomTabNaviga({ isDrawerOpen }) {

  const BottomTab = createBottomTabNavigator();
  const styleIcon = {
    size: 30,
    color: "white"
  }

  return (
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
          tabBarIcon: ({ focused }) => {
            let iconName = focused ? "home-automation" : "home-outline"
            return <MaterialCommunityIcons name={iconName} color={styleIcon.color} size={styleIcon.size} />
          },
        }} />

      <BottomTab.Screen
        name="MoviePage" component={MoviePage}
        options={{
          title: "Movies",
          tabBarIcon: ({ focused }) => {
            let iconName = focused ? "movie" : "movie-open-outline"
            return <MaterialCommunityIcons name={iconName} color={styleIcon.color} size={styleIcon.size} />
          },
        }} />

      <BottomTab.Screen
        name="SearchPage" component={SearchPage}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => {
            let iconName = focused ? "magnify" : "magnify-plus"
            return <MaterialCommunityIcons name={iconName} color={styleIcon.color} size={styleIcon.size} />
          },
        }} />

      <BottomTab.Screen
        name="TvShowPage" component={TvShowPage}
        options={{
          title: "TV Shows",
          tabBarIcon: ({ focused }) => {
            let iconName = focused ? "television-pause" : "television-play"
            return <MaterialCommunityIcons name={iconName} color={styleIcon.color} size={styleIcon.size} />
          },
        }} />
      <BottomTab.Screen
        name="PersonalPage" component={PersonalPage}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            let iconName = focused ? "account-group" : "account"
            return <MaterialCommunityIcons name={iconName} color={styleIcon.color} size={styleIcon.size} />
          },
        }} />



    </BottomTab.Navigator>

  )
};
