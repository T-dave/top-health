import { Image } from 'expo-image';
import { StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


import Top from '../../components/home-top';
import Categories from '@/components/categories';
import { DoctorCard1 } from '@/components/doctor-card';
import Favorite from '@/components/favorite';
import TopDoctor from '@/components/top-doctor';
export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Top/>
      <View>
        <Categories/>
      </View>
      <Favorite/>
      <TopDoctor/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
});
