import React from 'react'
import { styles } from './ListMovie.style'
import { View, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

export default function ListMovie() {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg'

    

    return (
        <View style={styles.view_list_movie}>
            <View>
                <Image
                    source={{ uri: imageUrl }}
                    style={{ width: 150, height: 150 }}
                    PlaceholderContent={<ActivityIndicator/>}
                />
            </View>
        </View>
    )
};
