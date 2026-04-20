import { StyleSheet, View } from "react-native";
import CardTop from "./card-top";

export default function TopDoctor(){
    return(
        <View style={styles.container}>
            <CardTop title="Top Doctor"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10
    }
});