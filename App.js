import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Login  from './pages';
import TabsNavigator from './pages/tabs';
import { useState } from 'react'



export default function App() {


  const [isLogged, setIsLogged] = useState(false)

  return (
    <View style={styles.container}>

        {isLogged?<TabsNavigator/>:<Login props={useState}/>}
        <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
