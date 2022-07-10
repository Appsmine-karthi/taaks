import React, { useEffect } from 'react';

import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, BackHandler, Alert } from 'react-native';

import { fonts, colors } from '../../components/theme';

const Home_Screen4 = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={styles.header_view}>

          <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignUp_Screen')}>

            <Image source={require('../../assets/application.png')} style={styles.icon_style} resizeMode='contain' />

          </TouchableOpacity>

          <Text style={styles.header_text}>Applications</Text>

        </View>

        <View style={styles.input_container}>

          <TextInput

            style={styles.input_style}

            placeholder="Search"

            placeholderTextColor="#707171" />

          <View style={{ position: 'absolute', right: 10, alignItems: 'center', alignSelf: 'center' }}>

            <Image source={require('../../assets/search.png')} style={{ width: 32, height: 32 }} resizeMode='contain' />

          </View>

        </View>

        <View style={{ flexDirection: 'row' }}>

          <View style={[styles.round_box, { backgroundColor: colors.secondary_color }]}>

            <Text style={[styles.round_text, { color: colors.white_color }]}>  All  </Text>

          </View>

          <View style={[styles.round_box, { backgroundColor: colors.white_color }]}>

            <Text style={[styles.round_text, { color: colors.secondary_color }]}>Accepted</Text>

          </View>

          <View style={[styles.round_box, { backgroundColor: colors.white_color }]}>

            <Text style={[styles.round_text, { color: colors.secondary_color }]}>Interview</Text>

          </View>

          <View style={[styles.round_box, { backgroundColor: colors.white_color }]}>

            <Text style={[styles.round_text, { color: colors.secondary_color }]}>Rejected</Text>

          </View>

        </View>

        <View style={[styles.center_box, { marginTop: 20 }]}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/milky.png')} style={styles.icon_styles} resizeMode='contain' />

            <View style={{ width: screenWidth - 50 }}>

              <Text style={styles.jobs_detaisl_text}>ShopKeeper</Text>

              <Text style={styles.jobs_detaisl_text1}>Milky Mist, Erode</Text>

            </View>

          </View>

          <Image source={require('../../assets/line.png')} style={{ width: screenWidth - 40, height: 30 }} resizeMode='contain' />

          <View style={[styles.btn_view, { backgroundColor: '#EEF2FA' }]}>

            <Text style={[styles.btn_text, { color: '#2E5AAC' }]}>Scheduled for Interview</Text>

          </View>

        </View>

        <View style={[styles.center_box, { marginTop: 20 }]}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/pricol.png')} style={styles.icon_styles} resizeMode='contain' />

            <View style={{ width: screenWidth - 50 }}>

              <Text style={styles.jobs_detaisl_text}>Accountant</Text>

              <Text style={styles.jobs_detaisl_text1}>Pricol, Coimbatore</Text>

            </View>

          </View>

          <Image source={require('../../assets/line.png')} style={{ width: screenWidth - 40, height: 30 }} resizeMode='contain' />

          <View style={[styles.btn_view, { backgroundColor: '#FFF4EC' }]}>

            <Text style={[styles.btn_text, { color: '#B95000' }]}>Pending</Text>

          </View>

        </View>

        <View style={[styles.center_box, { marginTop: 20 }]}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/lmw.png')} style={styles.icon_styles} resizeMode='contain' />

            <View style={{ width: screenWidth - 50 }}>

              <Text style={styles.jobs_detaisl_text}>Marketing</Text>

              <Text style={styles.jobs_detaisl_text1}>LMW, Coimbatore</Text>

            </View>

          </View>

          <Image source={require('../../assets/line.png')} style={{ width: screenWidth - 40, height: 30 }} resizeMode='contain' />

          <View style={[styles.btn_view, { backgroundColor: '#FEEFEF' }]}>

            <Text style={[styles.btn_text, { color: '#DA1414' }]}>Rejected</Text>

          </View>

        </View>

        <View style={[styles.center_box, { marginTop: 20 }]}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/lmw.png')} style={styles.icon_styles} resizeMode='contain' />

            <View style={{ width: screenWidth - 50 }}>

              <Text style={styles.jobs_detaisl_text}>Sales Consultant</Text>

              <Text style={styles.jobs_detaisl_text1}>LMW, Coimbatore</Text>

            </View>

          </View>

          <Image source={require('../../assets/line.png')} style={{ width: screenWidth - 40, height: 30 }} resizeMode='contain' />

          <View style={[styles.btn_view, { backgroundColor: '#EEF2FA' }]}>

            <Text style={[styles.btn_text, { color: '#2E5AAC' }]}>Scheduled for Interview</Text>

          </View>

        </View>

      </ScrollView>

    </View>

  )

}

export default Home_Screen4;

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

    fontSize: 14,

    marginTop: 10,

    marginLeft: 10

  },

  icon_style: {

    width: 32,

    height: 32

  },

  subheader_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

  },

  input_container: {

    width: screenWidth - 30,

    height: screenHeight / 18,

    backgroundColor: colors.shadow_color,

    alignSelf: 'center',

    borderRadius: 100,

    elevation: 1,

    flexDirection: 'row',

    marginTop: 20

  },

  input_style: {

    flex: 1,

    padding: 10,

    fontSize: 14,

    paddingLeft: 20,

    fontFamily: fonts.regular_font,

    color: colors.black_color,

    justifyContent: 'center',

    alignItems: 'center'

  },

  right_view: {

    position: 'absolute',

    right: 20,

    width: screenWidth / 6,

    backgroundColor: colors.secondary_color,

    justifyContent: 'center',

    alignItems: 'center'

  },

  box_right_view: {

    position: 'absolute',

    right: 10,

    borderRadius: 10,

    width: screenWidth / 6,

    backgroundColor: colors.secondary_color,

    justifyContent: 'center',

    alignItems: 'center',

  },

  right_btn_text: {

    fontFamily: fonts.regular_font,

    fontSize: 12,

    color: colors.white_color,

    padding: 5

  },

  round_box: {

    height: screenHeight / 22,

    borderColor: colors.secondary_color,

    borderWidth: 1,

    borderRadius: 24,

    marginTop: 20,

    alignItems: 'center',

    justifyContent: 'center',

    marginLeft: 10,

    paddingLeft: 10,

    paddingRight: 10

  },

  round_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 12,

    color: colors.secondary_color

  },

  center_box: {

    backgroundColor: colors.white_color,

    alignSelf: 'center',

    marginTop: 30,

    borderRadius: 16,

    width: screenWidth - 30,

    borderWidth: 0.5,

    borderColor: colors.white_color,

    shadowOffset: { width: 10, height: 10 },

    shadowColor: '#5A6CEA',

    shadowOpacity: 0.2,

    elevation: 20,

  },

  icon_styles: {

    width: screenWidth / 6,

    height: screenHeight / 16,

  },

  jobs_detaisl_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.black_color,

    lineHeight: 26

  },

  jobs_detaisl_text1: {

    fontFamily: fonts.regular_font,

    fontSize: 12,

    color: colors.black_color

  },

  btn_view: {

    width: screenWidth - 40,

    height: screenHeight / 22,

    borderRadius: 100,

    justifyContent: 'center',

    alignSelf: 'center',

    marginBottom: 10

  },

  btn_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    textAlign: 'center',

  },

});