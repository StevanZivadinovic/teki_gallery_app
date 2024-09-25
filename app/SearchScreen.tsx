import { imageMap, similar } from "@/assets/fetchedImages";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import { XMarkIcon } from "react-native-heroicons/outline";

const SearchScreen = () => {
  const navigation = useNavigation();
  const os = Platform.OS;
  let {height, width} = useWindowDimensions()
  const [searchedMovies, setSearchedMovies] = useState(similar)
  
  
  return (
      <ScrollView className={`bg-neutral-800 flex-1`}>
    <SafeAreaView>
      <View
        className={`flex-row mb-3 justify-between items-center border border-neutral-400 w-[90%] mx-auto rounded-full ${
          os === "android" ? "mt-8" : ""
        }`}
      >
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"white"}
          className="text-white pl-6 tracking-wider text-left w-[80%] h-12" 
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="bg-neutral-700 p-4 rounded-full m-1"
        >
          <XMarkIcon size={25} color={"white"} />
        </TouchableOpacity>
      </View>
      <View className="mx-6">
        <Text className="text-white">Results ({similar.length})</Text>
        <View className="flex-row flex-wrap justify-between">
        {searchedMovies.length>0 ?
          searchedMovies?.map((a,i)=>{
          return(
            <View className="mt-6" key={i}>
            <Image
            source={imageMap[i+1]}
            className="rounded-lg"
            style={{
              height:height*0.3,
              width:width*0.40
            }}
            />
            <Text className="text-neutral-200 mt-1">{a.title.length > 14 ? a.title.slice(14) + '...' : a.title}</Text>
            </View>
          )
          }) : 
          <View className="mt-20 self-center mx-auto">
          <Image
          source={{ uri: 'https://img.icons8.com/nolan/64/movie-projector.png' }}
          className="rounded-lg"
          style={{
            height:height*0.3,
            width:width*0.50
          }}
          />
          <Text className="text-neutral-200 mt-1 text-xl text-center">There is no results...</Text>
       </View>
        
        }
        </View>
      </View>
    </SafeAreaView>
      </ScrollView>
  );
};

export default SearchScreen;
