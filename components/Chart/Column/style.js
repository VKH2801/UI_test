import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    ColumnChartContainer: {
        height: windowHeight/3,
        marginTop: windowHeight/35,
        paddingHorizontal: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    ColumnChartBarContainer: {
        alignItems: 'center',
        flex: 1,
        paddingBottom: 10,
    },
    ColumnChartBar: {
        width: 30,
        backgroundColor: 'orange',
        marginHorizontal: 20,
    },
    ColumnChartLabelHeader: {
        marginTop: 0,
        alignSelf: 'center',
        color: 'yellow',
    },
    ColumnChartLabel: {
        alignSelf: 'center',
        color: 'white',
    }

});

export default styles;