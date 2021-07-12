import React from 'react'
import { styles } from './SingleMovie.style'
import { IMG_HOST } from '@env'
import { View, Text, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

export default function SingleMovie({ item, index, isText, itemName , content}) {

    const uriMovie = `${IMG_HOST}${item.poster_path}`
    const uriActor = `${IMG_HOST}${item.profile_path}`

    return (
        <View style={[styles.view_single_movie]}>
            <Image
                source={{ uri: itemName === "movie" ? uriMovie : uriActor}}
                style={styles._img}
                PlaceholderContent={<ActivityIndicator />}
            />
            {isText && <Text style={styles.text_sg_mv}>
                {item[`${content}`]}
            </Text>}
        </View>
    )
};
