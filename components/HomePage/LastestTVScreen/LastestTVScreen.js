import React from 'react'
import {Text} from 'react-native'
import ListMovie from '../../MoviePage/ListMovie/ListMovie'
import {HOST} from '@env'
import {styles} from '../HomePage/Caralouse/Caralouse.style'


export default function LastestTVScreen() {

    const LastestTVShowUrl = `${HOST}/tv/popular`
    const page = 1

    return(
        <>
        <Text style={styles.label_text}>Lastest TV Shows </Text>
       <ListMovie url={LastestTVShowUrl} page={page} isText={true} itemName={"movie"} content={"first_air_date"}> </ListMovie>
       </>
    )
};
