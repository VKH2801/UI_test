import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ChartDataMonthly } from '../../../data/data';
import {styles} from './style';

export default function ColumnChart() {
  const maxValueKpi = Math.max(...ChartDataMonthly.map((item) => item.kpi));

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginBottom: 20,
      }}
    >
    <View style={styles.ColumnChartContainer}>
      {
        ChartDataMonthly.map((item, index) => (
          <View key={index} style={styles.ColumnChartBarContainer}>
            <Text style={styles.ColumnChartLabelHeader}>{item.kpi}%</Text>
            <View style={[styles.ColumnChartBar, 
              {
                height: (item.kpi / maxValueKpi) * 200 + 15
              },
              {
                backgroundColor: item.kpi === maxValueKpi ? 'yellow' : 'orange', 
                
              }]}>
              
            </View>
            <Text style={styles.ColumnChartLabel}>Day {index + 1}</Text>
          </View>
        ))
      }      
     </View>
     </ScrollView>
  );
}
