import React from 'react'
import { Text } from 'react-native'
import ListMovie from '../ListMovie/ListMovie'
import { HOST } from '@env'
import {styles} from './MovieListScreen.style'


export default function MovieListScreen({ route, navigation }) {

    const { genresName, idGenres } = route.params
    const url = `${HOST}/discover/movie`


    return (
        <>
            <Text style={styles.header_text}>{genresName} Movies</Text>
            <ListMovie
                url={url}
                page={1}
                isText={true}
                itemName={"movie"}
                content={"title"}
                genres_id={idGenres}></ListMovie>
        </>
    )
};
