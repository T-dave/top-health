import { Image } from 'expo-image';
import { StyleSheet, TextInput, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';

import PatternView from '@/components/pattern-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useData } from '@/hooks/use-data';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const inputColor = "rgba(100, 100, 224)"
export default function Top() {
  // const { data } = useData();
  
  return (
      <PatternView small>
        <SafeAreaView style={styles.container} edges={['top']}>
          <View style={[styles.row, styles.top]}>
            <View style={styles.row}>
              <Image
              source={{ uri:"https://scontent.fiba2-1.fna.fbcdn.net/v/t39.30808-6/320799673_5810517019035680_8329422440832000911_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHeA03W1fI6tY8HlDk3Blhpv4WBxte9VK2_hYHG171UrRUQ5hjdcEkqIKQrKlZuZtmXyVj8hKYOWw2Y2SQbYYmq&_nc_ohc=MBkYo_rYDmcQ7kNvwE84w2s&_nc_oc=AdopOfSWogNulIDJDIaQJBcGHzimS7W1jm2cwgIsQv9K5vfqDa7UnhAg9xz_UO98KEQ&_nc_zt=23&_nc_ht=scontent.fiba2-1.fna&_nc_gid=npyvUsE4D3V1Tg7F_YLBcg&_nc_ss=7a3a8&oh=00_Af0Dqz3otj6e69h5XBcvAXBjAmfIz1SPhectA3G4cpcHgg&oe=69EB3759" }}
              style={styles.profilePic}
              />
              <View>
                <View style={styles.row}>
                  <ThemedText style={{color:'#FFF', fontSize:13}}>Hello, Welcome</ThemedText>
                  <HelloWave />
                </View>
                <ThemedText type='subtitle' style={{color:'#FFF'}}>David Omotara</ThemedText>
              </View>
            </View>
            <Image source={require('../assets/images/noti.png')} style={styles.noti}/>
          </View>
          <View style={[styles.row, styles.inputView]}>
            <MaterialIcons name='search' color={inputColor} size={30}/>
            <TextInput placeholderTextColor={inputColor} placeholder='Search Doctor' style={styles.input}/>
          </View>
        </SafeAreaView>
      </PatternView>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  top:{
    justifyContent:'space-between',
  },
  profilePic:{
    width:45,
    height:45,
    borderRadius:50,
    marginRight:15
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  noti:{
    width:20,
    height:20
  },
  inputView:{
    borderWidth:2,
    borderColor:inputColor,
    borderRadius:13,
    marginTop:20
  },
  input:{
    flex:1,
    color:inputColor,
    fontSize:18
  }
});
