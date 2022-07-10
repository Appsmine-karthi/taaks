import React, { useState } from "react";

import { View, Text, StyleSheet, StatusBar, Dimensions, BackHandler, Image, TouchableOpacity, ScrollView } from 'react-native';

import { colors, fonts } from '../../components/theme';

import { useFocusEffect } from '@react-navigation/native';

import AppIntroSlider from 'react-native-app-intro-slider';

import LinearGradient from 'react-native-linear-gradient';
import { color } from "react-native-reanimated";

const Slider_Screen = ({ navigation }) => {

  useFocusEffect(

    React.useCallback(() => {

      const onBackPress = () => { navigation.navigate('Slider_Screen'); return true; };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => { BackHandler.removeEventListener('hardwareBackPress', onBackPress); };

    }, []),

  );

  const RenderItem = ({ item }) => {

    return (

      <View style={styles.container_view}>

        <Image style={styles.introImageStyle} source={item.image} />

        <View style={{ width: screenWidth - 30, alignItems: 'center' }}>

          <Text style={styles.header_text}>{item.title}</Text>

          <Text style={styles.regular_text}>{item.text}</Text>

        </View>

      </View>

    );

  };

  const renderNextButton = () => {

    return (

      <View style={{ flex: 1, position: 'absolute', bottom: screenHeight - 80 }}>

        <TouchableOpacity style={styles.skip_btn} onPress={() => navigation.navigate('Home_Screen')}>

          <Text style={styles.skip_text}>Skip</Text>

        </TouchableOpacity>

      </View>
    );

  };

  const renderDoneButton = () => {

    return (

      <View style={{ width: screenWidth - 30, flex: 1, alignItems: 'center' }}>

        <TouchableOpacity onPress={() => navigation.navigate('Home_Screen')}>

          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6499FF', '#4A2AE8']} style={styles.btn_view}>

            <Text style={styles.btn_text}>Get Started</Text>

          </LinearGradient>

        </TouchableOpacity>

      </View>

    );

  };

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <View style={styles.header_view}>

        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('Slider_Screen')}>

          <Image source={require('../../assets/back.png')} style={styles.icon_style} resizeMode='contain' />

        </TouchableOpacity>

      </View>

      <View style={{ flex: 1 }}>

        <AppIntroSlider

          data={slides}

          renderDoneButton={renderDoneButton}

          renderNextButton={renderNextButton}

          renderItem={RenderItem}

          activeDotStyle={{backgroundColor: colors.black_color}}

          dotStyle={{

            width: 10,

            height: 10,

            backgroundColor: colors.black_color,

            borderRadius: 5,

            marginHorizontal: 5,

          }}

        />

      </View>

    </View>

  )

}

export default Slider_Screen;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.white_color

  },

  header_view: {

    marginLeft: 20,

    flexDirection: 'row',

    alignItems: 'center'

  },

  header_text: {

    fontFamily: fonts.bold_font,

    fontSize: 16,

    textAlign: 'center'

  },

  icon_style: {

    width: 32,

    height: 32

  },

  container_view: {

    flex: 1,

    backgroundColor: colors.white_color,

    alignItems: 'center',

    justifyContent: 'center',

    paddingBottom: 0,

    width: screenWidth - 20

  },

  introImageStyle: {

    width: screenWidth - 50,

    height: screenHeight / 2.75,

    resizeMode: 'contain'

  },

  regular_text: {

    fontFamily: fonts.regular_font,

    fontSize: 14,

    color: colors.black_color,

    paddingTop: 10,

    lineHeight: 24,

    textAlign: 'center'


  },

  skip_btn: {

    width: screenWidth / 5,

    height: screenHeight / 22,

    backgroundColor: colors.secondary_color,

    borderRadius: 100,

    justifyContent: 'center',

    alignItems: 'center',

    position: 'absolute',

    right: 10

  },

  btn_view: {

    width: screenWidth - 40,

    height: screenHeight / 14,

    borderRadius: 100,

    backgroundColor: '#6499FF',

    justifyContent: 'center',

    alignSelf: 'center',

    marginTop: -20

  },

  btn_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.white_color,

    textAlign: 'center'

  },

  skip_text: {

    fontFamily: fonts.regular_font,

    fontSize: 14,

    color: colors.white_color

  }

});

const slides = [

  {

    key: 's1',

    title: 'Endless Opportunities',

    text: 'Being future-ready comes across as one cardinal theme that India Auto Inc is moving ahead with even as it grapples with lockdowns and related manufacturing plant shutdowns ',

    image: require('../../assets/walthrough.png'),

  },

  {

    key: 's2',

    title: 'Endless Opportunities',

    text: 'Being future-ready comes across as one cardinal theme that India Auto Inc is moving ahead with even as it grapples with lockdowns and related manufacturing plant shutdowns ',

    image: require('../../assets/walthrough.png'),

  },

  {

    key: 's3',

    title: 'Endless Opportunities',

    text: 'Being future-ready comes across as one cardinal theme that India Auto Inc is moving ahead with even as it grapples with lockdowns and related manufacturing plant shutdowns ',

    image: require('../../assets/walthrough.png'),

  }

];