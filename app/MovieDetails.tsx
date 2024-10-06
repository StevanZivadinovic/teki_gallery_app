import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styles, theme } from "@/style";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { Key, useEffect, useState } from "react";
import { RootStackParamList } from "@/components/Types";
import { LinearGradient } from "expo-linear-gradient";
import { imageMap, similar, topCastImageMap } from "@/assets/fetchedImages";
import MovieList from "@/components/MovieList";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
import { image500 } from "@/Api/moviesApi";
import useMovies from "@/hooks/useMovies";
import useMoviesDetails from "@/hooks/useMoviesDetails";

export default function MovieDetails() {
  const { width, height } = Dimensions.get("window");
  const route = useRoute<RouteProp<RootStackParamList, "MovieDetails">>();
  const router = useRouter();
  const item = route.params;
  const insets = useSafeAreaInsets();
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  const {moviesDetailsByID,moviesCreditsByID, similarMoviesByID}:any = useMoviesDetails(item?.id)
  const imageSource =(item: any) => {
    return item?.backdrop_path ? {uri:image500(item?.backdrop_path)} : require('./../assets/images/no_movie.png')
  };

  return (
    loading ? <Loading/> :  <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View
        style={{ flex: 1, marginTop: insets.top + 15 }}
        className="z-20 w-full flex-row justify-between items-center px-4 absolute"
      >
        <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=>{router.back()}}>
          <ChevronLeftIcon
            size={28}
            strokeWidth={2.5}
            color="white"
          ></ChevronLeftIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          className="rounded-xl p-1"
        >
          <HeartIcon
            size={28}
            fill={!favorite ? "white" : theme.background}
          ></HeartIcon>
        </TouchableOpacity>
      </View>

      <View className="">
        <Image
          source={imageSource(item)}
          style={{
            width: width,
            height: height * 0.55,
            resizeMode: "cover",
            top: 0,
            left: 0,
          }}
        />
        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,0.8)"]}
          style={{ width, height: height * 0.4 }}
          className="absolute bottom-0 flex justify-end"
        >
          <Text className="text-3xl font-bold text-white text-center">
            {moviesDetailsByID?.title}
          </Text>
        </LinearGradient>
      </View>
      <View className="mx-6">
        <Text className="text-neutral-400 mt-2 text-center">
          Released &#183; {moviesDetailsByID?.release_date.slice(0,4)} &#183; {moviesDetailsByID?.runtime}min{" "}
        </Text>
        <Text className="text-neutral-400 mt-2 text-center">
          {moviesDetailsByID?.genres?.map((a: any,i: any)=>{
            
            return(
              
             <Text key={i}>{a?.name}  {i < moviesDetailsByID.genres.length - 1 ? '·' : ''} {" "}</Text> 
            )
          })}
        </Text>

        <Text className="text-neutral-400 mt-2 text-justify">
          {moviesDetailsByID?.overview}
        </Text>
      </View>
      <SafeAreaView>
      <View className="mx-6">
        <Text className="text-xl text-white mb-2">Top Cast</Text>
      </View>
      <View className="flex-row mb-6">
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:24}}
        >
      {moviesCreditsByID?.cast?.map((a: any,i: Key | null | undefined) => (
        
        <TouchableOpacity key={i} onPress={() => { 
          
          router.push({
            pathname: '/Person',
            params: { 
              id:a.id
            }
          }) 
        }}>
          <View className="flex align-middle text-center self-center justify-center">
        <Image
          
          source={{uri:a?.profile_path && image500(a?.profile_path)}}
          style={{
            width: width * 0.2,
            height: height * 0.1,
          }}
          className="rounded-full mr-3"
        />
        <Text className="text-neutral-300 text-center text-xs">{a?.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
        </ScrollView>
      </View>
      <MovieList data={similarMoviesByID} title='Similar Movies' showSeeAll={false}/>
      </SafeAreaView>
    </ScrollView>
  );
}
