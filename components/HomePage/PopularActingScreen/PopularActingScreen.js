import React from 'react'
import {Text} from 'react-native'
import ListMovie from '../../MoviePage/ListMovie/ListMovie'
import {HOST} from '@env'
import {styles} from '../HomePage/Caralouse/Caralouse.style'

export default function PopularActingScreen() {

    const PopularActingUrl = `${HOST}/person/popular`
    const page = 1

    return(
        <>
        <Text style={styles.label_text}>Popular Acting </Text>
       <ListMovie url={PopularActingUrl} page={page} isText={true} itemName={"actor"} content={"name"}> </ListMovie>
       </>
    )
};
