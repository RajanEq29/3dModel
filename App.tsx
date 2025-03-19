import React, { Suspense, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, DeviceEventEmitter, Alert } from 'react-native';

// Import components
import Trigger from './src/components/Trigger';
import Model, { ModelRender } from './src/components/Model';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Listen for a custom event from a native module
    const subscription = DeviceEventEmitter.addListener('CustomEvent', (eventData) => {
      Alert.alert('Received Event', JSON.stringify(eventData));
    });

    return () => {
      subscription.remove(); // Cleanup on unmount
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Canvas>
        <Suspense fallback={null}>
          <ModelRender />
          <OrbitControls />
        </Suspense>
      </Canvas>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        {/* Product Details */}
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Grey Chair</Text>
          <Text style={styles.textPrice}>$80.00</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis maximus eros,
            eu ullamcorper ante ullamcorper a. Phasellus turpis tellus, tempus at feugiat at, facilisis ac sem.
          </Text>
        </View>

        {/* Buy Button */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  textContainer: {
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  textPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007BFF',
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
