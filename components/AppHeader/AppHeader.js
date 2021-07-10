import React from 'react'
import { Image} from 'react-native'
import { Header } from 'react-native-elements'

export default function AppHeader() {

    const Logo = () => {
        return (
            <Image source={require('../../assets/Cinemi_Panel.png')}
                style={{ height: 30, width: 142 }} />
        )
    }

    return (
        <>
            <Header
                centerComponent={<Logo/>}
                backgroundColor="black"
                backgroundImage={{ uri: '../../assets/Cinemi_name.png' }}
            />
        </>
    )
};
