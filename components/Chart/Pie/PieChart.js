import { View, Text, Dimensions } from 'react-native'
import { Circle, Svg, Path } from 'react-native-svg'
import React from 'react'
import styles from './style'
import { PieChartData } from '../../../data/data'

const ListColorInPieChart = []

export default function PieChart() {

    const totalValue = PieChartData.reduce((acc, item) => acc + item.value, 0);
    let startAngle = 0;
    const renderSegments = (data) => {
        return data.map((item, index) => {
            const percentage = (item.value / totalValue) * 360;
            const endAngle = startAngle + percentage;

            const x1 = 100 + 80 * Math.cos((Math.PI / 180) * startAngle);
            const y1 = 100 + 80 * Math.sin((Math.PI / 180) * startAngle);
            const x2 = 100 + 80 * Math.cos((Math.PI / 180) * endAngle);
            const y2 = 100 + 80 * Math.sin((Math.PI / 180) * endAngle);

            const largeArcFlag = percentage > 180 ? 1 : 0;

            const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

            startAngle = endAngle;

            return (
                <Path
                    key={index}
                    d={pathData}
                    fill={getRandomColor()}
                >
                </Path>

            );
        });
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        ListColorInPieChart.push(color);
        return color;
    };
    return (
        <View style={styles.PieChartContainer}>
            <Text style={styles.PieChartTextHeader}>This is the Pie Chart using Svg Path</Text>
            <View style={styles.PieChartContainer}>
                <Svg style={{ alignSelf: 'center' }} height={200} width={200}>
                    {renderSegments(PieChartData)}
                </Svg>
            </View>
            <View style={styles.LegendPieChartContainer}>
                {
                    PieChartData.map((item, index) => {
                        const colorBullet = ListColorInPieChart[index]
                        return (
                            <View key={index} style={styles.ItemLegendContainer}>
                                <View style={styles.ItemDetailLegendContainer}>
                                    <View style={[styles.ColorBulletLegend, { backgroundColor: colorBullet }]}>
                                    </View>
                                    <Text style={styles.TextBulletLegend}>{item.title}</Text>

                                </View>
                                <Text style={styles.TextValueLegend}>{item.value}%</Text>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    )

}

