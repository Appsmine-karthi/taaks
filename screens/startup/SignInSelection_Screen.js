import React from "react";

import { View, Text, StyleSheet, StatusBar, Dimensions, BackHandler, Image, TouchableOpacity } from 'react-native';

import { colors, fonts } from '../../components/theme';

import { useFocusEffect } from '@react-navigation/native';

const SignInSelection_Screen = ({ navigation }) => {

  useFocusEffect(

    React.useCallback(() => {

      const onBackPress = () => { navigation.navigate('Language_Screen'); return true; };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => { BackHandler.removeEventListener('hardwareBackPress', onBackPress); };

    }, []),

  );

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <View style={{ flex: 1, justifyContent: 'center' }}>

        <Image source={require('../../assets/logos.png')} style={styles.logo_style} resizeMode='contain' />

        <View style={styles.center_box}>

          <View style={{ marginTop: 30, alignItems: 'center' }}>

            <Image source={require('../../assets/person.png')} style={styles.icon_style} resizeMode='contain' />

            <Text style={[styles.regular_text, { marginTop: 20 }]}>Register Here</Text>

            <View style={{ flexDirection: 'row', marginTop :20 }}>

              <TouchableOpacity style={[styles.touch_box, {borderColor : colors.secondary_color, borderWidth:0}]} onPress={() => navigation.navigate('SignIn_Screen')}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                  <Image source={require('../../assets/employee.png')} style={styles.icon_style} resizeMode='contain' />

                  <Text style={[styles.regular_text, { paddingTop: 10 }]}>I’m an Employer</Text>

                </View>

              </TouchableOpacity>

              <TouchableOpacity style={[styles.touch_box, {borderColor : colors.secondary_color, borderWidth:1}]} onPress={() => navigation.navigate('SignIn_Screen')}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                  <Image source={require('../../assets/employer.png')} style={styles.icon_style} resizeMode='contain' />

                  <Text style={[styles.regular_text, { paddingTop: 10 }]}>I’m an Employee </Text>

                </View>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </View>

    </View>

  )

}

export default SignInSelection_Screen;

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

  center_box: {

    width: screenWidth - 20,

    height: screenHeight / 2.5,

    backgroundColor: colors.white_color,

    elevation: 1,

    alignSelf: 'center',

    margin: 2,

    borderRadius: 25,

    alignItems: 'center',

    marginTop: 30

  },

  touch_box: {

    width: screenWidth / 2.3,

    height: screenHeight / 6,

    backgroundColor: colors.white_color,

    elevation: 1,

    alignSelf: 'center',

    margin: 2,

    borderRadius: 20,

    alignItems: 'center'

  },

  regular_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    textAlign: 'center',

    lineHeight: 28

  },

  icon_style: {

    width: 48,

    height: 48,

    marginLeft: 10

  },


});