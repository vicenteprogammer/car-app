import React from "react";
import { Button, Image, Text, View } from 'react-native'
import { styles } from "./styles";
import logo from '../../../assets/logo3.png'
import Divider from "../Divider";
import { CAR_IMG_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
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

  const renderImageCar = () =>{
    return(
      <Image style={styles.imageCar} source={{uri:`${CAR_IMG_URL}4.png` }}/>
    )
  }

  const priceControls = () =>{
    return(
      <View style={styles.labelControlStyle}>
        <Button title="<" color={'#7595e4ff'} onPress={()=>{}} />
        <Text style={styles.textLabel} >Value</Text>
        <Button title=">"  color={'#7595e4ff'} onPress={()=>{}} />
      </View>
    )
  }


  return(
    <View style={styles.imageContainer}>
      {renderImageBox()}
      <Divider/>
      {renderCarDetails()}
      {renderImageCar()}
      <Divider/>
      <BuyButton/>
      {priceControls()}
    </View>
  )
}