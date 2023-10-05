import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.coremine}></View >
          <View style={styles.line}></View >
          <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]}></View >
          <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]}></View >
          <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]}></View >
        </SafeAreaView>
      );
      
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center'

    },
    coremine : {
        height:14,
        width:14,
        borderRadius:10,
        backgroundColor:'black',
        alignItems: 'center',
        justifyContent:"center"

    },
    line: {
        position:'absolute',
        height:3,
        width:20,
        borderRadius:3,
        backgroundColor:'black'
    }

});
export default exemplo;