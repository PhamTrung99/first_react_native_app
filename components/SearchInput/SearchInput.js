import React, { useState } from 'react';
import { View } from 'react-native';
import { SearchBar, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { styles } from './searchInput.style';

export default function SearchInput() {
  const [searchText, setsearchText] = useState('');

  const updateSearchText = (Text) => {
    setsearchText(Text)
  }

  return (
    <>
      <View style={styles.view_search}>
        <View style={styles.view_search_input}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearchText}
            value={searchText}
          />
        </View>
        <View style={styles.view_bnt_search}>
          <Button
            title="Save"
            type="solid"
            buttonStyle={styles.bnt_search}
          />
        </View>
      </View>
    </>
  )
};
