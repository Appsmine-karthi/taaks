import React, { useState } from "react";

import { View, Text, StyleSheet, StatusBar, Dimensions, BackHandler, Image, TouchableOpacity, TextInput, Modal } from 'react-native';

import { colors, fonts } from '../../components/theme';

import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Otp_Screen = ({ navigation }) => {

  useFocusEffect(

    React.useCallback(() => {

      const onBackPress = () => { navigation.navigate('SignInSelection_Screen'); return true; };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => { BackHandler.removeEventListener('hardwareBackPress', onBackPress); };

    }, []),

  );

  let [otp, setOtp] = useState('');

  let [otp1, setOtp1] = useState('');

  let [otp2, setOtp2] = useState('');

  let [otp3, setOtp3] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibles, setModalVisibles] = useState(false);

  const otpVerification = async () => {

    var getotpscreen = await AsyncStorage.getItem('otp_screen');

    if (getotpscreen === 'signin') {

      setModalVisible(true);

      setTimeout(() => {

        setModalVisible(false);

        navigation.navigate('Slider_Screen');

      }, 2000);

    }

    else if (getotpscreen === 'signup') {

      setModalVisibles(true);

      setTimeout(() => {

        setModalVisibles(false);

        navigation.navigate('Slider_Screen');

      }, 1500);

    }


  }

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <View style={styles.header_view}>

        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignUp_Screen')}>

          <Image source={require('../../assets/back.png')} style={styles.icon_style} resizeMode='contain' />

        </TouchableOpacity>

        <Text style={styles.subheader_text}>OTP Verification</Text>

      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>

        <View style={{ marginTop: 50, width: screenWidth - 40, alignSelf: 'center' }}>

          <Text style={styles.regular_text}>Code has been send to  +9197******39</Text>

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>

            <TextInput

              style={styles.text_input}

              numberOfLines={1}

              keyboardType="numeric"

              maxLength={1}

              onChangeText={txt => setOtp(txt)} value={otp} />

            <TextInput

              style={styles.text_input}

              numberOfLines={1}

              keyboardType="numeric"

              maxLength={1}

              onChangeText={txt => setOtp1(txt)} value={otp1} />

            <TextInput

              style={styles.text_input}

              numberOfLines={1}

              keyboardType="numeric"

              maxLength={1}

              onChangeText={txt => setOtp2(txt)} value={otp2} />

            <TextInput

              style={styles.text_input}

              numberOfLines={1}

              keyboardType="numeric"

              maxLength={1}

              onChangeText={txt => setOtp3(txt)} value={otp3} />

          </View>

          <TouchableOpacity style={styles.signIn_view}>

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Resend code in</Text>

              <Text style={[styles.regular_text, { color: colors.secondary_color }]}> 56 </Text>

              <Text style={styles.regular_text}>s</Text>

            </View>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.btn_view} onPress={otpVerification}>

          <Text style={styles.btn_text}>Verify OTP</Text>

        </TouchableOpacity>

      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>

        <View style={styles.modal_view}>

          <Text style={styles.modal_header}>Welcome</Text>

          <Text style={styles.modal_regular_text}>Your Account Has Been logged in</Text>

        </View>

      </Modal>

      <Modal animationType="slide" transparent={true} visible={modalVisibles}>

        <View style={styles.modal_view}>

          <Text style={styles.modal_header}>Congratulations!</Text>

          <Text style={styles.modal_regular_text}>Welcome To Taak</Text>

          <Text style={[styles.modal_regular_text, { paddingTop: 10 }]}>Your Account Has Been Created</Text>

        </View>

      </Modal>

    </View>

  )

}

export default Otp_Screen;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.shadow_color

  },

  header_view: {

    marginLeft: 20,

    flexDirection: 'row',

    alignItems: 'center'

  },

  header_text: {

    fontFamily: fonts.bold_font,

    fontSize: 14,

    textAlign: 'center',

    lineHeight: 28

  },

  icon_style: {

    width: 32,

    height: 32

  },

  subheader_text: {

    fontFamily: fonts.bold_font,

    fontSize: 14,

    marginTop: 10,

    marginLeft: 10

  },

  regular_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    textAlign: 'center'

  },

  btn_view: {

    width: screenWidth - 40,

    height: screenHeight / 14,

    borderRadius: 100,

    backgroundColor: colors.secondary_color,

    justifyContent: 'center',

    alignSelf: 'center',

    marginTop: 80

  },

  btn_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.white_color,

    textAlign: 'center'

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

  text_input: {

    marginTop: 20,

    marginBottom: 10,

    width: screenWidth / 6,

    height: screenHeight / 14,

    alignSelf: 'center',

    borderWidth: 0.3,

    borderRadius: 20,

    padding: 10,

    fontSize: 14,

    fontFamily: fonts.bold_font,

    justifyContent: 'center',

    alignItems: 'center',

    borderColor: colors.secondary_color,

    borderWidth: 0.5,

    marginLeft: 10,

    textAlign: 'center'

  },

  modal_view: {

    position: 'absolute',

    bottom: 10,

    width: screenWidth - 40,

    height: screenHeight / 6,

    backgroundColor: '#E3E3E3',

    borderWidth: 1,

    borderColor: colors.black_color,

    borderRadius: 20,

    alignSelf: 'center'

  },

  modal_header: {

    fontFamily: fonts.bold_font,

    fontSize: 16,

    color: colors.secondary_color,

    textAlign: 'center',

    paddingTop: 20

  },

  modal_regular_text: {

    fontFamily: fonts.regular_font,

    fontSize: 14,

    color: colors.black_color,

    textAlign: 'center',

    paddingTop: 30

  }

});