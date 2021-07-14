import React from 'react'
import {IMG_HOST} from '@env'
import { Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default function SearchView({ list, imageContent, titleContent, subTitleContent}) {
    return (
        <ScrollView>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar size="large" source={{ uri: `${IMG_HOST}/${l[`${imageContent}`]}` }} />
                        <ListItem.Content>
                            <ListItem.Title>{l[`${titleContent}`]}</ListItem.Title>
                            <ListItem.Subtitle>{l[`${subTitleContent}`]}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>
    )
};
