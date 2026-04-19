import { Stack } from "expo-router";
import { DataProvider } from "@/constants/data-context/data-provider";

export default function AuthLayout(){
    return(
        <DataProvider>
            <Stack>
                <Stack.Screen name="index" options={{headerShown:false}}/>
                <Stack.Screen name="login" options={{headerShown:false}}/>
                <Stack.Screen name="forgot" options={{headerShown:false}}/>
            </Stack>
        </DataProvider>
    )
}