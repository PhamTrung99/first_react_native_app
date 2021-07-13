import React from 'react'
import { ListItem } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DarkTheme } from 'react-native-paper';
import {styles} from '../ListMenu/ListMenu.style'

export default function CustomListItem({ title, iconName }) {

    return (
        <ListItem containerStyle={styles.container_style}>
            <MaterialCommunityIcons name={iconName} style={styles.icon_in_item} />
            <ListItem.Content>
                <ListItem.Title style={styles.item_text}>{title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron iconStyle={styles.item_chervon}/>
        </ListItem>
    )
}