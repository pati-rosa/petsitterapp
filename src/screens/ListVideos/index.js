import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getVideosList} from '../../service';

export const ListVideos = () => {
  const [state, setState] = useState('loading');
  const [videos, setVideos] = useState([]);

  console.log('STATE', state);

  const getVideos = async () => {
    try {
      const videoList = await getVideosList();
      setVideos(videoList);
      setState('videos');
    } catch (error) {
      setState('error');
    }
  };
  useEffect(() => {
    getVideos();
  }, []);

  const Loading = () => {
    return (
      <View style={styles.container}>
        {/* <Video
          source={{uri: 'http://192.168.18.2:8080/downloadvideo'}}
          style={styles.backgroundVideo}
        /> */}
        <Text style={{fontSize: 16, color: 'black'}}>Buscando vídeos</Text>
      </View>
    );
  };

  const Error = () => {
    return (
      <View style={styles.container}>
        {/* <Video
          source={{uri: 'http://192.168.18.2:8080/downloadvideo'}}
          style={styles.backgroundVideo}
        /> */}
        <Text style={{fontSize: 16, color: 'black'}}>Erro ao buscar vídeo</Text>
      </View>
    );
  };

  const Videos = () => {
    console.log('VIDEOS', videos);
    return videos.map(video => {
      return (
        <View>
          <Text>{video}</Text>
        </View>
      );
    });
  };

  return {
    loading: <Loading />,
    videos: <Videos />,
    error: <Error />,
  }[state];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
