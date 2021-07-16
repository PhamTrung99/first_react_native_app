import React from 'react'
import {IMG_HOST} from '@env'
import { Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
import {styles} from './SearchView.style'

export default function SearchView({ list, imageContent, titleContent, subTitleContent}) {
    return (
        <ScrollView >
            {
                list.map((l, i) => (
                    <ListItem key={i} containerStyle={styles.item_container}>
                        <Avatar size="large" source={{ uri: `${IMG_HOST}/${l[`${imageContent}`]}` }} />
                        <ListItem.Content >
                            <ListItem.Title style={styles.item_title}>{l[`${titleContent}`]}</ListItem.Title>
                            <ListItem.Subtitle style={styles.item_title}>{l[`${subTitleContent}`]}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>
    )
};
