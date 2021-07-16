import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/app.style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppHeader from './components/AppHeader/AppHeader';
import BottomTabNaviga from './routes/BottomTab.Naviga';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';


export default function App() {

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { flex: 14 }]}>
        <View style={[styles.view_header, { flex: 1.4 }]}>
          <AppHeader ></AppHeader>
        </View>
        <View style={[styles.view_middle, { flex: 12.6 }]}>
          <NavigationContainer theme={DarkTheme}>
            <BottomTabNaviga />
          </NavigationContainer>
        </View>
      </View>
    </SafeAreaProvider>
  );
}


