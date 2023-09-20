import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style.js'
import backArrow from '../../assets/back.png'


export default function Header() {
  return (
    <View style={styles.HeaderContainer}>
      <View style={{}}>
        <Image 
          source={backArrow}
          style={styles.ButtonGoBack}
        ></Image> 
      </View>
      <Text style={styles.TextHeader}>The first test in UI</Text>
      <View style={{}}></View>
     </View>
  );
}
