

import React, { useState } from 'react';
import type {JSX, PropsWithChildren} from 'react';
import {

  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  
 
  Text,
  
 
  View,
} from 'react-native';


type DiceProps = PropsWithChildren<{
  imageurl : ImageSourcePropType
}>;

import Diceone from '../assets/diceone.png'
import Dicetwo from '../assets/dicetwo.png'
import Dicethree from '../assets/dicethree.png'
import Dicefour from '../assets/dicefour.png'
import Dicefive from '../assets/dicefive.png'
import Dicesix from '../assets/dicesix.png'


const Dice = ({imageurl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceimage} source={imageurl}

      />
    </View>
  )
}


function App(): JSX.Element {
  const [diceimage, setdiceimage]= useState<ImageSourcePropType>(Diceone)

  const rolldiceontop = () => {
    let randomNumber =Math.floor(Math.random() * 6) + 1;

  
  switch (randomNumber) {
    case 1:
      setdiceimage(Diceone)
       break;
    case 2:
      setdiceimage(Dicetwo)
       break;
    case 3:
      setdiceimage(Dicethree)
       break;
    case 4:
      setdiceimage(Dicefour)
        break; 
    case 5:
      setdiceimage(Dicefive)
        break; 
    case 6:
      setdiceimage(Dicesix)
        break; 
        
        
  
    default:
      setdiceimage(Diceone)
      break;
    
  }
}
  

  return (
    <View style={styles.container}>
      <Dice imageurl={diceimage} />
      <Pressable onPress={rolldiceontop}>
      <Text style={styles.rolldicebtntxt}> ROLL THE DICE</Text>
      </Pressable>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FFFFFF"
  
  },
  dicecontainer:{
    margin:12
  },
  diceimage:{
    width:169,
    height:169
  },
  rolldicebtntxt:{
    paddingHorizontal:40,
    paddingVertical:10,
    borderRadius:8,
    borderWidth:2,
    borderColor:"#E5E0FF",
    fontSize:20,
    color:"#000000",
    fontWeight:"700",
    textTransform:"uppercase"

  }
});

export default App;
