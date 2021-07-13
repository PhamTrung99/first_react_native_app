import React, { useState, useEffect } from 'react'
import {  View } from 'react-native'
import { HOST, API_KEY } from '@env'
import { LinearProgress } from 'react-native-elements';
import ListMenu from '../ListMenu/ListMenu';



export default function MoviePage() {
    const url = `${HOST}/genre/movie/list`
    const [listGenres, setlistGenres] = useState([])
    const [isGenresLoading, setisGenresLoading] = useState(true)

    useEffect(function () {
        axios.get(url, {
            params: {
                api_key: API_KEY
            }
        }).then(res => setlistGenres(res.data.genres)
        ).then(() => setisGenresLoading(false))
    }, [])

    return (
        <View>
            {isGenresLoading ? <LinearProgress color="secondary" /> :
                <ListMenu
                    list={listGenres}
                    listItemName={"name"}
                    title="All Genres"
                    iconName="menu"
                />}
        </View>
    )
};
