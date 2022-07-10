import React, { useEffect } from 'react';

import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, BackHandler, Alert } from 'react-native';

import { fonts, colors } from '../../components/theme';

const Home_Screen2 = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={styles.header_view}>

          <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignUp_Screen')}>

            <Image source={require('../../assets/nav_connections.png')} style={styles.icon_style} resizeMode='contain' />

          </TouchableOpacity>

          <Text style={styles.header_text}>Connections</Text>

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

        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, height: 50, alignItems: 'center', }}>

          <Text style={styles.subheader_text}>Connections you may know </Text>

          <TouchableOpacity style={styles.right_view}>

            <Text style={styles.right_btn_text}>See All</Text>

          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>

          <View>

            <View style={styles.center_box}>

              <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/line.png')} style={{ width: screenWidth / 2.5, height: 10 }} resizeMode='contain' />

                <Image source={require('../../assets/connection.png')} style={styles.icon_styles} resizeMode='contain' />

                <Text style={[styles.subheader_text, { margin: 10 }]}>Avinash</Text>

                <Text style={styles.regular_texts}>Sales Person</Text>

                <Text style={[styles.regular_texts, { marginTop: 5, marginBottom: 5 }]}>LMW</Text>

              </View>

              <View style={{ marginTop: 10, marginLeft: 10 }}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                  <Image source={require('../../assets/connect.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                  <Text style={[styles.regular_texts, { marginLeft: 5 }]}>7</Text>

                </View>

                <TouchableOpacity style={styles.box_right_view}>

                  <Text style={styles.right_btn_text}>Connect</Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

          <View>

            <View style={styles.center_box}>

              <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/line.png')} style={{ width: screenWidth / 2.5, height: 10 }} resizeMode='contain' />

                <Image source={require('../../assets/connection.png')} style={styles.icon_styles} resizeMode='contain' />

                <Text style={[styles.subheader_text, { margin: 10 }]}>Arun</Text>

                <Text style={styles.regular_texts}>Electrician</Text>

                <Text style={[styles.regular_texts, { marginTop: 5, marginBottom: 5 }]}>Lakshmi Mills</Text>

              </View>

              <View style={{ marginTop: 10, marginLeft: 10 }}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                  <Image source={require('../../assets/connect.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                  <Text style={[styles.regular_texts, { marginLeft: 5 }]}>2</Text>

                </View>

                <TouchableOpacity style={styles.box_right_view}>

                  <Text style={styles.right_btn_text}>Connect</Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>

          <View>

            <View style={styles.center_box}>

              <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/line.png')} style={{ width: screenWidth / 2.5, height: 10 }} resizeMode='contain' />

                <Image source={require('../../assets/connection.png')} style={styles.icon_styles} resizeMode='contain' />

                <Text style={[styles.subheader_text, { margin: 10 }]}>Rajesh</Text>

                <Text style={styles.regular_texts}>Security</Text>

                <Text style={[styles.regular_texts, { marginTop: 5, marginBottom: 5 }]}>Pricol</Text>

              </View>

              <View style={{ marginTop: 10, marginLeft: 10 }}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                  <Image source={require('../../assets/connect.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                  <Text style={[styles.regular_texts, { marginLeft: 5 }]}>10</Text>

                </View>

                <TouchableOpacity style={styles.box_right_view}>

                  <Text style={styles.right_btn_text}>Connect</Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

          <View>

            <View style={styles.center_box}>

              <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/line.png')} style={{ width: screenWidth / 2.5, height: 10 }} resizeMode='contain' />

                <Image source={require('../../assets/connection.png')} style={styles.icon_styles} resizeMode='contain' />

                <Text style={[styles.subheader_text, { margin: 10 }]}>Xavier</Text>

                <Text style={styles.regular_texts}>Plumber</Text>

                <Text style={[styles.regular_texts, { marginTop: 5, marginBottom: 5 }]}>Pricol</Text>

              </View>

              <View style={{ marginTop: 10, marginLeft: 10 }}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                  <Image source={require('../../assets/connect.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                  <Text style={[styles.regular_texts, { marginLeft: 5 }]}>4</Text>

                </View>

                <TouchableOpacity style={styles.box_right_view}>

                  <Text style={styles.right_btn_text}>Connect</Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, height: 50, alignItems: 'center', }}>

          <Text style={styles.subheader_text}>Companies you may know </Text>

          <TouchableOpacity style={styles.right_view}>

            <Text style={styles.right_btn_text}>See All</Text>

          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>

          <View>

            <View style={styles.center_box}>

              <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/line.png')} style={{ width: screenWidth / 2.5, height: 10 }} resizeMode='contain' />

                <Image source={require('../../assets/lmw.png')} style={styles.icon_styles} resizeMode='contain' />

                <Text style={[styles.subheader_text, { margin: 10 }]}>LMW</Text>

                <Text style={[styles.regular_texts, { marginTop: 5, marginBottom: 5 }]}>Coimbatore</Text>

              </View>

              <View style={{ marginTop: 10, marginLeft: 10 }}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                  <Image source={require('../../assets/connect.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                  <Text style={[styles.regular_texts, { marginLeft: 5 }]}>231</Text>

                </View>

                <TouchableOpacity style={styles.box_right_view}>

                  <Text style={styles.right_btn_text}>Connect</Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

          <View>

            <View style={styles.center_box}>

              <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/line.png')} style={{ width: screenWidth / 2.5, height: 10 }} resizeMode='contain' />

                <Image source={require('../../assets/milky.png')} style={styles.icon_styles} resizeMode='contain' />

                <Text style={[styles.subheader_text, { margin: 10 }]}>Milky Mist</Text>

                <Text style={[styles.regular_texts, { marginTop: 5, marginBottom: 5 }]}>Erode</Text>

              </View>

              <View style={{ marginTop: 10, marginLeft: 10 }}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                  <Image source={require('../../assets/connect.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                  <Text style={[styles.regular_texts, { marginLeft: 5 }]}>124</Text>

                </View>

                <TouchableOpacity style={styles.box_right_view}>

                  <Text style={styles.right_btn_text}>Connect</Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        </View>

      </ScrollView>

    </View>

  )

}

export default Home_Screen2;

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

  center_box: {

    backgroundColor: colors.white_color,

    elevation: 1,

    alignSelf: 'center',

    margin: 2,

    borderRadius: 16,

    width: screenWidth / 2.25,

    marginLeft: 10,

    borderWidth:0.5,

    borderColor: colors.white_color,

    shadowOffset: { width: 10, height: 10 },

    shadowColor: '#5A6CEA',

    shadowOpacity: 0.2,

    elevation: 20,

  },

  icon_styles: {

    width: screenWidth / 3,

    height: screenHeight / 12,

  },

  regular_texts: {

    fontFamily: fonts.regular_font,

    fontSize: 12

  }

});