import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PetCare from '../../assets/animal-care.png';

export const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={styles.containerText}>
        <Text style={styles.title}>Babá de animais</Text>
        <Text style={styles.subtitle}>
          Seu monitoramento de animais a distancia{' '}
        </Text>
      </View>
      <View style={styles.containerText}>
        <Image source={PetCare} style={styles.image} />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListVideos')}>
          <Text style={{color: 'white', fontWeight: '600'}}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  containerText: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {color: 'black', fontSize: 24, margin: 30},
  subtitle: {
    color: 'black',
    fontSize: 16,
  },
  image: {height: 100, width: 100},
  button: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#D0BDEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
