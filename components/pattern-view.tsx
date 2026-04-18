import { StyleSheet, View, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

interface PatternProps extends ViewProps{
    background?:string;
    height?:any;
}
export default function PatternView({children, background, style, height}:PatternProps) {
  return (
    <ThemedView style={[{height, backgroundColor: background || Colors.primary}]}>
     <View style={styles.patternContainer}>
      {Array.from({ length: 20 }).map((_, i) => (
         <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.10)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            key={i} style={styles.line}
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
  transform: [{ rotate: '-45deg' }],
},

line: {
  height:80,
  marginVertical: 60,
}
});
