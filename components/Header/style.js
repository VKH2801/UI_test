import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageSize = windowHeight/50;

export const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight/15,
        top: 0,
        backgroundColor: 'black',
    },
    ButtonGoBack: {
        height: imageSize,
        width: imageSize,
        alignSelf: 'center',
        marginLeft: imageSize,
    },

    TextHeader: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 23,
    },
});
export default styles;