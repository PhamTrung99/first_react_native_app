import React, { useEffect, useState } from 'react'
import { styles } from './Caralouse.style'
import { View, ScrollView, Text } from 'react-native'
import axios from 'axios'
import { API_KEY } from '@env'
import { LinearProgress } from 'react-native-elements';
import SingleMovie from '../../../MoviePage/SingleMovie/SingleMovie';


export default function Caralouse(props) {

    const [listMovies, setlistMovies] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(function () {
        axios.get(props.url, {
            params: {
                api_key: API_KEY
            }
        }).then(res => setlistMovies(res.data))
            .then(() => setLoading(false))
    }, [])

    return (
        <View>
            {isLoading ? <LinearProgress color="secondary" /> :
                <ScrollView horizontal={true}>
                    {
                        listMovies.results.map((item, index) =>
                           <View key={item.id} style={styles.flex_direc_row}>
                                <SingleMovie item={item} index={index} isText={props.isText}></SingleMovie>
                            </View>
                        )
                    }
                </ScrollView>}
        </View>
    )
};
