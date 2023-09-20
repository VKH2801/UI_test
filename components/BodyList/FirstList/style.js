import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    FirstListContainer: {
        width: windowWidth,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextHeaderFirstList: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    SongListContainer: {
        paddingTop: 15,
        justifyContent: 'space-between',
        
    },
    ItemSongContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    IndexImageContainer: {
        flexDirection: 'row'
    },
    ButtonItemDetail: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
    }

});

export default styles;