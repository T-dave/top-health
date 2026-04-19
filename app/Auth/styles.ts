import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  span: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
  bottom: {
    alignSelf: "center",
    width: "80%",
    marginTop: 10,
  },
  bottomText: {
    textAlign: "center",
    fontSize: 13,
  },
  button:{
    marginVertical: 10, 
    borderRadius:60 
  },
  downText:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  socials:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    alignSelf:'center',
    marginVertical:10,
    width:"80%"
  },
  social:{
    width:60,
    height:60
  },
  topText: {
    fontSize: 13,
    marginBottom:25,
    textAlign:'left',
    lineHeight:15
  },
});

export default styles;