import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const marginHorizontal = windowHeight/55
export const styles = StyleSheet.create({
    HeaderChartContainer: {
        width: windowWidth,
        height: windowHeight/14,
        paddingHorizontal: marginHorizontal,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ItemViewContainer: {
        borderRadius: 20,
        borderWidth: 2,
        marginHorizontal: marginHorizontal,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: windowHeight/17
    },
    ItemText: {
        color: 'white',

    }

});

export default styles