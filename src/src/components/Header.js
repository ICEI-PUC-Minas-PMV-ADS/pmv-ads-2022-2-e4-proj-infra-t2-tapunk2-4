import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title, children }) => {
  return <Text style={styles.text}>Mov Airsoft</Text>}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 'bold',
    backgroundColor: 'orange'
  },
});

export default Header;
