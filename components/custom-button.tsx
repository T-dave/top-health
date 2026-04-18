import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

interface ButtonProps extends TouchableOpacityProps{
  text:string; 
  loading:boolean; 
  textSize?: number;
}

export default function Button({text, loading, style, onPress, textSize}:ButtonProps){
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            {
            loading ?
            <ActivityIndicator/>
            :
            <ThemedText type="defaultSemiBold" style={{color:'#FFF', fontSize:textSize || 16}}>{text}</ThemedText>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:10
    }
});