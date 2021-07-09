import React from 'react'
import {styles} from './SingleMovie.style'
import {IMG_HOST} from '@env'
import { View, Text, ActivityIndicator} from 'react-native'
import { Image } from 'react-native-elements'

export default function SingleMovie({item, index}) {

    return (
        <View style={[styles.view_single_movie]}>
            <Image
                source={{ uri: `${IMG_HOST}${item.poster_path}` }}
                style={styles._img}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={styles.text_sg_mv}> {item.title}</Text>
        </View>
    )
};
