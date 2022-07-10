import React from 'react';

import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { colors } from '../../components/theme';

const Splash_Screen = ({ navigation }) => {

  setTimeout(() => {

    navigation.navigate('Language_Screen');

  }, 1500);

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <View style={styles.logo_container}>

        <Animatable.Image animation="zoomInDown" duraton="1000"

          source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />

      </View>

    </View >

  )

}

export default Splash_Screen;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.primary_color

  },

  logo: {

    width: screenWidth - 100,

    height: screenHeight / 5.8

  },

  logo_container: {

    flex: 2,

    justifyContent: 'center',

    alignItems: 'center'

  }

})