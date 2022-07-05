import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {getVideosList} from '../../service';

export const ListVideos = ({navigation}) => {
  const [state, setState] = useState('loading');
  const [videos, setVideos] = useState([]);

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
      <View style={styles.contentCenter}>
        <Text style={styles.text}>Buscando vídeos</Text>
      </View>
    );
  };

  const Error = () => {
    return (
      <View style={styles.contentCenter}>
        <Text style={styles.text}>Erro ao buscar vídeo</Text>
      </View>
    );
  };

  const Videos = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={styles.cardVideo}
          onPress={() =>
            navigation.navigate('Player', {
              video: item,
            })
          }>
          <Text>{item}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {
        {
          loading: <Loading />,
          videos: <Videos />,
          error: <Error />,
        }[state]
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cardVideo: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  contentCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
