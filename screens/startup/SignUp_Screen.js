import React, { useState } from "react";

import { View, Text, StyleSheet, StatusBar, Dimensions, BackHandler, Image, TouchableOpacity, Alert } from 'react-native';

import { colors, fonts } from '../../components/theme';

import { useFocusEffect } from '@react-navigation/native';

import FormInput from "../../components/FormInput";

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

import { api_connection } from '../../components/api_connection';

const SignUp_Screen = ({ navigation }) => {

  useFocusEffect(

    React.useCallback(() => {

      const onBackPress = () => { navigation.navigate('SignInSelection_Screen'); return true; };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => { BackHandler.removeEventListener('hardwareBackPress', onBackPress); };

    }, []),

  );

  let [loading, setLoading] = useState(false);

  let [name, setName] = useState('');

  let [phoneNumber, setPhoneNumber] = useState('');

  let [password, setPassword] = useState('');

  const signupAccess = async () => {

    if (!name) { Alert.alert("Taak", "Please Enter the Name"); return; }

    if (!phoneNumber) { Alert.alert("Taak", "Please Enter the Mobile Number"); return; }

    if (phoneNumber.length < 10) { Alert.alert("Taak", "Please Enter the Valid Mobile Number"); return; }

    if (!password) { Alert.alert("Taak", "Please Enter the Password"); return; }

    setLoading(false);

    axios.post(api_connection + 'member',

      {

        memberType: "1",

        name: name,

        mobileNo: phoneNumber,

        password: password

      },

      {

        headers: {

          "Content-Type": "application/json",

        },

      }).then(response => {

        setLoading(false);

        if (response.data.status_code === 200) {

          AsyncStorage.setItem('otp_screen', 'signup');

          navigation.navigate('Otp_Screen');

        }

        else {

          alert("Taak", response.data.alert);

        }

      })

      .catch(error => {

        alert(error.response.data.alert)

      });

  }

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <View style={{ flex: 1, justifyContent: 'center' }}>

        <Image source={require('../../assets/logos.png')} style={styles.logo_style} resizeMode='contain' />

        <View style={{ marginTop: 0, width: screenWidth - 40, alignSelf: 'center' }}>

          <Text style={[styles.header_text, { paddingTop: 10 }]}>Sign Up to your account</Text>

          <View style={{ marginTop: 10 }}>

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Name</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <FormInput

              labelValue={name}

              placeholderText="Name"

              onChangeText={txt => setName(txt)} value={name} />

          </View>

          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.regular_text}>Mobile No</Text>

            <Text style={styles.regular_text1}>*</Text>

          </View>

          <FormInput

            labelValue={phoneNumber}

            placeholderText="Mobile No"

            maxLength={10}

            keyboardType="numeric"

            onChangeText={txt => setPhoneNumber(txt)} value={phoneNumber} />

          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.regular_text}>Password</Text>

            <Text style={styles.regular_text1}>*</Text>

          </View>

          <FormInput

            labelValue={password}

            placeholderText="Password"

            onChangeText={txt => setPassword(txt)} value={password} />

          <TouchableOpacity style={styles.btn_view} onPress={signupAccess}>

            <Text style={styles.btn_text}>Sign Up</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn_view} onPress={() => navigation.navigate('SignIn_Screen')}>

            <Text style={styles.header_text}>Already  Have an Account ? </Text>

            <Text style={styles.regular_color_text}> Sign In</Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>

  )

}

export default SignUp_Screen;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.shadow_color

  },

  logo_style: {

    width: screenWidth / 2,

    height: screenHeight / 5.8,

    alignSelf: 'center'

  },

  header_text: {

    fontFamily: fonts.bold_font,

    fontSize: 14,

    textAlign: 'center',

    lineHeight: 28

  },

  regular_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    paddingLeft: 20,

    paddingTop: 10,

    color: colors.black_color

  },

  regular_text1: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    paddingTop: 10,

    paddingLeft: 2,

    color: colors.light_red

  },

  btn_view: {

    width: screenWidth - 40,

    height: screenHeight / 14,

    borderRadius: 100,

    backgroundColor: '#4A2AE8',

    opacity: 0.5,

    marginTop: 30,

    justifyContent: 'center',

  },

  btn_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.white_color,

    textAlign: 'center',

  },

  signIn_view: {

    flexDirection: 'row',

    alignSelf: 'center',

    marginTop: 20

  },

  regular_color_text: {

    fontFamily: fonts.bold_font,

    alignSelf: 'center',

    color: colors.secondary_color

  },

});