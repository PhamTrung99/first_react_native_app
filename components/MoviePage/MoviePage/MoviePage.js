import React from 'react'
import ListMovie from '../ListMovie/ListMovie'
import {HOST} from '@env'

export default function MoviePage() {

    const url = `${HOST}/movie/upcoming`
    const page = 1

    return (
            <ListMovie url={url} page={page}></ListMovie>
    )
};
