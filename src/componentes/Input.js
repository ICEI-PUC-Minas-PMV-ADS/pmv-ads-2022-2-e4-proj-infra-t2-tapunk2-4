import React from 'react';
import { StyleSheet, View } from 'react-native';

const Input = ({ children }) => {
  return <View style={styles.text}>{children}</View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
  },
});

export default Input;
