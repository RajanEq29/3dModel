import {StyleSheet, View} from 'react-native';
import React, {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber/native';

import useControls from 'r3f-native-orbitcontrols';

import {SafeAreaView} from 'react-native-safe-area-context';
import { Loader } from '@react-three/drei';
import Model from './Model';
import Trigger from '../components/Trigger';



const  ThreeScene  = () => {
  const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls enablePan={false} enableZoom />
          <directionalLight position={[1, 0, 0]} args={['white', 1.5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 1.5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 1.5]} />
          <directionalLight position={[0, 0, -1]} args={['white', 1.5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 1.5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 1.5]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
    </SafeAreaView>
  );
};
export default ThreeScene;

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


