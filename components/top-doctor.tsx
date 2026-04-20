import { StyleSheet, View } from "react-native";
import CardTop from "./card-top";
import { DoctorCard2 } from "./doctor-card";

export default function TopDoctor(){
    return(
        <View style={styles.container}>
            <CardTop title="Top Doctor"/>
            <DoctorCard2
            name="Dr. Jenny Wilson"
            occupation="Newrologist | Vcare Clinic"
            review={332}
            rating="5.0"
            image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10
    }
});