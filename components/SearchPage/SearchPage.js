import React,{useState} from 'react'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'

export default function SearchPage() {

    const [searchText, setsearchText] = useState("")

    const updateSearch = (searchText)=>{
        setsearchText(searchText)
    }

    return (
        <SearchBar
            placeholder="Type here ..."
            onChangeText={updateSearch}
            inputStyle={{color: "white"}}
            value={searchText}
            showLoading={true}
            containerStyle={{backgroundColor: "black"}}
            underlineColorAndroid="#8a137c"
            placeholderTextColor="grey"
            platform="ios"
            cancelButtonProps={{color: "#c3132a", buttonTextStyle: {fontWeight: "bold"}}}
            searchIcon={{color: "#711297", size: 30}}
        ></SearchBar>
    )
};
