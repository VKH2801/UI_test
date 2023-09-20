import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    SecondListContainer: {
        marginVertical: 40

    },
    TextHeaderSecondList: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    ItemContainer: {

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