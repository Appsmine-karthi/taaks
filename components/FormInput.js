import React from 'react';

import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

import { colors, fonts } from '../components/theme';

const FormInput = ({ labelValue, placeholderText, ...rest }) => {

    return (

        <View style={styles.input_container}>

            <TextInput

                value={labelValue}

                style={styles.input_style}

                numberOfLines={1}

                placeholder={placeholderText}

                placeholderTextColor="#707171"

                {...rest}

            />

        </View>

    );

}

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

    input_container: {

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

    input_style: {

        flex: 1,

        padding: 10,

        paddingLeft:20,

        fontSize: 14,

        fontFamily: fonts.regular_font,

        color: colors.black_color,

        justifyContent: 'center',

        alignItems: 'center'

    }

})

export default FormInput;