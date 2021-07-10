import React, { useEffect, useState } from 'react'
import { styles } from './ListMovie.style'
import { View, ScrollView, Text } from 'react-native'
import axios from 'axios'
import SingleMovie from '../SingleMovie/SingleMovie'
import { API_KEY, HOST } from '@env'
import { LinearProgress } from 'react-native-elements';



export default function ListMovie() {

    const [listMovies, setlistMovies] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(function () {
        axios.get(`${HOST}/movie/upcoming`, {
            params: {
                api_key: API_KEY
            }
        }).then(res => setlistMovies(res.data))
            .then(() => setLoading(false))
    }, [])

    return (
        <View style={styles.view_list_movie}>
            {isLoading ? <LinearProgress color="secondary" /> :
                <ScrollView >
                    {
                        listMovies.results.map((item, index, element) =>
                            index % 3 == 0 && <View key={item.id} style={styles.flex_direc_row}>
                                <SingleMovie item={element[index]} index={index} isText={true} ></SingleMovie>
                                {element[index + 1] && <SingleMovie item={element[index + 1]} index={index + 1} isText={true}></SingleMovie>}
                                {element[index + 2] && <SingleMovie item={element[index + 2]} index={index + 2} isText={true}></SingleMovie>}
                            </View>
                        )
                    }
                </ScrollView>}
        </View>
    )
};
