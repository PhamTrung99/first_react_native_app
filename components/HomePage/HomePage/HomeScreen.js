import React from 'react'
import { Text, ScrollView } from 'react-native'
import Caralouse from './Caralouse/Caralouse'
import { HOST } from '@env'
import { styles } from './Caralouse/Caralouse.style'


export default function HomePage({navigation}) {

    const upcomingMovieUrl = `${HOST}/movie/upcoming`
    const populalMovierUrl = `${HOST}/movie/popular`
    const nowPlayingMovieUrl = `${HOST}/movie/now_playing`
    const latestTvShowUrl = `${HOST}/tv/popular`
    const popularActorUrl = `${HOST}/person/popular`

    return (
        <ScrollView>
            <Text style={styles.label_text} onPress={()=>navigation.navigate("PopularMovieScreen")}>Popular Movies {`>>`} </Text>
            <Caralouse url={populalMovierUrl} isText={true} itemName={"movie"}></Caralouse>

            <Text style={styles.label_text_2}>Now Playing </Text>
            <Caralouse url={nowPlayingMovieUrl} isText={true} itemName={"movie"}></Caralouse>

            <Text style={styles.label_text_2}>Latest TV Shows </Text>
            <Caralouse url={latestTvShowUrl} isText={true} itemName={"movie"}></Caralouse>

            <Text style={styles.label_text_2}>Popular Acting</Text>
            <Caralouse url={popularActorUrl} isText={false} itemName={"actor"}></Caralouse>
        </ScrollView>
    )
};
