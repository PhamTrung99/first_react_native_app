import React from 'react'
import { styles } from './ListMovie.style'
import { View, ActivityIndicator, Text } from 'react-native'
import { Image } from 'react-native-elements'
import axios from 'axios'
import { testData } from '../../stores/movies.context'
import { IMG_HOST } from '@env'



export default function ListMovie() {
    const listMovies = async () => {
        return await axios.get(`${HOST}/movie/upcoming`, {

        })
    }


    return (
        <View style={styles.view_list_movie}>
            {
                testData.results.map(item =>
                    <View key={item.id} style={styles.view_single_movie}>
                        <Image
                            //source={{ uri: `${IMG_HOST}${item.poster_path}` }}
                            source={{ uri: `${IMG_HOST}/qIicLxr7B7gIt5hxZxo423BJLlK.jpg` }}
                            style={{ width: 100, height: 100 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                )

            }
        </View>
    )
};
