import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from 'react-native'
import { styles } from "./styles";
import logo from '../../../assets/logo3.png'
import Divider from "../Divider";
import { CAR_IMG_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { carModel } from "./props";
import { loadCarData, nextCar, prevCar } from "./actions";
export default function CardView(){
  const [carData, setCarData] = useState<carModel | null>(null);

  useEffect(() => {
     (async ()=>{
      await loadCarData(1, setCarData)
     })()
  }, [])

  //Função IIFE -> estrutura (code)()


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
      <Text style={styles.carBrand} >{carData?.carName}</Text>
      <Text style ={styles.carModel} >{carData?.releaseYear}</Text>
    </View>
    )
  }

  const renderImageCar = () =>{
    return(
      <Image style={styles.imageCar} source={{uri:`${CAR_IMG_URL}${carData?.id}.png` }}/>
    )
  }

  const priceControls = () =>{
    return(
      <View style={styles.labelControlStyle}>
        <Button title="<" color={'#7595e4ff'} onPress={()=> prevCar(carData, setCarData)} />
        <Text style={styles.textLabel} >{carData?.price}</Text>
        <Button title=">"  color={'#7595e4ff'} onPress={()=> nextCar(carData, setCarData)} />
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