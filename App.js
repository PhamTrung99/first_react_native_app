import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import SearchInput from './components/SearchInput/SearchInput';
import { styles } from './styles/app.style';
import ListMovie from './components/ListMovie/ListMovie';
import AppHeader from './components/AppHeader/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppHeader></AppHeader>
        <View>
          <StatusBar style="auto" />
        </View>
        <ListMovie></ListMovie>
      </View>
    </SafeAreaProvider>
  );
}


