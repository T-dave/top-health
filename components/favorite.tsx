import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DoctorCard1 } from "./doctor-card";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";
import CardTop from "./card-top";

export default function Favorite(){
    return(
        <View style={styles.container}>
            <CardTop title="Favorite Doctor"/>
            <View style={styles.row}>
                <DoctorCard1 
                    style={{flex:1}}
                    name="Dr. Esther" 
                    occupation="Dentist" 
                    rating={4.5} 
                    image="https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww"
                 />
                 <View style={{padding:10}}/>
                <DoctorCard1 
                    style={{flex:1}}
                    name="Dr. Warren" 
                    occupation="Physician" 
                    rating={4.5} 
                    image="https://media.istockphoto.com/id/2216587796/photo/mature-woman-doctor-and-tablet-for-xray-support-or-conversation-with-cardiology-checkup-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=AeTOXNAOjQDTIJnUD6ALqpJBLemevYaIV9wNuVZjLF4="
                 />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});