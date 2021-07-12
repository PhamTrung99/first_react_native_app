import React from 'react'
import { Text, ScrollView } from 'react-native'
import Caralouse from './Caralouse/Caralouse'
import { HOST } from '@env'
import { styles } from './Caralouse/Caralouse.style'


export default function HomePage({ navigation }) {

    const upcomingMovieUrl = `${HOST}/movie/upcoming`
    const populalMovierUrl = `${HOST}/movie/popular`
    const nowPlayingMovieUrl = `${HOST}/movie/now_playing`
    const latestTvShowUrl = `${HOST}/tv/popular`
    const popularActorUrl = `${HOST}/person/popular`

    return (
        <ScrollView>
            <Text style={styles.label_text} onPress={() =>
                navigation.navigate("PopularMovieScreen")
            }>Popular Movies {`>>`} </Text>
            <Caralouse url={populalMovierUrl} isText={true} itemName={"movie"} content={"title"}></Caralouse>

            <Text style={styles.label_text_2} onPress={() =>
                navigation.navigate("NowPlayingScreen")
            }>Now Playing {`>>`} </Text>
            <Caralouse url={nowPlayingMovieUrl} isText={true} itemName={"movie"} content={"title"}></Caralouse>

            <Text style={styles.label_text_2} onPress={() =>
                navigation.navigate("LastestTvScreen")
            }>Latest TV Shows {`>>`} </Text>
            <Caralouse url={latestTvShowUrl} isText={true} itemName={"movie"} content={"first_air_date"}></Caralouse>

            <Text style={styles.label_text_2} onPress={() =>
                navigation.navigate("PopularActingScreen")
            }>Popular Acting {`>>`} </Text>
            <Caralouse url={popularActorUrl} isText={true} itemName={"actor"} content={"name"}></Caralouse>
        </ScrollView>
    )
};
