import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';
import * as babyList from '../babylist.json'
const {width, height} = Dimensions.get('window');

const AddBaby = ({navigation,route}) => {
    console.log(route.params!=undefined&&route.params)
      const [babyName, setBabyName] = useState(
        route.params != undefined && route.params.item.name,
      );
      const [fatherName, setFatherName] = useState(
        route.params != undefined && route.params.item.FatherName,
      );
      const handleAddBaby = () => {
        // alert("Login")
        babyList.default.push({
          id: babyList.default.length + 1,
          name: babyName,
          FatherName:fatherName
        });
        navigation.goBack();
        console.log(babyList)
      };
      const handleedit=()=>{
        const upd_obj = babyList.default.findIndex(obj => obj.id == route.params.item.id);
console.log('Before Object Updation: ', babyList.default[upd_obj]);

babyList.default[upd_obj].name = babyName;
babyList.default[upd_obj].FatherName = fatherName;
        console.log('After Object Updation: ', babyList.default[upd_obj]);
        alert("Updated SuccessFUll")
navigation.navigate('Home');
      }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TextField
        label="Baby Name"
        placeholder="Ahmed"
        val={babyName}
        setvalue={setBabyName}
      />
      <TextField
        label="Father Name"
        placeholder="Father Name"
        // pas={true}
        val={fatherName}
        setvalue={setFatherName}
      />
      <View style={styles.buttonBox}>
        <PrimaryButton
          buttonText={route.params != undefined ? 'Update' : "Add Baby"}
          buttonFunction={
            route.params != undefined ? handleedit : handleAddBaby
          }
        />
      </View>
      {/* <View style={styles.dontBox}>
        <Text style={{color: 'rgba(51, 65, 85, 1)'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'rgba(65, 120, 212, 1)'}}>Sign Up</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default AddBaby;
const styles = StyleSheet.create({
  forgetPassword: {
    color: 'rgba(65, 120, 212, 1)',
    marginLeft: width / 25,
    marginTop: height / 50,
    fontSize: 15,
  },
  buttonBox: {
    marginTop: height / 15,
  },
  dontBox: {
    flexDirection: 'row',
    marginTop: height / 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});