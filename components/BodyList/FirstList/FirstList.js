import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { SongData } from '../../../data/data';

export default function FirstList() {
  return (
    <View style={styles.FirstListContainer}>
      <Text style={styles.TextHeaderFirstList}>Top Song</Text>
      <View style={styles.SongListContainer}>
        {
            SongData.map((item, index) => {
                return (
                    <View key={index} style={styles.ItemSongContainer}>
                        <View style={styles.IndexImageContainer}>
                            <View style={{justifyContent: 'space-between', alignItems: 'center', marginRight: 7}}>
                                <Text style={{fontSize: 15, fontWeight: '300', color: 'white'}}>{item.id}</Text>
                                <Text style={{fontSize: 20, color: 'white'}}>-</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                                <Image style={{width: 50, height: 50, alignSelf: 'center', borderRadius: 10, marginRight: 10}} alt={item.title} src={item.artwork}></Image>
                                <View style={{alignSelf: 'center'}}>
                                    <Text style={{fontSize: 20, fontWeight: '400', color: 'white'}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, fontWeight: '300', color: 'white'}}>{item.artist}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.ButtonItemDetail}>...</Text>
                    </View>
                )
            })
        }
      </View>
     </View>
  );
}
