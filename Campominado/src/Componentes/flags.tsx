import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View  style={[styles.flagpole, props.bigger ? styles.flagpolebigger : null]}></View>
            <View  style={[styles.flag, props.bigger? styles.flagbigger : null]}></View>
            <View  style={[styles.base1, props.bigger ? styles.base1bigger : null]}></View>
            <View  style={[styles.base2, props.bigger ? styles.base2bigger : null]}></View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container:{
        marginTop:2

    },
    flagpole : {
        position:'absolute',
        height:14,
        width:2,
        backgroundColor:'#222',
        marginLeft:9
    },
    flag: {
        position:'absolute',
        height: 5 ,
        width: 6,
        backgroundColor: '#f22',
        marginLeft:3,
    },
    base1 : {
        position:'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft:7,
        marginTop:10,

    },
    base2: {
        position:'absolute',
        height:2,
        width:10,
        backgroundColor:'#222',
        marginLeft: 5,
        marginTop:12
    },
    flagpolebigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flagbigger: {
        height: 10,
        width: 14,
        marginLeft:3,
    },
    base1bigger: {
        height:4,
        width:12,
        marginTop:20,
        marginLeft:12
    },
    base2bigger : {
        height:4,
        width:20,
        marginTop:24,
        marginLeft:8
    }

});
export default exemplo;