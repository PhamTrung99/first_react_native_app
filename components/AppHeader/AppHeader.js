import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'
import {styles} from './AppHeader.style'


export default function AppHeader() {
    return (
        <View>
            <Header 
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'NETFLIX', style: { color: '#fff' } }}
                backgroundColor= "black"
            />
        </View>
    )
};
