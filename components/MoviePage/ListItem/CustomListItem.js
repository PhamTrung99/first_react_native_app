import React from 'react'
import { ListItem } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomListItem({key, title, iconName }) {

    return (
        <ListItem key={key}>
            <MaterialCommunityIcons name={iconName} size={30} />
            <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
}