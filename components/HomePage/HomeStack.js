import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomePage/HomeScreen';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ListAllScreen from './ListAllScreen/ListAllScreen';


const Stack = createStackNavigator();

export default function HomeStack() {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ListAllScreen" component={ListAllScreen} />
            <Stack.Screen name="MovieDetailPage" component={MovieDetailPage} />
        </Stack.Navigator>
    )
};
