import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

interface InputProps{
    label:string;
    placeholder:string;
    password?:boolean;
}
export default function Input({label, placeholder, password}:InputProps){
    const [secured, setSecured] = useState<boolean>(true);
    const togglePassword =()=>{
        setSecured(!secured);
    }
    return(
        <View style={{marginBottom:20}}>
            <ThemedText type="defaultSemiBold">{label}</ThemedText>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor={Colors.inputText} 
                secureTextEntry={secured}
                />
                {
                    password &&
                    <TouchableOpacity onPress={togglePassword} style={{padding:8}}>
                        <MaterialIcons name={secured ? "visibility" : "visibility-off"} size={20} color={Colors.primary}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputView:{
        backgroundColor:Colors.input,
        borderRadius:10,
        padding:5,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    input:{
        color:Colors.inputText,
        fontSize:15,
        flex:1,
    }
});