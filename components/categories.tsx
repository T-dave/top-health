import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import categories from "@/data/categoriesData";
import { ThemedText } from "./themed-text";
import { useState } from "react";
import { Colors } from "@/constants/theme";

export default function Categories() {
    const [current, setCurrent] = useState(0);
    return(
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            {
                categories.map((category, index)=>{
                    return(
                        <TouchableOpacity 
                        key={index} 
                        style={[styles.category, styles.row, {backgroundColor:index === current ? Colors.primary : "#f8f8fd"}]}
                        onPress={()=>setCurrent(index)}
                        >
                            <ThemedText>{category.emoji} </ThemedText>
                            <ThemedText style={{color:index === current ? "#FFF" : "#b0b0b1"}}>{category.illness}</ThemedText>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginVertical:15
    },
    row:{
        flexDirection:'row',
    },
    category:{
        margin:5,
        padding:10,
        borderRadius:8,
    }
});
