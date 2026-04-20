import { View, Image, StyleSheet, ViewProps, TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";
import { LinearGradient } from "expo-linear-gradient";

interface CardProps extends ViewProps{
  name: string;
  occupation: string;
  rating: string;
  image: string;
}
export function DoctorCard1({name, occupation, rating, image, style}:CardProps) {
  return(
    <TouchableOpacity style={[styles.container1, style]}>
      <Image 
      source={{uri:image}}
      style={styles.image}
      />
      <View style={styles.bottom}>
        <View style={styles.top}>
          <ThemedText type="defaultSemiBold">{name}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{fontSize:14}}>⭐{rating}</ThemedText>
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
    </TouchableOpacity>
  )
}

interface ReviewProps extends CardProps{
  review:number;
}

export function DoctorCard2({name, occupation, rating, image, review, style}:ReviewProps) {
  return(
    <TouchableOpacity>
      <View style={[styles.container2, style]}>
        <Image 
        source={{uri:image}}
        style={styles.image2}
        />
        <View style={styles.center}>
          <View>
            <View style={styles.top2}>
              <ThemedText type="defaultSemiBold">{name}</ThemedText>
              <View style={styles.circles}>
                <View>
                  <View style={styles.circle}/>
                </View>
                <View>
                  <View style={styles.circle}/>
                </View>
                <View>
                  <View style={styles.circle}/>
                </View>
              </View>
            </View>
            <ThemedText style={{fontSize:14}} lightColor="#c9c9c9">{occupation}</ThemedText>
          </View>
          <View style={styles.bottom2}>
            <ThemedText style={{fontSize:14, marginRight:8}}>⭐</ThemedText>
            <ThemedText type="defaultSemiBold" style={{fontSize:14}}>{rating}</ThemedText>
            <ThemedText style={{fontSize:14}} lightColor="#c9c9c9">({review} reviews)</ThemedText>
          </View>
        </View>
      </View>
      <LinearGradient
          colors={['rgba(0,0,0,0.03)', 'transparent']}
          style={{
            height: 8,
            width: '100%',
          }}
        />
      </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  container1:{
  },
  container2:{
    flexDirection:'row',
  },
  image:{
    width:'100%',
    height:160,
    borderTopRightRadius:15,
    borderTopLeftRadius:15
  },
  image2:{
    width:'30%',
    height:100,
    borderRadius:10
  },
  top:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  bottom:{
    padding:10, 
    paddingBottom:12,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15
  },
  center:{
    flex:1,
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:18,
  },
  circles:{
    flexDirection:'row',
  },
  circle:{
    borderWidth:1,
    borderColor:'#B7B7B7',
    padding:2,
    borderRadius:5,
    marginRight:3
  },
  top2:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  bottom2:{
    flexDirection:'row',
    alignItems:'center'
  }
});