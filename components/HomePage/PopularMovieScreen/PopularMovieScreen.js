import React from 'react'
import {Text} from 'react-native'
import ListMovie from '../../MoviePage/ListMovie/ListMovie'
import {HOST} from '@env'


export default function PopularMovieScreen() {

    const populalMovierUrl = `${HOST}/movie/popular`
    const page = 1

    return(
        <>
        <Text>Popular movie</Text>
       <ListMovie url={populalMovierUrl} page={page} isText={true} itemName={"movie"} content={"title"}> </ListMovie>
       </>
    )
};
