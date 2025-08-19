import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carView:{
    borderColor: '#ffff',
    borderWidth: 3,
    position:'relative',
    width: 350,
    height: '80%',
    overflow: 'hidden'
  },
  triangleCorner:{
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: 'white',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },
  topRight:{
    top: 0,
    right:0,
    transform:[{rotate: '90deg'}]
  },
  bottomLeft:{
    bottom:0,
    transform:[{rotate: '270deg'}]
  },
  bottomRight:{
    right:0,
    bottom: 0,
    transform: [{rotate: '180deg'}]
  }

});