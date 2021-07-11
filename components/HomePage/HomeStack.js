import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomePage/HomeScreen';
import PopularMovieScreen from './PopularMovieScreen/PopularMovieScreen';

const Stack = createStackNavigator();

export default function HomeStack() {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PopularMovieScreen" component={PopularMovieScreen} />

        </Stack.Navigator>
    )
};
