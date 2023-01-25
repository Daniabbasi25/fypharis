import TrackPlayer from 'react-native-track-player';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const AudioList = ({audios}) => {
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
    <TouchableOpacity onPress={() => playAudio(item)}>
      <Text>{item.title}</Text>
      <Text>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={audios}
        keyExtractor={item => item.id}
        renderItem={renderAudio}
      />
      {currentAudio && (
        <View>
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
