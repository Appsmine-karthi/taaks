import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Modal, PermissionsAndroid, FlatList } from 'react-native';

import { fonts, colors } from '../../components/theme';

import Geolocation from 'react-native-geolocation-service';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';

import { api_connection } from '../../components/api_connection';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home_Screen3 = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibles, setModalVisibles] = useState(false);

  const [modalVisibleses, setModalVisibleses] = useState(false);

  const [currentLongitude, setCurrentLongitude] = useState(77.7172);

  const [currentLatitude, setCurrentLatitude] = useState(11.3410);

  const [locationStatus, setLocationStatus] = useState('');

  let [loading, setLoading] = useState(false);

  const [jobData, setJobData] = useState([]);

  let [errorMsg, setErrorMsg] = useState('Data Loading ...');

  const view_filter = () => {

    setModalVisible(true);

  }

  const job_apply = () => {

    setModalVisibles(true);

    setTimeout(() => {

      setModalVisibles(false);

    }, 1000);

  }

  const view_map = () => {

    setModalVisibleses(true);

  }

  const get_jobDetails = async () => {

    var access_token = await AsyncStorage.getItem('token');

    axios.get(api_connection + 'job',

      {

        headers: {

          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

          'x-auth-header': access_token

        },

      })

      .then(response => {

        if (isRendered) {

          setLoading(false);

          if (response.data.message === "Success") {

            setJobData(response.data.data);

          }

          else {

            setErrorMsg('No Data');

          }

        }

        return null;

      })

      .catch(err => console.log(err));

  }

  let isRendered = React.useRef(false);

  useEffect(() => {

    setLoading(true);

    isRendered = true;

    get_jobDetails();

    return () => {

      isRendered = false;

    };

  }, []);

  /* useEffect(() => {

    const granted = PermissionsAndroid.request(

      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

      {

        title: 'Location Access Required',

        message: 'This App needs to Access your location',

      },

    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      getOneTimeLocation();

      subscribeLocationLocation();

    } else {

      setLocationStatus('Permission Denied');

      getOneTimeLocation();

    }

  }); */

  const getOneTimeLocation = () => {

    Geolocation.getCurrentPosition(

      (position) => {

        setCurrentLongitude(position.coords.longitude);

        setCurrentLatitude(position.coords.latitude);

      }

    )

  }

  const subscribeLocationLocation = () => {

    (position) => {

      setCurrentLongitude(position.coords.longitude);

      setCurrentLatitude(position.coords.latitude);

    }

  }

  const ASPECT_RADIO = screenWidth / screenHeight;

  const LATITUDE_DELTA = 0.9222;

  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO;

  const renderFooter = () => {

    return (

      <View style={styles.footer}>

      </View>

    );

  };

  const EmptyListMessage = () => {

    return (

      <View style={styles.empty_view}>

        <Image source={require('../../assets/nodata.png')} style={styles.empty_image} resizeMode="contain" />

        <Text style={[styles.emptyListStyle, { color: colors.text_color }]}> {errorMsg} </Text>

      </View>

    );

  };

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

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

        <TouchableOpacity style={styles.right_view1} onPress={view_map}>

          <Image source={require('../../assets/locations.png')} style={{ width: 110, height: 110 }} resizeMode='contain' />

        </TouchableOpacity>

        <TouchableOpacity style={styles.right_view} onPress={view_filter}>

          <Image source={require('../../assets/filter.png')} style={{ width: 100, height: 100 }} resizeMode='cover' />

        </TouchableOpacity>

      </View>

      <FlatList showsVerticalScrollIndicator={false}

        data={jobData}

        removeClippedSubviews={true}

        maxToRenderPerBatch={8}

        windowSize={10}

        initialNumToRender={8}

        keyExtractor={({ _id }) => `key-${_id}`}

        renderItem={({ item, index }) => (

          <View style={styles.center_box}>

            <View style={{ marginTop: 10, flexDirection: 'row' }}>

              <Image source={require('../../assets/milky.png')} style={styles.icon_style} resizeMode='contain' />

              <View style={{ marginLeft: 10 }}>

                <Text style={styles.jobs_detaisl_text}>{item.companyId.companyName}</Text>

                <Text style={styles.jobs_detaisl_text}>{item.companyId.companyName}, {item.location}</Text>

                <Text style={styles.jobs_detaisl_text1}>Posted on : {item.activeFromDate}</Text>

              </View>

            </View >

            <View style={{ position: 'absolute', marginTop: 20, right: 10 }}>

              <View style={{ flexDirection: 'row' }}>

                <Image source={require('../../assets/currency.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

                <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>{item.salaryFrom} to {item.salaryTo}</Text>

              </View>

              <View style={{ flexDirection: 'row' }}>

                <Image source={require('../../assets/location.png')} style={{ width: 16, height: 16 }} resizeMode='contain' />

                <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 0 }]}>{item.location}</Text>

              </View>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>

              <Image source={require('../../assets/education.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

              <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>Graduate  (Bachelor Degree)</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

                <Image source={require('../../assets/star.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />

                <Text style={[styles.salary_detaisl_text, { color: colors.light_red, paddingLeft: 5 }]}>{item.experienceYear} years</Text>

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

              <Text style={[styles.salary_detaisl_text, { paddingLeft: 10, color: colors.black_color, lineHeight: 22 }]}>{item.description[0].name}</Text>

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

                <TouchableOpacity onPress={job_apply}>

                  <Image source={require('../../assets/apply_btn.png')} style={{ width: 126, height: 86 }} resizeMode='contain' />

                </TouchableOpacity>

              </View>

            </View>

          </View >

        )}

        ListFooterComponent={renderFooter}

        ListEmptyComponent={EmptyListMessage}

      />


      {/* <Modal animationType="slide" transparent={true} visible={modalVisible}>

        <View style={[styles.modal_center, { backgroundColor: colors.white_color }]}>

          <View style={{ margin: 10 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

              <Text style={styles.modal_header}>Search Filter</Text>

              <View>

                <Text style={styles.modal_subheader}>Field of work</Text>

                <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: 20 }}>

                  <Text style={[styles.modal_header, { color: colors.secondary_color }]}>See all</Text>

                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>All Job</Text>

                  </View>

                  <View style={[styles.round_box, { backgroundColor: colors.secondary_color }]}>

                    <Text style={[styles.round_text, { color: colors.white_color }]}>Accountant</Text>

                  </View>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>Marketing</Text>

                  </View>

                </View>

                <View style={{ flexDirection: 'row' }}>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>Shop Keeper</Text>

                  </View>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>Security</Text>

                  </View>

                </View>

                <View>

                  <Text style={styles.modal_subheader}>Salary</Text>

                  <Image source={require('../../assets/slider.png')} style={{ width: screenWidth - 80, height: 80, marginTop: 20 }} resizeMode='contain' />

                </View>

                <Text style={styles.modal_subheader}>Type</Text>

                <View style={{ flexDirection: 'row' }}>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>All Type</Text>

                  </View>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>Full-time</Text>

                  </View>

                  <View style={[styles.round_box, { backgroundColor: colors.secondary_color }]}>

                    <Text style={[styles.round_text, { color: colors.white_color }]}>Part-time</Text>

                  </View>

                </View>

                <View style={{ flexDirection: 'row' }}>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>Contract</Text>

                  </View>

                  <View style={styles.round_box}>

                    <Text style={styles.round_text}>Freelance</Text>

                  </View>

                </View>

                <View>

                  <Text style={styles.modal_subheader}>Location</Text>

                  <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: 20 }}>

                    <Text style={[styles.modal_header, { color: colors.secondary_color }]}>See all</Text>

                  </TouchableOpacity>

                  <View style={{ flexDirection: 'row' }}>

                    <View style={styles.round_box}>

                      <Text style={styles.round_text}>All Location</Text>

                    </View>

                    <View style={[styles.round_box, { backgroundColor: colors.secondary_color }]}>

                      <Text style={[styles.round_text, { color: colors.white_color }]}>Coimbatore</Text>

                    </View>

                    <View style={styles.round_box}>

                      <Text style={styles.round_text}>Erode</Text>

                    </View>

                  </View>

                </View>

              </View>

              <View style={{ flexDirection: 'row', marginBottom: 20 }}>

                <TouchableOpacity style={[styles.round_box, { height: screenHeight / 16, width: screenWidth / 4 }]} onPress={() => setModalVisible(false)}>

                  <Text style={styles.round_text}>Close</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.round_box, { width: screenWidth - 160, backgroundColor: '#6499FF', height: screenHeight / 16, borderRadius: 32, borderWidth: 0 }]} onPress={() => setModalVisible(false)}>

                  <Text style={[styles.round_text, { color: colors.white_color }]}>Apply filter</Text>

                </TouchableOpacity>

              </View>

            </ScrollView>

          </View>

        </View>

      </Modal> */}

      {/* <Modal animationType="slide" transparent={true} visible={modalVisibles}>

        <View style={styles.modal_view}>

          <Text style={styles.modal_regular_text}>Applied Successfully</Text>

        </View>

      </Modal> */}

      {/* <Modal animationType="slide" transparent={true} visible={modalVisibleses}>

        <View style={styles.modal_view}>

          <View style={{ marginTop: 30 }}>

            <MapView

              provider={PROVIDER_GOOGLE}

              style={styles.map}

              region={{

                latitude: currentLatitude,

                longitude: currentLongitude,

                latitudeDelta: LATITUDE_DELTA,

                longitudeDelta: LONGITUDE_DELTA,

              }}

              zoomEnabled={true}

              pitchEnabled={true}

              showsCompass={true}

              liteMode={false}

              showsBuildings={true}

              showsTraffic={true}

              showsIndoors={true}

            >

              <Marker

                coordinate={{

                  latitude: currentLatitude,

                  longitude: currentLongitude

                }}

                centerOffset={{ x: -18, y: -60 }}

                anchor={{ x: 0.69, y: 1 }} >

                <Image source={require('../../assets/location_marker.png')} style={{ height: 30, width: 30 }} />

              </Marker>

              <Marker

                coordinate={{

                  latitude: 11.3410,

                  longitude: 77.7172

                }}>

                <Image source={require('../../assets/location_marker.png')} style={{ height: 30, width: 30 }} />

              </Marker>

              <Marker

                coordinate={{

                  latitude: 11.0168,

                  longitude: 76.9558

                }}>

                <Image source={require('../../assets/location_marker.png')} style={{ height: 30, width: 30 }} />

              </Marker>

              <Marker

                coordinate={{

                  latitude: 11.6643,

                  longitude: 78.1460

                }}>

                <Image source={require('../../assets/location_marker.png')} style={{ height: 30, width: 30 }} />

              </Marker>

            </MapView>

          </View>

          <TouchableOpacity onPress={() => setModalVisibleses(false)}>

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6499FF', '#4A2AE8']} style={styles.btn_view}>

              <Text style={styles.btn_text}>Close</Text>

            </LinearGradient>

          </TouchableOpacity>

        </View>

      </Modal> */}

    </View>

  )

}

export default Home_Screen3;

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

  right_view1: {

    position: 'absolute',

    right: 40,

  },

  logo_style: {

    width: 42,

    height: 42

  },

  input_container: {

    width: screenWidth - 150,

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

  banner_style: {

    marginTop: 30,

    width: screenWidth - 30,

    height: screenHeight / 5.5,

    borderRadius: 25,

    backgroundColor: colors.secondary_color,

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

    elevation: 1,

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

    width: 48,

    height: 48,

    marginLeft: 10

  },

  jobs_detaisl_text: {

    fontFamily: fonts.regular_font,

    fontSize: 12,

    color: colors.black_color,

    lineHeight: 18

  },

  jobs_detaisl_text1: {

    fontFamily: fonts.regular_font,

    fontSize: 8,

    color: colors.black_color

  },

  salary_detaisl_text: {

    fontFamily: fonts.regular_font,

    fontSize: 12,

  },

  modal_center: {

    height: screenHeight - 100,

    width: screenWidth - 20,

    borderTopLeftRadius: 24,

    borderTopRightRadius: 24,

    position: 'absolute',

    bottom: 0,

    alignSelf: 'center',

    elevation: 2,

    backgroundColor: colors.white_color

  },

  modal_header: {

    fontFamily: fonts.regular_font,

    fontSize: 14,

    alignSelf: 'center',

    color: colors.black_color

  },

  modal_subheader: {

    fontFamily: fonts.bold_font,

    fontSize: 14,

    color: colors.black_color,

    marginTop: 20

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

    fontSize: 14,

    color: colors.secondary_color

  },

  modal_view: {

    width: screenWidth - 60,

    height: screenHeight / 14,

    marginTop: screenHeight / 2,

    backgroundColor: '#E3E3E3',

    borderWidth: 1,

    borderColor: colors.black_color,

    borderRadius: 20,

    alignSelf: 'center',

    justifyContent: 'center',

  },

  modal_regular_text: {

    fontFamily: fonts.regular_font,

    fontSize: 14,

    color: colors.black_color,

    textAlign: 'center',

  },

  map: {

    width: screenWidth - 40,

    height: screenHeight / 1.4,

    alignSelf: 'center'

  },

  btn_view: {

    width: screenWidth - 40,

    height: screenHeight / 14,

    borderRadius: 100,

    backgroundColor: colors.secondary_color,

    marginTop: 30,

    justifyContent: 'center',

  },

  btn_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.white_color,

    textAlign: 'center'

  },

  empty_view: {

    justifyContent: 'center',

    alignSelf: 'center',

    height: screenHeight / 1.5

  },

  emptyListStyle: {

    padding: 10,

    fontSize: 14,

    textAlign: 'center',

    fontFamily: fonts.semibold_font,

  },

  empty_image: {

    width: screenWidth / 5,

    height: screenHeight / 14,

    alignSelf: 'center'

  },


});