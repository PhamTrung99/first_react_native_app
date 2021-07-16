import React from 'react'
import { styles } from './SingleMovie.style'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import {HOST, API_KEY, IMG_HOST} from '@env' 

export default function SingleMovie({ item, index, isText, itemName, content, navigation }) {

    const uriMovie = `${IMG_HOST}${item.poster_path}`
    const uriActor = `${IMG_HOST}${item.profile_path}`

    const handleSgMoviePress = () => {
        navigation.navigate('MovieDetailPage',{
            movieId: item.id
        })
    }

    return (
        <View style={[styles.view_single_movie]} >
            <TouchableOpacity onPress={()=>handleSgMoviePress()}>
                <Image
                    source={{ uri: itemName === "movie" ? uriMovie : uriActor }}
                    style={styles._img}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </TouchableOpacity>
            {isText && <Text style={styles.text_sg_mv}>
                {item[`${content}`]}
            </Text>}
        </View>
    )
};
