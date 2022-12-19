import React, {useState} from "react";
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import music_data from './music-data.json';
import SongCard from './SongCard';
import SearchBar from './SearchBar';


function App () {
    const [list, setList] = useState(music_data);

    const renderSong = ({item}) => <SongCard song={item}/>;

    const renderSeperator = () => <View style={styles.seperator}/>;

    const hadleSearch = text => {
        const filteredList = music_data.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });

        setList(filteredList);
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={hadleSearch}/>
                <FlatList
                keyExtractor={item => item.id} 
                data={list}
                renderItem={renderSong} 
                ItemSeparatorComponent={renderSeperator} />
        </SafeAreaView>
    );
}
    
export default App;

const styles = StyleSheet.create({
    container: {flex: 1,},
    seperator: {
        borderWidth: 1,
        borderColor: 'aqua',
    },
});
