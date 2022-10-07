import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Header = (props) => {
  return (
    <TextInput style={styles.input} keyboardType="decimal-pad" {...props} />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    backgroundColor: 'orange',
  },
});

export default Header;
