import React from 'react'
import { Image, Text } from 'react-native'
import { Header } from 'react-native-elements'


export default function AppHeader() {
    return (
        <> 
            <Header 
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={()=><Image source={require('../../assets/Cinemi_Panel.png')} 
                style={{height: 30, width: 142 }}/>}
                backgroundColor= "black"
                backgroundImage={{uri: '../../assets/Cinemi_name.png'}}
            />
        </>
    )
};
