import Loading from "@/components/Loading";
import { useNavigation } from "expo-router";
import { SetStateAction, useCallback, useEffect, useState } from "react";
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
import  {fetchSearchedFilmByName} from '@/Api/moviesApi';
import  {image500}  from "@/Api/moviesApi";

import { MovieType, RootStackParamList } from "@/components/Types";
import { useTranslation } from "react-i18next";

const SearchScreen = () => {
  const {t}=useTranslation()
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
      .then((data: SetStateAction<MovieType[] | undefined>)=>{
        setSearchedMovies(data)
        setLoading(false)
        
      })
      .catch((err: any)=>{
        console.log(err);
        setLoading(false)
      })
    }else{
      setSearchedMovies([])
      setLoading(false)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleTextDebounce = useCallback(debounce(handleSearch,400),[])
  const imageSource =(item: any) => {
    return item?.backdrop_path ? {uri:image500(item?.backdrop_path)} : require('./../../assets/images/avatar.png')
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
          placeholder={t("SearchMovie")}
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
        <Text className="text-white">{t('Results')} ({searchedMovies?.length})</Text>
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
          <Text className="text-neutral-200 mt-1 text-xl text-center">{t("NoResultMessage")}...</Text>
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

