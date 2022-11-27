import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
  return <View style={styles.containerLogo}>{children}</View>;
};

const styles = StyleSheet.create({
  containerLogo: {
    flex: 3,
    backgroundColor: '#f0870c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Body;
