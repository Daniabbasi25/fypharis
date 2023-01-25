import TrackPlayer from 'react-native-track-player';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const TrackListScreen = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    TrackPlayer.setupPlayer({});
  }, []);

  const playAudio = async audio => {
    setCurrentAudio(audio);
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: audio.id,
      url: audio.url,
      title: audio.title,
      artist: audio.artist,
    });
    await TrackPlayer.play();
    setIsPlaying(true);
  };

  const pauseAudio = async () => {
    await TrackPlayer.pause();
    setIsPlaying(false);
  };

  const renderAudio = ({item}) => (
    <TouchableOpacity onPress={() => playAudio(item)} style={styles.item}>
      <Text>{item.title}</Text>
      <Text>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={[
          {
            id: '1',
            url: require('../../assets/1.mp3'),
            title: 'Fluidity',
            artist: 'Danyal',
            duration: 144,
          },
          {
            id: '2',
            url: require('../../assets/2.mp3'),
            title: '2nd song',
            artist: 'Danyal',
            duration: 144,
          },
          {
            id: '3',
            url: require('../../assets/3.mp3'),
            title: '3rd song',
            artist: 'Danyal',
            duration: 144,
          },
        ]}
        keyExtractor={item => item.id}
        renderItem={renderAudio}
      />
      {currentAudio && (
        <View style={[styles.item, {backgroundColor: 'red'}]}>
          <Text>{currentAudio.title}</Text>
          <Text>{currentAudio.artist}</Text>
          <TouchableOpacity onPress={pauseAudio}>
            <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TrackListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
});
