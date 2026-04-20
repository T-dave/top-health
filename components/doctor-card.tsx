import { View, Image, StyleSheet, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import { LinearGradient } from "expo-linear-gradient";

interface CardProps extends ViewProps{
  name: string;
  occupation: string;
  rating: number;
  image: string;
}
export function DoctorCard1({name, occupation, rating, image, style}:CardProps) {
  return(
    <View style={[styles.container, style]}>
      <Image 
      source={{uri:image}}
      style={styles.image}
      />
      <View style={{padding:10, paddingBottom:12}}>
        <View style={styles.top}>
          <ThemedText type="defaultSemiBold">{name}</ThemedText>
          <ThemedText style={{fontSize:14}}>⭐{rating}</ThemedText>
        </View>
        <ThemedText style={{fontSize:14}} lightColor="#c9c9c9">{occupation}</ThemedText>
      </View>
      <LinearGradient
        colors={['rgba(0,0,0,0.03)', 'transparent']}
        style={{
          height: 8,
          width: '100%',
        }}
      />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    borderRadius:15,
  },
  image:{
    width:'100%',
    height:160,
    borderTopRightRadius:15,
    borderTopLeftRadius:15
  },
  top:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});