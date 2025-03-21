import {StyleSheet, View} from 'react-native';
import React, {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber/native';

import useControls from 'r3f-native-orbitcontrols';
import Trigger from './src/components/Trigger';
import Loader from './src/components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Model from './src/screens/Model';
import ThreeScene from './src/screens/Scean1';


const  App  = () => {


  return (
    <SafeAreaView style={styles.container}>
   
       <ThreeScene/>
    
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6545A4',
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: '#051E47',
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 28,
    color: '#3F6900',
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3F6900',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
