import React from 'react'
import {Text} from 'react-native'
import ListMovie from '../../MoviePage/ListMovie/ListMovie'
import {HOST} from '@env'


export default function LastestTVScreen() {

    const LastestTVShowUrl = `${HOST}/tv/popular`
    const page = 1

    return(
        <>
        <Text>Lastest TV Shows </Text>
       <ListMovie url={LastestTVShowUrl} page={page} isText={true} itemName={"movie"} content={"first_air_date"}> </ListMovie>
       </>
    )
};
