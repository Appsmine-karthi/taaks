import React, { useState } from 'react';

import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';

import { fonts, colors } from '../../components/theme';

import FormInput from "../../components/FormInput";

import ImagePicker from 'react-native-image-crop-picker';

import { RadioButton } from 'react-native-paper';

import { Dropdown } from 'react-native-element-dropdown';

const Home_Screen5 = ({ navigation }) => {

  let [name, setName] = useState('');

  let [phoneNumber, setPhoneNumber] = useState('');

  let [email, setEmail] = useState('');

  let [dob, setDob] = useState('');

  let [address, setAddress] = useState('');

  let [qulification, setQulification] = useState('');

  const [userImage, setUserImage] = useState(null);

  const [modalVisibles, setModalVisibles] = useState(false);

  let [showStatus, setShowStatus] = useState(false);

  const [value, setValue] = React.useState('1');

  let [indexData, setIndexData] = useState('1');

  const takePhotoFromCamera = () => {

    ImagePicker.openCamera({

      compressImageMaxWidth: 125,

      compressImageMaxHeight: 125,

      cropping: true,

      compressImageQuality: 0.7,

    }).then(images => {

      setUserImage(images.path);

      setModalVisibles(false);

    });

  }

  const choosePhotoFromLibrary = () => {

    ImagePicker.openPicker({

      width: 125,

      height: 125,

      cropping: true,

      compressImageQuality: 0.7,

    }).then(image => {

      setUserImage(image.path);

      setModalVisibles(false);

    });

  }

  const model_view = () => {

    setModalVisibles(true);

    setShowStatus(true);

  };

  const hide_modal = () => {

    setModalVisibles(!modalVisibles);

    setShowStatus(false);

  }

  const index_data = [

    { label: 'B.Sc', value: '1' },

    { label: 'MCA', value: '2' }

  ];

  return (

    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor={colors.primary_color} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.header_text}>Profile</Text>

        <View style={{ marginTop: 60, width: screenWidth - 20, flex: 1, alignSelf: 'center' }}>

          <Image source={require('../../assets/line.png')} style={{ width: screenWidth - 30, height: 10 }} resizeMode='contain' />

          <TouchableOpacity onPress={model_view}>

            <View style={styles.center_box}>

              <Image source={require('../../assets/profile_person.png')} style={styles.icon_style} resizeMode='contain' />

              <Text style={[styles.regular_texts, { margin: 10 }]}>Profile Picture</Text>

            </View>

          </TouchableOpacity>

        </View>

        <View style={{ width: screenWidth - 40, alignSelf: 'center' }}>

          <View style={{ marginTop: -30 }}>

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Name</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <FormInput

              labelValue={name}

              placeholderText="Full Name"

              onChangeText={txt => setName(txt)} value={name} />

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

              <Text style={styles.regular_text}>Email</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

              <FormInput

                labelValue={email}

                placeholderText="Email"

                onChangeText={txt => setEmail(txt)} value={email} />

              <View style={{ position: 'absolute', right: 20, paddingTop: 10 }}>

                <Image source={require('../../assets/email.png')} style={styles.icon_styles} resizeMode='contain' />

              </View>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Date of birth</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

              <FormInput

                labelValue={dob}

                placeholderText="Date of birth"

                onChangeText={txt => setDob(txt)} value={dob} />

              <View style={{ position: 'absolute', right: 20, paddingTop: 10 }}>

                <Image source={require('../../assets/calendar.png')} style={styles.icon_styles} resizeMode='contain' />

              </View>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Gender</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>

              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>

                <View style={{ flexDirection: 'row' }}>

                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                    <RadioButton value="1" color="#4A2AE8" />

                    <Text style={styles.radio_btn_text}>Male</Text>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                    <RadioButton value="2" color="#4A2AE8" />

                    <Text style={styles.radio_btn_text}>Female</Text>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                    <RadioButton value="3" color="#4A2AE8" />

                    <Text style={styles.radio_btn_text}>TransGender</Text>

                  </View>

                </View>

              </RadioButton.Group>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>

              <Text style={styles.regular_text}>Address</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <FormInput

              labelValue={address}

              placeholderText="Address"

              onChangeText={txt => setAddress(txt)} value={address} />

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Education Qualification</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <View style={{ marginTop: 10, marginLeft: 5 }}>

              <Dropdown

                style={styles.dropdown_style}

                selectedTextStyle={styles.selectedTextStyle}

                data={index_data.map(item => ({ label: item.label, value: item.value }))}

                containerStyle={{ backgroundColor: colors.white_color, width: screenWidth - 40 }}

                showsVerticalScrollIndicator={false}

                maxHeight={250}

                labelField="label"

                valueField="value"

                value={indexData}

                onChange={item => { setIndexData(item.value) }} />

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Degree</Text>

            </View>

            <FormInput

              labelValue={qulification}

              placeholderText="Degree"

              onChangeText={txt => setQulification(txt)} value={qulification} />

            <View style={{ flexDirection: 'row' }}>

              <Text style={styles.regular_text}>Experience</Text>

              <Text style={styles.regular_text1}>*</Text>

            </View>

            <FormInput

              labelValue={qulification}

              placeholderText="Experience"

              onChangeText={txt => setQulification(txt)} value={qulification} />

          </View>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity /* onPress={model_view} */>

            <View style={styles.audio_box}>

              <Image source={require('../../assets/record_audio.png')} style={styles.icon_style} resizeMode='contain' />

              <Text style={styles.audio_text}>Record Audio Resume</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity /* onPress={model_view} */>

            <View style={[styles.audio_box, { marginLeft: 15 }]}>

              <Image source={require('../../assets/upload_audio.png')} style={styles.icon_style} resizeMode='contain' />

              <Text style={styles.audio_text}>Choose Audio</Text>

            </View>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.btn_view} onPress={() => navigation.navigate('SkillsSelect_Screen')}>

          <Text style={styles.btn_text}>Next</Text>

        </TouchableOpacity>

      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisibles}>

        <View style={styles.modal_center_view}>

          <View style={styles.modal_box}>

            <Text style={styles.list_head_text}>Upload Photo </Text>

            <TouchableOpacity style={styles.modal_btn} onPress={takePhotoFromCamera} >

              <Text style={styles.modal_btn_text}>Take Photo</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.modal_btn} onPress={choosePhotoFromLibrary} >

              <Text style={styles.modal_btn_text}>Choose From Gallery </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.modal_btn} onPress={hide_modal}>

              <Text style={styles.modal_btn_text}>Cancel</Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </View>

  )

}

