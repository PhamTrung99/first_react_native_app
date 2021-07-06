import React, { useState } from 'react';
import { SearchBar, Text } from 'react-native-elements';

export default function SearchInput() {
  const [searchText, setsearchText] = useState('');

  const updateSearchText =(Text)=>{
    setsearchText(Text)
  }

  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearchText}
        value={searchText}
      />
      <Text>{searchText}</Text>
    </>
  )
};
