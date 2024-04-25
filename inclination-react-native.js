import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

export default function App() {

  const [ang, setAng] = useState({ alpha: 0, beta: 0, gamma: 0 })

  useEffect(() => {

    DeviceMotion.addListener((data) => {
      const { alpha, beta, gamma } = data.rotation;

      setAng(
        {
          alpha: alpha.toFixed(3),
          beta: beta.toFixed(3),
          gamma: gamma.toFixed(3)
        }
      )
      
    });

  }, []);


  return (
    <View style={styles.container}>
      <Text> {ang.beta} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// https://docs.expo.dev/versions/latest/sdk/devicemotion/#devicemotion