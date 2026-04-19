import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";

export default function Top({title}:{title:string}){
    return(
        <View style={styles.container}>
            <View/>
            <TouchableOpacity style={styles.back} onPress={()=>router.back()}>
                <MaterialIcons name="chevron-left" size={38} color={Colors.primary}/>
            </TouchableOpacity>
            <ThemedText type="title" style={{color:Colors.primary, fontSize:25}}>{title}</ThemedText>
            <View/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:8
    },
    back:{
        position:'absolute',
        padding:8,
    }
});