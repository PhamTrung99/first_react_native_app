import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'


export default function AppHeader() {
    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
    )
};
