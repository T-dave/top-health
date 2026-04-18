import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from "@/constants/theme";

interface ButtonProps extends TouchableOpacityProps{
  text:string; 
  loading:boolean; 
}

export default function Button({text, loading, style, onPress}:ButtonProps){
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            {
            loading ?
            <ActivityIndicator/>
            :
            <ThemedText style={{color:'#FFF'}}>{text}</ThemedText>
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