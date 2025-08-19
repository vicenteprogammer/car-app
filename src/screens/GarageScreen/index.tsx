import { View } from 'react-native'
import { styles } from './styles'

export default function GarageScreen(){
  return(
    <View style={styles.container}>
      <View style={styles.carView}>
        <View style={styles.triangleCorner}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>
      </View>
    </View>
  )
}