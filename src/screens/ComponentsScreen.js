import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Martin';

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={styles.subHeader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
});

export default ComponentsScreen;
