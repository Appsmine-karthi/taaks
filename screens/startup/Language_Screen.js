import React from "react";

import { View, Text, StyleSheet, StatusBar, Dimensions, BackHandler, Image, TouchableOpacity } from 'react-native';

import { colors, fonts } from '../../components/theme';

import { useFocusEffect } from '@react-navigation/native';

const Language_Screen = ({ navigation }) => {

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

        <View style={{ alignSelf: 'center', marginTop: 20 }}>

          <Text style={styles.regular_text}>Choose  Your Preferred</Text>

          <Text style={styles.regular_text}>Language</Text>

        </View>

        <View style={{ width: screenWidth - 10, alignItems: 'center' }}>

          <View style={{ marginTop: 30, flexDirection: 'row' }}>

            <TouchableOpacity style={styles.language_box} >

              <Text style={[styles.regular_text, { paddingLeft: 10 }]}>தமிழ்</Text>

            </TouchableOpacity>

            <TouchableOpacity style={[styles.language_box, { marginLeft: 30 }]} onPress={() => navigation.navigate('SignInSelection_Screen')}>

              <Text style={[styles.regular_text, { paddingLeft: 10 }]}>English</Text>

            </TouchableOpacity>

          </View>

          <View style={{ marginTop: 30, flexDirection: 'row' }}>

            <TouchableOpacity style={styles.language_box} >

              <Text style={[styles.regular_text, { paddingLeft: 10 }]}>हिन्दी</Text>

            </TouchableOpacity>

            <TouchableOpacity style={[styles.language_box, { marginLeft: 30 }]} >

              <Text style={[styles.regular_text, { paddingLeft: 10 }]}>മലയാളം</Text>

            </TouchableOpacity>

          </View>

          <View style={{ marginTop: 30, alignSelf: 'flex-start', marginLeft: 40 }}>

            <TouchableOpacity style={[styles.language_box]} >

              <Text style={[styles.regular_text, { paddingLeft: 10 }]}>తెలుగు</Text>

            </TouchableOpacity>

          </View>

        </View>


      </View>

    </View>

  )

}

export default Language_Screen;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.white_color

  },

  logo_style: {

    width: screenWidth / 2.25,

    height: screenHeight / 6.25,

    alignSelf: 'center'

  },

  regular_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 15,

    textAlign: 'center',

    lineHeight: 28

  },

  icon_style: {

    width: 32,

    height: 32,

    marginLeft: 10

  },

  language_box: {

    width: screenWidth / 2.9,

    height: screenHeight / 16,

    borderWidth: 1.5,

    borderRadius: 20,

    borderColor: colors.secondary_color,

    alignItems: 'center',

    justifyContent: 'center'

  }

});