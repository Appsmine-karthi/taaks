import React, { useEffect } from 'react';

import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, BackHandler, Alert } from 'react-native';

import { fonts, colors } from '../../components/theme';

import Swiper from 'react-native-swiper';

const Home_Screen1 = ({ navigation }) => {

  useEffect(() => {

    const backAction = () => {

      if (navigation.isFocused()) {

        Alert.alert("Taak", "Are you sure you want to exit the app?", [

          { text: "No", onPress: () => null, style: "cancel" },

          { text: "YES", onPress: () => BackHandler.exitApp() }

        ]);

        return true;

      }

    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();

  }, [])

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={styles.header_view}>

          <View style={styles.input_container}>

            <TextInput

              style={styles.input_style}

              placeholder="Search"

              placeholderTextColor="#707171" />

            <View style={{ position: 'absolute', right: 10, alignItems: 'center', alignSelf: 'center' }}>

              <Image source={require('../../assets/search.png')} style={{ width: 32, height: 32 }} resizeMode='contain' />

            </View>

          </View>

          <TouchableOpacity style={styles.right_view}>

            <Image source={require('../../assets/notification.png')} style={{ width: 126, height: 126 }} resizeMode='contain' />

          </TouchableOpacity>

        </View>

        <View style={styles.banner_view}>

          <Swiper loop={true} autoplay={true} autoPlayWithInterval={1000} showsButtons={false} paginationStyle={{ bottom: 37, justifyContent: 'center' }}>

            <Image style={styles.banner_style} source={require('../../assets/banner.png')} resizeMode='contain' />

            <Image style={styles.banner_style} source={require('../../assets/banner.png')} resizeMode='contain' />

            <Image style={styles.banner_style} source={require('../../assets/banner.png')} resizeMode='contain' />

          </Swiper>

        </View>

        <View style={styles.center_box}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/milky.png')} style={styles.icon_style} resizeMode='contain' />

            <View style={{ marginLeft: 10 }}>

              <Text style={styles.jobs_detaisl_text}>Shop Keeper</Text>

              <Text style={styles.jobs_detaisl_text}>Milky Mist, Erode</Text>

              <Text style={styles.jobs_detaisl_text1}>Posted on : 20th May 2022</Text>

            </View>

          </View>

          <View style={{ position: 'absolute', marginTop: 20, right: 10 }}>

            <View style={{ flexDirection: 'row' }}>

              <Image source={require('../../assets/currency.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>Rs 8,000 to 12,000</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Image source={require('../../assets/location.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>Perundurai</Text>

            </View>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>

            <Image source={require('../../assets/education.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

            <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Graduate  (Bachelor Degree)</Text>

          </View>

          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/star.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>3-5 years</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/gender.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Both</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/experince.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Tamil</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/card.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Full Time</Text>

            </View>

          </View>

          <View style={{ marginTop: 10 }}>

            <Text style={[styles.sub_header_text, { paddingLeft: 10 }]}>About Job</Text>

          </View>

          <View style={{ marginTop: 10 }}>

            <Text style={[styles.salary_detaisl_text, { paddingLeft: 10, color: colors.black_color, lineHeight: 22 }]}>Pitching and selling the assigned products to customers who walk into the storesAddressing customer queries about the products Conduct price and feature comparisons to facilitate purchasing...     Read More</Text>

          </View>

          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, marginBottom: 20 }}>

            <TouchableOpacity>

              <Image source={require('../../assets/job_detail11.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail21.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail31.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <View style={{ position: 'absolute', right: 10, top: -30 }}>

              <TouchableOpacity >

                <Image source={require('../../assets/apply_btn.png')} style={{ width: 126, height: 86 }} resizeMode='contain' />

              </TouchableOpacity>

            </View>

          </View>

        </View>

        <View style={[styles.center_box, { marginTop: 20 }]}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/milky.png')} style={styles.icon_style} resizeMode='contain' />

            <View style={{ marginLeft: 10 }}>

              <Text style={[styles.jobs_detaisl_text, { lineHeight: 24 }]}>Progress  In Diary Technology</Text>

              <Text style={[styles.jobs_detaisl_text1, { fontSize: 10, lineHeight: 18 }]}>Posted on : 20th May 2022</Text>

            </View>

          </View>

          <View style={{ alignSelf: 'center' }}>

            <Image source={require('../../assets/Progress.png')} style={styles.icon_styles} resizeMode='contain' />

          </View>

          <View style={{ marginTop: -10 }}>

            <Text style={[styles.salary_detaisl_text, { paddingLeft: 10, color: colors.black_color, lineHeight: 22 }]}>Dairy product sales and branding,Desired Candidate Profile,Perks and Benefits As per FMCG standards,Dairy product sales and branding..Read More</Text>

            <Text style={[styles.salary_detaisl_text, { paddingLeft: 10, color: colors.black_color, lineHeight: 22 }]}>#Dairy #StartUp #MilkyMist</Text>

          </View>

          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 30, marginBottom: 0 }}>

            <View style={{ position: 'absolute', right: 10, bottom: 10, flexDirection: 'row' }}>

              <TouchableOpacity>

                <Image source={require('../../assets/job_detail11.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

              </TouchableOpacity>

              <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail31.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            </View>

          </View>

        </View>

        <View style={styles.center_box}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/milky.png')} style={styles.icon_style} resizeMode='contain' />

            <View style={{ marginLeft: 10 }}>

              <Text style={styles.jobs_detaisl_text}>Shop Keeper</Text>

              <Text style={styles.jobs_detaisl_text}>Milky Mist, Erode</Text>

              <Text style={styles.jobs_detaisl_text1}>Posted on : 20th May 2022</Text>

            </View>

          </View>

          <View style={{ position: 'absolute', marginTop: 20, right: 10 }}>

            <View style={{ flexDirection: 'row' }}>

              <Image source={require('../../assets/currency.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>Rs 8,000 to 12,000</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Image source={require('../../assets/location.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>Perundurai</Text>

            </View>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>

            <Image source={require('../../assets/education.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

            <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Graduate  (Bachelor Degree)</Text>

          </View>

          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/star.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>3-5 years</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/gender.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Both</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/experince.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Tamil</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/card.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Full Time</Text>

            </View>

          </View>

          <View style={{ marginTop: 10 }}>

            <Text style={[styles.sub_header_text, { paddingLeft: 10 }]}>About Job</Text>

          </View>

          <View style={{ marginTop: 10 }}>

            <Text style={[styles.salary_detaisl_text, { paddingLeft: 10, color: colors.black_color, lineHeight: 22 }]}>Pitching and selling the assigned products to customers who walk into the storesAddressing customer queries about the products Conduct price and feature comparisons to facilitate purchasing...     Read More</Text>

          </View>

          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, marginBottom: 20 }}>

            <TouchableOpacity>

              <Image source={require('../../assets/job_detail11.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail21.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail31.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <View style={{ position: 'absolute', right: 10, top: -30 }}>

              <TouchableOpacity >

                <Image source={require('../../assets/apply_btn.png')} style={{ width: 126, height: 86 }} resizeMode='contain' />

              </TouchableOpacity>

            </View>

          </View>

        </View>

        <View style={[styles.center_box, { marginTop: 20 }]}>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <Image source={require('../../assets/milky.png')} style={styles.icon_style} resizeMode='contain' />

            <View style={{ marginLeft: 10 }}>

              <Text style={styles.jobs_detaisl_text}>Progress Diary Technology</Text>

              <Text style={styles.jobs_detaisl_text}>Milky Mist, Erode</Text>

              <Text style={styles.jobs_detaisl_text}>Posted on : 20th May 2022</Text>

            </View>

          </View>

          <View style={{ position: 'absolute', marginTop: 20, right: 10 }}>

            <View style={{ flexDirection: 'row' }}>

              <Image source={require('../../assets/currency.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>Rs 8,000 to 12,000</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Image source={require('../../assets/location.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>Perundurai</Text>

            </View>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>

            <Image source={require('../../assets/education.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

            <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Graduate  (Bachelor Degree)</Text>

          </View>

          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/star.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>3-5 years</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/gender.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Both</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/experince.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Tamil</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

              <Image source={require('../../assets/card.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Full Time</Text>

            </View>

          </View>

          <View style={{ marginTop: 10 }}>

            <Text style={[styles.sub_header_text, { paddingLeft: 10 }]}>About Job</Text>

          </View>

          <View style={{ marginTop: 10 }}>

            <Text style={[styles.salary_detaisl_text, { paddingLeft: 10, color: colors.black_color, lineHeight: 22 }]}>Pitching and selling the assigned products to customers who walk into the storesAddressing customer queries about the products Conduct price and feature comparisons to facilitate purchasing...     Read More</Text>

          </View>

          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, marginBottom: 20 }}>

            <TouchableOpacity>

              <Image source={require('../../assets/job_detail11.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail21.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 10 }}>

              <Image source={require('../../assets/job_detail31.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />

            </TouchableOpacity>

            <View style={{ position: 'absolute', right: 10, top: -30 }}>

              <TouchableOpacity >

                <Image source={require('../../assets/apply_btn.png')} style={{ width: 126, height: 86 }} resizeMode='contain' />

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </ScrollView>

    </View>

  )

}

export default Home_Screen1;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.white_color

  },

  header_view: {

    marginLeft: 10,

    marginTop: 20,

    flexDirection: 'row',

    alignItems: 'center',

  },

  right_view: {

    position: 'absolute',

    right: 0,

  },

  logo_style: {

    width: 42,

    height: 42

  },

  input_container: {

    width: screenWidth - 100,

    height: screenHeight / 18,

    backgroundColor: colors.shadow_color,

    alignSelf: 'center',

    borderRadius: 100,

    elevation: 1,

    flexDirection: 'row',

    marginLeft: 10

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

  tab_style: {

    width: screenWidth / 5,

    height: screenHeight / 18,

    borderRadius: 100,

    backgroundColor: colors.secondary_color,

    justifyContent: 'center',

    marginTop: 20,

    marginLeft: 10

  },

  sub_header_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.black_color,

  },

  banner_view: {

    width: screenWidth - 20,

    height: screenHeight / 4,

    alignSelf: 'center',

    shadowOffset: { width: 10, height: 10 },

    shadowColor: '#5A6CEA',

    shadowOpacity: 0.2,

    elevation: 20,

  },

  banner_style: {

    marginTop: 30,

    width: screenWidth - 30,

    height: screenHeight / 5.5,

    alignSelf: 'center',

    justifyContent: 'center'

  },

  banner_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 18,

    color: colors.white_color,

    lineHeight: 34,

    paddingLeft: 20

  },

  center_box: {

    width: screenWidth - 20,

    backgroundColor: colors.white_color,

    elevation: 2,

    alignSelf: 'center',

    margin: 2,

    borderRadius: 16,

    marginTop: 10,

    marginBottom: 10,

    borderWidth: 0.5,

    borderColor: colors.white_color,

    shadowOffset: { width: 10, height: 10 },

    shadowColor: '#5A6CEA',

    shadowRadius: 0,

    shadowOpacity: 0.2,

    elevation: 20,

  },

  icon_style: {

    width: 42,

    height: 48,

    marginLeft: 10

  },

  jobs_detaisl_text: {

    fontFamily: fonts.regular_font,

    fontSize: 11,

    color: colors.black_color,

    lineHeight: 16

  },

  jobs_detaisl_text1: {

    fontFamily: fonts.regular_font,

    fontSize: 8,

    color: colors.black_color

  },

  salary_detaisl_text: {

    fontFamily: fonts.regular_font,

    fontSize: 11,

  },

  icon_styles: {

    width: screenWidth - 40,

    height: screenHeight / 4.5

  }

});