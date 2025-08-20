import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer:{
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  imageLogo:{
    flex: 1,
    width: '65%',
    resizeMode: 'contain'
  },
  carDetail:{
    alignItems: 'center'
  },
  carBrand:{
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic'
  },
  carModel:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageCar:{
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    height: 100

  }
})