import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        marginRight: 5,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    info_container: { 
        flex: 1,
        flexDirection: 'row',
        
    },
    artist: {},
    year: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12,
    },
    content_container: {
        flexDirection: 'row',
    },
    stock_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        
    },
    stock_title: {
        color: 'red',
        fontSize: 12,
    },
});