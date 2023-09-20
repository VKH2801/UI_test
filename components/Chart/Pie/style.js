import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    PieChartContainer: {
        width: windowWidth,
        paddingHorizontal: 10,
        marginTop: 50,
        alignSelf: 'center',
        alignContent: 'center',
        marginBottom: 60,
    },
    PieChartTextHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        marginBottom: 10,
    },
    ItemLegendContainer: {
        windowWidth: windowWidth,
        height: 40,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    ItemDetailLegendContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ColorBulletLegend: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginVertical: 12,
        marginRight: 10,
        borderColor: 'lightgrey',
        borderWidth: 0.4,
    },
    TextBulletLegend: {
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    TextValueLegend: {
        color: '#FFFFFF',
        alignSelf: 'center',
    }
});

export default styles