import React, { useState, useEffect } from 'react'
import { styles } from '../SearchPage.style'
import { CheckBox } from 'react-native-elements'
import { View } from 'react-native'


export default function ViewCheckBox({ cbMovie, cbActor, cbTV, setcbMovie, setcbActor, setcbTV }) {

    const handleCBOnPress = (check1, check2, check3)=>{
        setcbMovie(check1)
        setcbActor(check2)
        setcbTV(check3)
    }

    return (
        <View style={{ flexDirection: "row", height: 10, paddingBottom: 35 }}>
            <CheckBox
                containerStyle={styles.cb_container}
                textStyle={styles.cb_text}
                title='Movie'
                checkedColor="grey"
                onPress={() =>handleCBOnPress(true, false, false)}
                checked={cbMovie}
            />
            <CheckBox
                containerStyle={styles.cb_container}
                textStyle={styles.cb_text}
                title='Actor'
                checkedColor="grey"
                onPress={() =>handleCBOnPress(false, true, false)}
                checked={cbActor}
            />
            <CheckBox
                containerStyle={styles.cb_container}
                textStyle={styles.cb_text}
                title='TV'
                checkedColor="grey"
                onPress={() =>handleCBOnPress(false, false, true)}
                checked={cbTV}
            />
        </View>

    )
};
