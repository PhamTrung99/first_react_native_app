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
      <View style={[styles.container, {flex: 14}]}>
        <View style={[styles.view_header, {flex: 1.4}]}>
          <AppHeader></AppHeader>
        </View>
        <View style={[styles.view_list_movie, {flex: 11.6}]}>
          <ListMovie></ListMovie>
        </View>
        <View style={[{flex: 1}]}>

        </View>
      </View>
    </SafeAreaProvider>
  );
}


