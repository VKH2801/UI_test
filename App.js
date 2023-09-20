import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, } from 'react-native';
import Header from './components/Header/Header.js';
import HeaderChart from './components/Chart/Header/HeaderChart.js';
import ColumnChart from './components/Chart/Column/ColumnChart.js';
import PieChart from './components/Chart/Pie/PieChart.js';
import FirstList from './components/BodyList/FirstList/FirstList.js';
import SecondList from './components/BodyList/SecondList/SecondList.js';
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;
export default function App() {
  return (
    <ScrollView 
      stickyHeaderIndices={[0,1]} 
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, alignContent: 'center', backgroundColor: 'black',paddingBottom: 20}}>
      <StatusBar barStyle='light-content'></StatusBar>
      <Header></Header>
      <HeaderChart></HeaderChart>
      <ColumnChart></ColumnChart>
      <PieChart></PieChart>
      <FirstList></FirstList>
      <SecondList></SecondList>
    </ScrollView>
  );
}
