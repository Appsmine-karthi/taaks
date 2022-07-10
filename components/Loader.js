import React from "react";

import { StyleSheet, View, Modal, Dimensions, ActivityIndicator } from 'react-native';

const Loader = props => {

  const { loading, ...attributes } = props;

  return (
    <Modal transparent={true} animationType={'none'} visible={loading} onRequestClose={() => { }}>

      <View style={[styles.container, styles.horizontal]}>

        <ActivityIndicator size="large" color="#4A2AE8" />

      </View>

    </Modal>

  );
};

const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    width: screenWidth / 3,

    height: screenHeight / 3,

    alignSelf: 'center'

  },

  horizontal: {

    flexDirection: "row",

    justifyContent: "space-around",

    padding: 10

  }

});

export default Loader;