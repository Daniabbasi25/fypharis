import {View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Alert} from 'react-native';
import React,{useState} from 'react'
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';
const {width,height}=Dimensions.get('window')
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handlelogin=()=>{
    // alert("Login")
    navigation.navigate('MainStack');
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 80}}>
      <TextField
        label="Email"
        placeholder="user@gmail.com"
        val={email}
        setvalue={setEmail}
        keyboardtype="email-address"
      />
      <TextField
        label="Password"
        placeholder="Your password"
        pas={true}
        val={password}
        setvalue={setPassword}
      />
      <View style={styles.buttonBox}>
        <PrimaryButton buttonText="Login" buttonFunction={handlelogin} />
      </View>
      <View style={styles.dontBox}>
        <Text style={{color: 'rgba(51, 65, 85, 1)'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'rgba(65, 120, 212, 1)'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen
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