import Top from "@/components/top";
import { StyleSheet, ViewProps, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "./themed-view";

interface AuthContainerProps extends ViewProps{
    title: string;
}
export default function AuthContainer({title, children, style}:AuthContainerProps){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <ThemedView>
                    <Top title={title}/>
                </ThemedView>
                <ThemedView style={[style]}>
                    {children}
                </ThemedView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});