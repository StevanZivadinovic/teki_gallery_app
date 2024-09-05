import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
   <View style={style.mainContainer}>
    <Text>Moj prvi react native text1</Text>
    <Link style={style.links} href={'/About'}>Go to About page</Link>
    <Link style={style.links} href={'/reviewDetails'}>Go to review details page</Link>
   </View>
  );
}

const style = StyleSheet.create({
  mainContainer:{
    marginTop:20
  },
  links:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'#7fff00'

  }
})



