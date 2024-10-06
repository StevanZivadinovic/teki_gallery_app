import { imageMap, similar } from "@/assets/fetchedImages";
import Loading from "@/components/Loading";
import { useNavigation } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
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
import {debounce} from 'lodash'
import { XMarkIcon } from "react-native-heroicons/outline";
import { fetchSearchedFilmByName, image500 } from "@/Api/moviesApi";
import { MovieType, RootStackParamList } from "@/components/Types";

const SearchScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  const os = Platform.OS;
  let {height, width} = useWindowDimensions()
  const [searchedMovies, setSearchedMovies] = useState<MovieType[]>();
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(false)
  }, [])

  const handleSearch = (value: any)=>{
    setLoading(true)
    if(value && value.length>2){
      fetchSearchedFilmByName(value)
      .then((data)=>{
        setSearchedMovies(data)
        setLoading(false)
        
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false)
      })
    }else{
      setSearchedMovies([])
      setLoading(false)
    }
  }
  const handleTextDebounce = useCallback(debounce(handleSearch,400),[])
  const imageSource =(item: any) => {
    return item?.backdrop_path ? {uri:image500(item?.backdrop_path)} : require('./../assets/images/avatar.png')
  };
  return (
      <ScrollView className={`bg-neutral-800 flex-1`}>
    <SafeAreaView>
      <View
        className={`flex-row mb-3 justify-between items-center border border-neutral-400 w-[90%] mx-auto rounded-full ${
          os === "android" ? "mt-8" : ""
        }`}
      >
        <TextInput
          onChangeText={handleTextDebounce}
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
      {loading ? <Loading/> : <View className="mx-6">
        <Text className="text-white">Results ({searchedMovies?.length})</Text>
        <View className="flex-row flex-wrap justify-between">
        {searchedMovies && searchedMovies.length>0 ?
          searchedMovies?.map((a,i)=>{
          return(
            <TouchableOpacity className="mt-6" key={i} onPress={()=>{navigation.navigate('MovieDetails', a)}}>
            <Image
            source={imageSource(a)}
            className="rounded-lg"
            style={{
              height:height*0.3,
              width:width*0.40
            }}
            />
            <Text className="text-neutral-200 mt-1">{a.title.length > 14 ? a.title.slice(0,20) + '...' : a.title}</Text>
            </TouchableOpacity>
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
        }
      
    </SafeAreaView>
      </ScrollView>
  );
};

export default SearchScreen;

