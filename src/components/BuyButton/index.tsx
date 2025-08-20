import React from "react";

import { TouchableOpacity, View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./styles";

export default function BuyButton(){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle} >
        <AntDesign name="shoppingcart" size={24} style={{marginRight: 5}} color="white" />
        <Text style={styles.textStyle} >Buy Car</Text>
      </TouchableOpacity>
    </View>
  )
}