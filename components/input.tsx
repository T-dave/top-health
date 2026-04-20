import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dispatch, SetStateAction, useState } from "react";
import { router } from "expo-router";

interface InputProps{
    label:string;
    placeholder:string;
    password?:boolean;
    error: string;
    value:string;
    setValue:Dispatch<SetStateAction<string>>;
    setError:Dispatch<SetStateAction<string>>;
    handleError:()=>void;
    number?:boolean;
    date?:boolean;
    forgot?: boolean;
}
export default function Input({label, placeholder, password, error, value, setValue, setError, handleError, number, date, forgot}:InputProps){
    const [secured, setSecured] = useState<boolean>(true);
    const togglePassword =()=>{
        setSecured(!secured);
    }
    const handleText=(text:string)=>{
        if(!date){
            setValue(text);
        }else{
            const currentIndex = text.length;
            console.log(text.length > value.length)
            if((currentIndex === 2 || currentIndex === 5) && text.length > value.length){
                setValue(text + "/")
            }else{
                setValue(text)
            }
        }
    }
    return(
        <View style={{marginBottom:16}}>
            <ThemedText type="defaultSemiBold" style={{fontSize:18}}>{label}</ThemedText>
            <View style={[styles.inputView, {borderColor:error.trim().length>0 ?"red":"transparent"}]}>
                <TextInput 
                style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor={Colors.inputText} 
                secureTextEntry={secured && password}
                onFocus={()=>setError("")}
                onChangeText={(text)=>handleText(text)}
                value={value}
                onBlur={handleError}
                keyboardType={number || date ? "phone-pad" : "default"}
                maxLength={date ? 10 : 1000}
                />
                {
                    password &&
                    <TouchableOpacity onPress={togglePassword} style={{padding:8}}>
                        <MaterialIcons name={secured ? "visibility" : "visibility-off"} size={20} color={Colors.primary}/>
                    </TouchableOpacity>
                }
            </View>
            {
                error.trim() &&
                <ThemedText style={styles.error}>{error}</ThemedText>
            }
            {
                forgot &&
                <TouchableOpacity onPress={()=>router.navigate('/Auth/forgot')}>
                    <ThemedText style={[styles.error, {color:Colors.primary}]}>Forgot Password</ThemedText>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputView:{
        backgroundColor:Colors.input,
        borderRadius:10,
        padding:5,
        marginTop:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
    },
    input:{
        color:Colors.inputText,
        fontSize:15,
        flex:1,
    },
    error:{
        color:'red',
        alignSelf:'flex-end',
        fontSize:13
    }
});