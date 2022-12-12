import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as babyList from '../babylist.json'
const BabyList = ({navigation}) => {
    const [Data,setData]=useState(babyList.default)
    const [filterData,setFilterData]=useState(Data)
    console.log('data=', babyList.default);


    const handleEdit=(item)=>{
        console.log(item);
    navigation.navigate('AddBaby',{item})
    }
    const handledelete=(id)=>{
console.log(id)
const newdata=filterData.filter(item=>item.id!=id);
setFilterData(newdata)
    }
    const Item = ({title, id, item}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={() => handledelete(id)}>
          <Text style={{backgroundColor: 'red', padding: 10, color: '#fff'}}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Text style={{backgroundColor: 'green', padding: 10, color: '#fff'}}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
      const renderItem = ({item}) => <Item title={item.name} id={item.id} item={item} />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // style={{backgroundColor: 'red'}}
      />
    </View>
  );
}

export default BabyList

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
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  title: {
    fontSize: 32,
    color:'#000'
  },
});