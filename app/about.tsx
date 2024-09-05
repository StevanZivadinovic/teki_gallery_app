import { View, Text, StyleSheet } from 'react-native';


export default function About() {
  return (
   <View style={style.mainContainer}>
    <Text>About</Text>
   </View>
  );
}
const style = StyleSheet.create({
  mainContainer:{
    marginTop:20
  }
})
