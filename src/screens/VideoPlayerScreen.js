import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Video from 'react-native-video';
// import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const VideoPlayerScreen = () => {
  const RenderVideo = ({item}) => (
    <View
      style={{
        backgroundColor: '#fff',
        paddingVertical: 15,
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          textAlign: 'center',
        }}>
        {item.title}
      </Text>
      <VideoPlayer
        video={require('../../assets/v1.mp4')}
        autoplay={false}
        // videoWidth={1400}
        // videoHeight={900}
        thumbnail={require('../../assets/images/images.jpeg')}
      />
    </View>
  );
  return (
    <>
      <FlatList
        data={[
          {id: 1, title: 'Video 1', link: 'link will be here'},
          {id: 2, title: 'Video 2', link: 'link will be here'},
          {id: 3, title: 'Video 3', link: 'link will be here'},
          {id: 4, title: 'Video 4', link: 'link will be here'},
        ]}
        keyExtractor={item => item.id}
        renderItem={RenderVideo}
      />
    </>
  );
};

export default VideoPlayerScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
//
