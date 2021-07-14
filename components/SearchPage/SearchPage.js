import React, { useState, useEffect } from 'react'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'
import axios from 'axios'
import { HOST, API_KEY, IMG_HOST } from "@env"
import { LinearProgress, Avatar, ListItem } from 'react-native-elements';
import SearchView from './SearchView/SearchView';
import { styles } from './SearchPage.style'
import ViewCheckBox from './ViewCheckBox/ViewCheckBox';


export default function SearchPage() {

    const [searchText, setsearchText] = useState(" ")
    const [isLoading, setisLoading] = useState(true)
    const [lsMovie, setlsMovie] = useState([])

    const [cbMovie, setcbMovie] = useState(true)
    const [cbTV, setcbTV] = useState(false)
    const [cbActor, setcbActor] = useState(false)


    const urlSearchMovie = `${HOST}/search/movie`
    const urlSearchTvShow = `${HOST}/search/tv`
    const urlSearchPerson = `${HOST}/search/person`

    const urlSearch = (cbMovie && urlSearchMovie) || (cbTV && urlSearchTvShow) || (cbActor && urlSearchPerson)
    const imageContent = (cbMovie && "poster_path") || (cbTV && "poster_path") || (cbActor && "profile_path")
    const titleContent = (cbMovie && "title") || (cbTV && "name") || (cbActor && "name")
    const subTitleContent = (cbMovie && "release_date") || (cbTV && "first_air_date") || (cbActor && "popularity")

    const updateSearch = (searchText) => {
        setsearchText(searchText)
    }

    useEffect(() => {
        setisLoading(true)
        axios.get(urlSearch, {
            params: {
                api_key: API_KEY,
                query: searchText
            }
        }).then(res => setlsMovie(res.data.results))
            .then(setisLoading(false))
    }, [searchText, cbMovie, cbTV, cbActor])

    return (
        <>
            <SearchBar
                onCancel={() => setlsMovie([])}
                placeholder="Type here ..."
                onChangeText={updateSearch}
                inputStyle={{ color: "white" }}
                value={searchText}
                showLoading={true}
                containerStyle={{ backgroundColor: "black" }}
                underlineColorAndroid="#8a137c"
                placeholderTextColor="grey"
                platform="ios"
                cancelButtonProps={{ color: "#c3132a", buttonTextStyle: { fontWeight: "bold" } }}
                searchIcon={{ color: "#711297", size: 30 }}
            ></SearchBar>

            <ViewCheckBox
                cbMovie={cbMovie}
                setcbMovie={setcbMovie}
                cbTV={cbTV}
                setcbTV={setcbTV}
                cbActor={cbActor}
                setcbActor={setcbActor} />

            {isLoading ? <LinearProgress color="secondary" /> :
                <SearchView
                    imageContent={imageContent}
                    list={lsMovie}
                    titleContent={titleContent}
                    subTitleContent={subTitleContent}
                />}
        </>
    )
};
