import React from "react";
import { Image, Text, View } from 'react-native'
import { styles } from "./styles";
import logo from '../../../assets/logo3.png'
import Divider from "../Divider";
export default function CardView(){

  const renderImageBox = () =>{
    return(
      <View style={styles.logoContainer} >
       <Image source={logo} />
      </View>
    )
  }

  const renderCarDetails = () =>{
    return(
    <View style={styles.carDetail}>
      <Text style={styles.carBrand} >Lamborghini</Text>
      <Text style ={styles.carModel} >Model</Text>
    </View>
    )
  }


  return(
    <View style={styles.imageContainer}>
      {renderImageBox()}
      <Divider/>
      {renderCarDetails()}
    </View>
  )
}