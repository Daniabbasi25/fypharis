import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent:'center',
        paddingTop: height / 6,
        alignItems: 'center',
        // flexDirection: 'row',
        // flexWrap:'wrap',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          //   backgroundColor: 'red',
          width: width / 1.2,
          marginBottom: 30,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 40,
            backgroundColor: '#52B6DF',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('AddBaby')}>
          {/* plus */}
          <AwesomeIcon name="plus" size={30} color="#fff" />
          <Text>Add Baby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 40,
            backgroundColor: '#52B6DF',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('BabyList')}>
          {/* plus */}
          <AwesomeIcon name="list" size={30} color="#fff" />
          <Text>Baby's List</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          //   backgroundColor: 'red',
          width: width / 1.2,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 40,
            paddingHorizontal: 60,
            backgroundColor: '#52B6DF',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('TrackList')}>
          {/* plus */}
          <AwesomeIcon name="music" size={30} color="#fff" />
          <Text>Cry</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 40,
            backgroundColor: '#52B6DF',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('VideoPlayer')}>
          {/* plus */}
          <SettingIcon name="setting" size={30} color="#fff" />
          <Text>VIdeo Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
