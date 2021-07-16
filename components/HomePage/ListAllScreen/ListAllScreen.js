import React from 'react'
import { Text } from 'react-native'
import ListMovie from '../../MoviePage/ListMovie/ListMovie'
import { HOST } from '@env'
import { styles } from '../HomePage/Caralouse/Caralouse.style'


export default function ListAllScreen({route, navigation}) {
    const {url, itemName, content} = route.params

    return (
        <>
            <ListMovie
                url={url}
                page={1} 
                isText={true}
                itemName={itemName}
                content={content}
                navigation={navigation}> </ListMovie>
        </>
    )
};
