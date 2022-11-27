import React from 'react';
import { StyleSheet,
 View , 
 Text, 
 TouchableOpacity} from 'react-native';

 export default function Botao() {
   return (
      <View style= {styles.container}>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}> Cadastrar </Text>
      </TouchableOpacity>

      </View>
   );
 }
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',

  },
  btnContainer: {
    position: 'absolute',
    backgroundColor: '#343a40',
    borderRadius: 50,
    paddingVertical: 5,
    width: '80%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#f0870c',
  },

});
