import React, { useEffect, useState } from 'react'
import { styles } from './ListMovie.style'
import { View, ScrollView, Text } from 'react-native'
import axios from 'axios'
import SingleMovie from '../SingleMovie/SingleMovie'
import { API_KEY, HOST } from '@env'
import { LinearProgress } from 'react-native-elements';
import { Button } from 'react-native-elements';


export default function ListMovie({url,page}) {

    const [listMovies, setlistMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isLoadMoreLoading, setisLoadMoreLoading] = useState(false)
    const [pageNumber, setpageNumber] = useState(page)
    let totalPage = 0;

    useEffect(function () {
        axios.get(url, {
            params: {
                api_key: API_KEY,
                page: pageNumber
            }
        }).then(res => {
            setlistMovies([...listMovies,...res.data.results])
            totalPage = res.data.total_pages
        }).then(() => {
            setLoading(false)
            setisLoadMoreLoading(false)
        })
    }, [pageNumber])

    const handleBntLoadMore = () =>{
        setisLoadMoreLoading(true)
        setpageNumber(pageNumber+1)
    }

    return (
        <View style={styles.view_list_movie}>
            {isLoading ? <LinearProgress color="secondary" /> :
                <ScrollView  >
                    {
                        listMovies.map((item, index, element) =>
                            index % 3 == 0 && <View key={item.id} style={styles.flex_direc_row}>
                                <SingleMovie item={element[index]} index={index} isText={true} itemName={"movie"} ></SingleMovie>
                                {element[index + 1] && <SingleMovie item={element[index + 1]} index={index + 1} isText={true} itemName={"movie"}></SingleMovie>}
                                {element[index + 2] && <SingleMovie item={element[index + 2]} index={index + 2} isText={true} itemName={"movie"}></SingleMovie>}
                            </View>
                        )
                    }
                     <Button title="More >>>" type="outline" loading={isLoadMoreLoading} onPress={()=>handleBntLoadMore()}/>
                </ScrollView>}
        </View>
    )
};
