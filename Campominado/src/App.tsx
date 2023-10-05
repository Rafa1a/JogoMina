
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import params from './params'
import Field from './Componentes/Field'
import Minefield from './Minefield'
import { 
  creatminedboard,
  cloneboard,
  opoenfield,
  hadexplosion,
  wongame,
  showmines } from './functions';
//////////////////////////////////////////////////////
// const initialstat = {
//   displayValue : '0',
//   cleardisplay:false,
//   operation:null,
//   values :[0,0],
//   current: 0

// }

export default class App extends React.Component {
  
  
  minesAmaoun= () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols*params.difficultLevel)
  }
  creatstate= () => {
    const cols = params.getColumnsAmount() 
    const rows = params.getRowsAmount()
    return {
      board: creatminedboard(rows, cols,this.minesAmaoun()),
      won:false,
      lost:false,

    }
  }
  onOpenfield = (row:number,column:number) => {
    const board = cloneboard(this.state.stateini.board)
    opoenfield(board,row,column)
    const lost =hadexplosion(board)
    const won = wongame(board)
    if(lost){
      showmines(board)
      Alert.alert('Perdeuuuu', 'que burro!')
    }
    if(won){
      Alert.alert('parabens', 'vc venceu')
    }
    this.setState({board, lost, won})
  } 
  state ={
    stateini: this.creatstate()
  } 
  
  render() {
   
    return (
    <SafeAreaView style={styles.conteiners}>
      <Text> Iniciando o mines!</Text>
      <Text>Tamanho da grade : 
        {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <View style={styles.board}>
          <Minefield board = {this.state.stateini.board}
          onOpenfield={this.onOpenfield}/>
      </View>
      
    </SafeAreaView>)
    
 
  }
    
}
const styles = StyleSheet.create({
  conteiners:{
      flex:1, 
      justifyContent: 'flex-end',
     
  },
  
  board : {
    alignItems: 'center',
    backgroundColor: '#aaa'

  }
});

