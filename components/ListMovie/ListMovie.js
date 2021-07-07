import React from 'react'
import { styles } from './ListMovie.style'
import { View, ActivityIndicator, Text } from 'react-native'
import { Image } from 'react-native-elements'
import axios from 'axios'
import { testData } from '../../stores/movies.context'
import { IMG_HOST } from '@env'
import { SimpleCard } from "@paraboly/react-native-card";



export default function ListMovie() {
    const listMovies = async () => {
        return await axios.get(`${HOST}/movie/upcoming`, {

        })
    }


    return (
        <View style={styles.view_list_movie}>
            {
                testData.results.map(item =>
                    // <View key={item.id} style={styles.view_single_movie}>
                    //     <Image
                    //         //source={{ uri: `${IMG_HOST}${item.poster_path}` }}
                    //         source={{ uri: `${IMG_HOST}/qIicLxr7B7gIt5hxZxo423BJLlK.jpg` }}
                    //         style={{ width: 100, height: 100 }}
                    //         PlaceholderContent={<ActivityIndicator />}
                    //     />
                    // </View>
                    <SimpleCard
                        title="Custom width & dynamic height simple card: Multiple Lines"
                        styles={{ width: 200 }}
                    ></SimpleCard>
                )

            }
        </View>
    )
};
