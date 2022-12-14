import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  MaterialIcons,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Button
} from 'react-native';

export default function Foto({ navigation }) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>

     <Button
        title="Voltar"
        backgroundColor="#f0870c"
        onPress={() => navigation.navigate('Login')}
      />

      <Animated.View>
        <Text style={styles.text}>
          Aqui você pode acompanhar as imagens dos ultimos eventos.
        </Text>
       </Animated.View>
      <ScrollView
        scrollEventThrottle={15}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}>
        <Image source={require('../assents/foto3.jpg')} style={styles.image} />

        <Image source={require('../assents/foto4.jpeg')} style={styles.image} />

        <Image source={require('../assents/foto5.jpeg')} style={styles.image} />

        <Image
          source={require('../assents/foto10.jpeg')}
          style={styles.image}
        />

        <Image source={require('../assents/foto8.jpeg')} style={styles.image} />

        <Image source={require('../assents/foto9.jpeg')} style={styles.image} />

        <Image
          source={require('../assents/foto12.jpeg')}
          style={styles.image}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0870c',
  },

  image: {
    width: '100%',
    height: 300,
    margin: 7,
    borderRadius: 5,
  },

  text: {
    fontSize: 25,
    marginHorizontal: '5%',
    textAlign: 'center',
  },
});
