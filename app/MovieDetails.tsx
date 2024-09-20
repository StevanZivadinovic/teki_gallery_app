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
import { useState } from "react";
import { RootStackParamList } from "@/components/Types";
import { LinearGradient } from "expo-linear-gradient";
import { imageMap, similar, topCastImageMap } from "@/assets/fetchedImages";
import MovieList from "@/components/MovieList";
import { useRouter } from "expo-router";

export default function MovieDetails() {
  const { width, height } = Dimensions.get("window");
  const route = useRoute<RouteProp<RootStackParamList, "MovieDetails">>();
  const router = useRouter();
  const item = route.params;
  const insets = useSafeAreaInsets();
  const [favorite, setFavorite] = useState(false);


  const imageSource =
    imageMap[item.id] || require("./../assets/images/sv_jovan.jpg");

  return (
    <ScrollView
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
          source={imageSource}
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
            {item.title}
          </Text>
        </LinearGradient>
      </View>
      <View className="mx-6">
        <Text className="text-neutral-400 mt-2 text-center">
          Released &#183; 2020 &#183; 170min{" "}
        </Text>
        <Text className="text-neutral-400 mt-2 text-center">
          Action &#183; Thrill &#183; Comedy{" "}
        </Text>

        <Text className="text-neutral-400 mt-2 text-justify">
          Perhaps far exposed age effects. Now distrusts you her delivered
          applauded affection out sincerity. As tolerably recommend shameless
          unfeeling he objection consisted. She although cheerful perceive
          screened throwing met not eat distance. Viewing hastily or written
          dearest elderly up weather it as. So direction so sweetness or
          extremity at daughters. Provided put unpacked now but bringing.
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
      {Object.entries(topCastImageMap)?.map(([key, image]) => (
        
        <TouchableOpacity key={key} onPress={() => { 
          
          router.push({
            pathname: '/Person',
            params: { src: image.src,
        name: image.name,
        adress: image.adress,
        gender: image.gender,
        birthday: image.birthday,
        married: image.married,
        popularity: image.popularity,
        biography: image.biography,
        filmography: []}
          }) 
        }}>
          <View className="flex align-middle text-center self-center justify-center">
        <Image
          
          source={image?.src}
          style={{
            width: width * 0.2,
            height: height * 0.1,
          }}
          className="rounded-full mr-3"
        />
        <Text className="text-neutral-300 text-center text-xs">{image.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
        </ScrollView>
      </View>
      <MovieList data={similar} title='Similar Movies' showSeeAll={false}/>
      </SafeAreaView>
    </ScrollView>
  );
}
