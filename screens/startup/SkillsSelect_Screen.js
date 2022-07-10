import React, { useState } from "react";

import { View, Text, StyleSheet, StatusBar, Dimensions, BackHandler, Image, TouchableOpacity, ScrollView } from 'react-native';

import { colors, fonts } from '../../components/theme';

import { useFocusEffect } from '@react-navigation/native';

const SkillsSelect_Screen = ({ navigation }) => {

    useFocusEffect(

        React.useCallback(() => {

            const onBackPress = () => { navigation.navigate('Home_Screen'); return true; };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => { BackHandler.removeEventListener('hardwareBackPress', onBackPress); };

        }, []),

    );

    return (

        <View style={styles.container}>

            <StatusBar animated={true} backgroundColor={colors.primary_color} />

            <View style={styles.header_view}>

                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('Home_Screen')}>

                    <Image source={require('../../assets/back.png')} style={styles.icon_style} resizeMode='contain' />

                </TouchableOpacity>

                <Text style={styles.subheader_text}>Please Select Your Skills</Text>

            </View>

            <View style={{ width: screenWidth - 30, marginLeft: 20, marginTop: 20 }}>

                <Text style={styles.regular_text}>Choose 3-5 job skills and we’ll optimize the job vacancy for you.</Text>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Accountant</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={[styles.skill_box, { backgroundColor: colors.secondary_color }]}>

                            <Image source={require('../../assets/skill_selection1.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={[styles.skill_text, { color: colors.white_color }]}>Beautician</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Baking</Text>

                        </View>

                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Carpenter</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Driver</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={[styles.skill_box, { backgroundColor: colors.secondary_color }]}>

                            <Image source={require('../../assets/skill_selection1.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={[styles.skill_text, { color: colors.white_color }]}>Electrician</Text>

                        </View>

                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Dietician</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={[styles.skill_box, { backgroundColor: colors.secondary_color }]}>

                            <Image source={require('../../assets/skill_selection1.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={[styles.skill_text, { color: colors.white_color }]}>Foundry</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Hospitality</Text>

                        </View>

                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Housekeeping</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Mechanic</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Operator</Text>

                        </View>

                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Painter</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Plumber</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <View style={styles.skill_box}>

                            <Image source={require('../../assets/skill_selection.png')} style={styles.icon_styles} resizeMode='contain' />

                            <Text style={styles.skill_text}>Security</Text>

                        </View>

                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.btn_view}>

                    <Text style={styles.btn_text}>Complete Profile</Text>

                </TouchableOpacity>

            </ScrollView>

        </View>

    )

}

export default SkillsSelect_Screen;

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

        fontFamily: fonts.regular_font,

        fontSize: 14,

        color: colors.black_color,

        lineHeight: 24

    },

    skill_box: {

        backgroundColor: colors.white_color,

        elevation: 1,

        alignSelf: 'center',

        borderRadius: 16,

        alignItems: 'center',

        position: 'relative',

        width: screenWidth / 3.5,

        height: screenHeight / 7,

        marginTop: 20,

        borderWidth: 0.5,

        borderColor: colors.secondary_color,

        marginLeft: 10

    },

    skill_text: {

        fontFamily: fonts.regular_font,

        fontSize: 12,

        paddingTop: 20

    },

    icon_styles: {

        width: 48,

        height: 48,

        marginTop: 15

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

        marginBottom: 30

    },

    btn_text: {

        fontFamily: fonts.semibold_font,

        fontSize: 14,

        color: colors.white_color,

        textAlign: 'center',

    },

})