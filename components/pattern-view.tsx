import { StyleSheet, View, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

interface PatternProps extends ViewProps{
    background?:string;
    height?:any;
    small?:boolean;
}
export default function PatternView({children, background, style, height, small=false}:PatternProps) {
  return (
    <ThemedView style={[{height, backgroundColor: background || Colors.primary}]}>
     <View style={[styles.patternContainer, { transform: [{ rotate: small?'-47deg':'-45deg' }] }]}>
      {Array.from({ length: 20 }).map((_, i) => (
         <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.10)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            key={i} style={[{ height:small?60:80, marginVertical:small?40:60 }]}
          />
      ))}
    </View>
    <View style={style}>{children}</View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  patternContainer: {
  position: 'absolute',
  width: '300%',
  height: '50%',
  alignSelf:'flex-end',
},

});