export default Home_Screen5;

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: colors.white_color

  },

  center_box: {

    backgroundColor: colors.white_color,

    elevation: 1,

    alignSelf: 'center',

    margin: 2,

    borderRadius: 16,

    alignItems: 'center',

    position: 'relative',

    bottom: 60

  },

  icon_style: {

    width: 48,

    height: 48,

    marginTop: 10

  },

  icon_styles: {

    width: 26,

    height: 26,

  },

  header_text: {

    fontFamily: fonts.bold_font,

    fontSize: 16,

    color: colors.black_color,

    paddingLeft: 20,

    paddingTop: 20

  },

  regular_texts: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.black_color

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

    alignSelf: 'center',

    marginBottom: 60

  },

  btn_text: {

    fontFamily: fonts.semibold_font,

    fontSize: 14,

    color: colors.white_color,

    textAlign: 'center',

  },

  modal_center_view: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 50,

  },

  modal_box: {

    margin: 20,

    backgroundColor: colors.secondary_color,

    borderRadius: 20,

    padding: 35,

    alignItems: "center",

    width: screenWidth - 50

  },

  list_head_text: {

    color: colors.white_color,

    fontSize: 14,

    fontFamily: fonts.bold_font,

  },

  modal_btn: {

    borderRadius: 25,

    backgroundColor: colors.light_blue,

    height: 50,

    marginTop: 20,

    width: screenWidth - 100,

    alignSelf: 'center',

    alignItems: 'center',

    alignContent: 'center',

    justifyContent: 'center'

  },

  modal_btn_text: {

    textAlign: "center",

    fontFamily: fonts.semibold_font,

    color: colors.white_color,

    fontSize: 14

  },

  radio_btn_text: {

    fontFamily: fonts.regular_font,

    fontSize: 14,

    color: colors.black_color

  },

  dropdown_style: {

    marginTop: 20,

    marginBottom: 10,

    width: screenWidth - 40,

    height: screenHeight / 16,

    backgroundColor: colors.white_color,

    alignSelf: 'center',

    borderWidth: 1,

    borderRadius: 100,

    borderColor: colors.shadow_color

  },

  selectedTextStyle: {

    fontFamily: fonts.regular_font,

    fontSize: 13,

    paddingLeft: 20,

    borderColor: colors.shadow_color,

    color: colors.black_color

  },

  audio_box: {

    backgroundColor: colors.white_color,

    elevation: 1,

    alignSelf: 'center',

    borderRadius: 16,

    alignItems: 'center',

    position: 'relative',

    width: screenWidth / 2.3,

    height: screenHeight / 7,

    marginTop: 20,

    borderWidth: 0.3,

    borderColor: colors.white_color

  },

  audio_text: {

    fontFamily: fonts.regular_font,

    fontSize: 12,

    paddingTop: 20
    
  }


})