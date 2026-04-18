import { Image, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import PatternView from '@/components/pattern-view';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import OnboardBottomView from '@/components/onboard-bottom-view';
import onboardData from '@/data/onboard-data';
import { useRef, useState } from 'react';
import { router } from 'expo-router';

const { width } = Dimensions.get("window");
export default function ModalScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  // const { isLoading, setIsLoading } = useHook();
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < onboardData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };
  const finishOnboarding = async () => {
    // setIsLoading(true);
    try {
      // await AsyncStorage.setItem("onboardingSeen", "true");
      // setIsLoading(false);
      router.navigate("/(tabs)");
    } catch (e) {
      // setIsLoading(false);
      console.error(e);
    }
  };
  return (
    <View style={{flex:1}}>
      <PatternView style={styles.container} height={"70%"}>
        <FlatList
        data={onboardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        ref={flatListRef}
        renderItem={({ item }) => <Image source={item.image} style={[styles.image, {left:item.left}]} resizeMode='contain'/>}
        />
      </PatternView>
      <View style={styles.bottom}>
        
        <OnboardBottomView 
        title={onboardData[currentIndex].title}
        description={onboardData[currentIndex].description}
        currentIndex={currentIndex}
        buttonPress={scrollToNext}
        height={"36%"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    
  },
  image:{
    height:"90%",
    width,
    alignSelf:'flex-end'
  },
  bottom:{
    flex:1,
    height:'100%',
    position:'absolute',
    alignItems:'flex-end',
    justifyContent:'flex-end'
  }
});
