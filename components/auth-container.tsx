import Top from "@/components/top";
import { StyleSheet, ViewProps, ScrollView, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "./themed-view";
import { Colors } from "@/constants/theme";

interface AuthContainerProps extends ViewProps{
    title: string;
}
export default function AuthContainer({title, children, style}:AuthContainerProps){
    const colorScheme = useColorScheme();
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: Colors[colorScheme ?? 'light'].background}]}>
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                <Top title={title}/>
                <ThemedView style={[style]}>
                    {children}
                </ThemedView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});