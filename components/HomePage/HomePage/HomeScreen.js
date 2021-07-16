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
                navigation.navigate("ListAllScreen",
                    {
                        url: populalMovierUrl,
                        itemName:"movie",
                        content:"title"
                    })
            }>Popular Movies {`>>`} </Text>
            <Caralouse url={populalMovierUrl} isText={true} itemName={"movie"} content={"title"} navigation = {navigation}></Caralouse>

            <Text style={styles.label_text_2} onPress={() =>
                navigation.navigate("ListAllScreen",
                {
                    url: nowPlayingMovieUrl,
                    itemName:"movie",
                    content:"title"
                })
            }>Now Playing {`>>`} </Text>
            <Caralouse url={nowPlayingMovieUrl} isText={true} itemName={"movie"} content={"title"} navigation = {navigation}></Caralouse>

            <Text style={styles.label_text_2} onPress={() =>
                navigation.navigate("ListAllScreen",
                {
                    url: latestTvShowUrl,
                    itemName:"movie",
                    content:"first_air_date"
                })
            }>Latest TV Shows {`>>`} </Text>
            <Caralouse url={latestTvShowUrl} isText={true} itemName={"movie"} content={"first_air_date"} navigation = {navigation}></Caralouse>

            <Text style={styles.label_text_2} onPress={() =>
                navigation.navigate("ListAllScreen",
                {
                    url: popularActorUrl,
                    itemName:"actor",
                    content:"name"
                })
            }>Popular Acting {`>>`} </Text>
            <Caralouse url={popularActorUrl} isText={true} itemName={"actor"} content={"name"} navigation = {navigation}></Caralouse>
        </ScrollView>
    )
};
