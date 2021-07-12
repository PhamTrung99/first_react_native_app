import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomePage/HomeScreen';
import PopularMovieScreen from './PopularMovieScreen/PopularMovieScreen';
import NowPlayingScreen from './NowPlayingScreen/NowPlayingScreen';
import PopularActingScreen from './PopularActingScreen/PopularActingScreen';
import LastestTvScreen from './LastestTVScreen/LastestTVScreen';



const Stack = createStackNavigator();

export default function HomeStack() {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PopularMovieScreen" component={PopularMovieScreen} />
            <Stack.Screen name="NowPlayingScreen" component={NowPlayingScreen} />
            <Stack.Screen name="PopularActingScreen" component={PopularActingScreen} />
            <Stack.Screen name="LastestTvScreen" component={LastestTvScreen} />

        </Stack.Navigator>
    )
};
