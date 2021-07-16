import React, { useState } from 'react'
import { ListItem } from 'react-native-elements'
import CustomListItem from '../ListItem/CustomListItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './ListMenu.style'

export const ListItemContent = ({ iconName, title }) => {
    return (
        <>
            <MaterialCommunityIcons name={iconName} style={styles.icon_in_item} />
            <ListItem.Content style={styles.container_style}>
                <ListItem.Title style={styles.item_text}>{title}</ListItem.Title>
            </ListItem.Content>
        </>
    )
}

export default function ListMenu({ list, title, listItemName, listIconName, navigation}) {

    const [isExpanded, setisExpanded] = useState(true)

    const handlePressAccordion = () => {
        setisExpanded(!isExpanded);
    }

    return (
        <ListItem.Accordion
            animation={{
                type: "spring",
                duration: 450
            }}
            containerStyle={styles.container_style}
            content={<ListItemContent iconName="menu" title={title} />}
            isExpanded={isExpanded}
            onPress={handlePressAccordion}
        >
            {list.map((l, i) => (
                <CustomListItem key={i} title={l[`${listItemName}`]} iconName={listIconName[i]} navigation={navigation} idGenres={l.id}/>
            ))}
        </ListItem.Accordion>
    )
}
