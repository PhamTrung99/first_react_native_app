import React from 'react'
import { Header } from 'react-native-elements'


export default function AppHeader() {
    return (
        <> 
            <Header 
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'NETFLIX', style: { color: '#fff' } }}
                backgroundColor= "black"
            />
        </>
    )
};
