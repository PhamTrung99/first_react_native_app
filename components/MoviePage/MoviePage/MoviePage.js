import React, { useState, useEffect } from 'react'
import { HOST, API_KEY } from '@env'
import { LinearProgress } from 'react-native-elements';
import { ScrollView } from 'react-native';
import ListMenu from '../ListMenu/ListMenu';
import axios from 'axios'


export default function MoviePage({navigation}) {
    const url = `${HOST}/genre/movie/list`
    const [listGenres, setlistGenres] = useState([])
    const [isGenresLoading, setisGenresLoading] = useState(true)

    const listIconName = ["kabaddi","earth","dog", "chat-sleep", "emoticon-cool"
    ,"chart-tree", "leak", "human-male-child", "human-handsup", "history", "emoticon-devil"
    , "music-clef-treble", "head-snowflake", "heart-pulse", "alien", "television"
    ,"skull", "pistol", "account-cowboy-hat"]

    useEffect(function () {
        axios.get(url, {
            params: {
                api_key: API_KEY
            }
        }).then(res => setlistGenres(res.data.genres)
        ).then(() => setisGenresLoading(false))
    }, [])

    return (
        <ScrollView>
            {isGenresLoading ? <LinearProgress color="secondary" /> :
                <ListMenu
                    list={listGenres}
                    listItemName={"name"}
                    title="All Genres"
                    iconName="menu"
                    listIconName={listIconName}
                    navigation = {navigation}
                />}
        </ScrollView>
    )
};
