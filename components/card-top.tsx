import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

export default function CardTop({title}:{title:string}){
    return(
        <View style={styles.container}>
            <ThemedText type="subtitle">{title}</ThemedText>
            <TouchableOpacity>
                <ThemedText style={{fontSize:14}} lightColor={Colors.primary}>See all</ThemedText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    }
});