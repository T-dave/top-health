import { StyleSheet, View, ViewProps } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import Button from '@/components/custom-buttom';
import Paginator from './paginator';
import onboardData from '@/data/onboard-data';

interface BottomProps extends ViewProps{
    height?:any;
    title:string;
    description:string;
    currentIndex: number;
    buttonPress: ()=>void;
}
export default function OnboardBottomView({height, style, title, description, currentIndex, buttonPress}:BottomProps) {
     const showButtonText=()=>{
        if(currentIndex < onboardData.length - 1) return "Next"
        else return "Get Started"
     }
  return (
    <ThemedView style={[styles.container, {height}, style]}>
        <View>
            <ThemedText type='title' style={{textAlign:'center'}}>{title}</ThemedText>
            <ThemedText style={styles.description}>{description}</ThemedText>
            
        </View>
        <View>
            <Paginator data={onboardData} currentIndex={currentIndex} />
            <Button text={showButtonText()} loading={false} onPress={buttonPress}/>
        </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    paddingTop:33,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    justifyContent:'space-between'
  },
  description:{
    textAlign:'center',
     marginTop:15,
    }
});
