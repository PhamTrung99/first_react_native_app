import React, { useState } from 'react'
import { ListItem } from 'react-native-elements'
import CustomListItem from '../ListItem/CustomListItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ListItemContent = ({ iconName, iconSize, title }) => {
    return (
        <>
            <MaterialCommunityIcons name={iconName} size={iconSize} />
            <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
            </ListItem.Content>
        </>
    )
}

export default function ListMenu({ list, listItemName}) {

    const [isExpanded, setisExpanded] = useState(false)

    const handlePressAccordion = () => {
        setisExpanded(!isExpanded);
    }

    return (
        <ListItem.Accordion
            content={<ListItemContent iconName="menu" iconSize={30} title="All Genres" />}
            isExpanded={isExpanded}
            onPress={handlePressAccordion}
        >
            {list.map((l, i) => (
                <CustomListItem key={i} title={l[`${listItemName}`]} iconName={"arch"} />
            ))}
        </ListItem.Accordion>
    )
}
