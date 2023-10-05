import React from "react";
import { Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import params from '../params'
import Mine from './Mine'
import Flags from './flags'
const exemplo: React.FC<any> = (props) => {
  const { mined, opened, nearmines, exploded, flagged, onOpen } = props;

  const stylefield: any = [styles.field];

    if (opened) stylefield.push(styles.opened);
    if(exploded) stylefield.push(styles.exploded)
    if(flagged) stylefield.push(styles.flagged)
    if (!opened && !exploded) stylefield.push(styles.regular);

  let color = null;

  if (nearmines > 0) {
    if (nearmines === 1) color = '#2a2bd7';
    if (nearmines === 2) color = '#2b520f';
    if (nearmines > 2 && nearmines < 6) color = '#f9060a';
    if (nearmines >= 6) color = '#f221a9';
  }

  return (
    <TouchableWithoutFeedback onPress={onOpen}>
      <SafeAreaView style={stylefield}>
        {!mined && opened && nearmines > 0 ? (
          <Text style={[styles.label, { color: color || 'defaultColor' }]}>
            {nearmines}
          </Text>) : false}
          {mined && opened ? <Mine/> : false}
          {flagged && !opened ? <Flags/> : false}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {   
    backgroundColor:'red',
    borderColor: 'red'
  },
  flagged : {
    
  }
});

export default exemplo;
