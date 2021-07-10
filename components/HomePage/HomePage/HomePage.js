import React from 'react'
import { Text } from 'react-native'
import Caralouse from './Caralouse/Caralouse'
import {HOST} from '@env'
import {styles} from './Caralouse/Caralouse.style'


export default function HomePage() {

    const upcomingMovieUrl = `${HOST}/movie/upcoming`
    const populalMovierUrl = `${HOST}/movie/popular`
    const latestTvShow = `${HOST}/tv/popular`

    return(
        <>
        <Text style={styles.label_text} >Popular Movies</Text>
        <Caralouse url={populalMovierUrl} isText={true} content={""}></Caralouse>
        <Text style={styles.label_text_2}>Latest TV Shows </Text>
        <Caralouse url={latestTvShow} isText={true}></Caralouse>
        </>
    )
};
