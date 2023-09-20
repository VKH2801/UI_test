import { View, Text, FlatList, TouchableOpacity  } from 'react-native'
import React, {useState} from 'react'
import {styles} from './style';
import {MonthData} from '../../../data/data';


const HeaderChart = () => {
    const [selectedId, setSelectedId] = useState(1);

    const HandleItemClick = (i) => {
      setSelectedId(i.id)
    }

    const renderItem = ({item}) => {
        

        return (
          <TouchableOpacity  style={[styles.ItemViewContainer, {borderColor: selectedId === item.id ? '#F6EB00' : '#000'}]} onPress={() => HandleItemClick(item)}>
            <Text style={styles.ItemText}>{item.title}</Text>
          </TouchableOpacity>
        )
    }
  return (
    <View style={styles.HeaderChartContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={MonthData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      ></FlatList>
    </View>
  )
}

export default HeaderChart