import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';

export const Player = ({navigation, route}) => {
  const {video} = route.params;
  console.log('VIDEO', video);

  return (
    <View style={styles.container}>
      <Video
        source={{uri: `http://192.168.18.2:8080/videos/${video}`}}
        style={styles.backgroundVideo}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontWeight: '600'}}>Baixar Vídeo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 200,
    flex: 1,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#D0BDEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
