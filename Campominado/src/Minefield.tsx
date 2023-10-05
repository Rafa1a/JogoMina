import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import Field from './Componentes/Field'
interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    const rows = props.board.map((row:any,r:number) =>{
        const columns = row.map((field:any, c:number)=>{
            return <Field {...field} key={c}/>
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return (
        <View style={styles.containers}>{rows}</View>
    );
};
const styles = StyleSheet.create({
    containers:{
        
        backgroundColor: '#eee'

    },
    
});
export default exemplo;