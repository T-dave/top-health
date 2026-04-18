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
  }
});

export default styles;