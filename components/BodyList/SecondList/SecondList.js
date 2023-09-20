import React from 'react';
import { View, Text, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { SongData } from '../../../data/data';
import styles from './style';


export default function SecondList() {
  const [data, setData] = (SongData)
  
  const moveItem = (fromIndex, toIndex) => {
    const updatedData = [...data];
    const [movedItem] = updatedData.splice(fromIndex, 1);
    updatedData.splice(toIndex, 0, movedItem);
    setData(updatedData);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          const newIndex = (index + 1) % data.length; // Calculate new index
          moveItem(index, newIndex);
        }}
      >
        <View
          style={{
            padding: 16,
            backgroundColor: 'lightgray',
            marginVertical: 8,
          }}
        >
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.SecondListContainer}>
      <Text style={styles.TextHeaderSecondList}>Top Artist</Text>
      <View style={styles.ItemContainer}>
        {
          SongData.map((item, index) => {
            return (
                <Pressable key={index} style={styles.ItemSongContainer}>
                    <View style={styles.IndexImageContainer}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                            <Image style={{width: 50, height: 50, alignSelf: 'center', borderRadius: 50, marginRight: 10}} alt={item.title} src={item.artwork}></Image>
                            <View style={{alignSelf: 'center'}}>
                                <Text style={{fontSize: 20, fontWeight: '400', color: 'white'}}>{item.artist}</Text>
                                
                            </View>
                        </View>
                    </View>
                    <Text style={styles.ButtonItemDetail}>...</Text>
                </Pressable>
            )
        })
        }
      </View>
     </View>
  );
}
