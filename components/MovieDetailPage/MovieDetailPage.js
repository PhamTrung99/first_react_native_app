import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { HOST, API_KEY, IMG_HOST } from '@env'
import { LinearProgress } from 'react-native-elements'
import axios from 'axios';

export default function MovieDetailPage({ route, navigation }) {

    const { movieId } = route.params
    const url = `${HOST}/movie/${movieId}`
    const [isLoading, setisLoading] = useState(true)
    const [singleMovie, setsingleMovie] = useState()

    useEffect(() => {
        axios.get(url, {
            params: {
                api_key: API_KEY
            }
        }).then(res => {
            setsingleMovie(res.data)
            setisLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading ? <LinearProgress color="secondary" /> :
                <ImageHeaderScrollView
                    maxHeight={500}
                    minHeight={0}
                    headerImage={{ uri:`${IMG_HOST}${singleMovie.poster_path}`}}
                >
                    <View style={{ height: 1000 }}>
                        <TriggeringView onHide={() => console.log("text hidden")}>
                            <Text>S{singleMovie.title}</Text>
                        </TriggeringView>
                    </View>
                </ImageHeaderScrollView>
            }
        </>
    )
};
