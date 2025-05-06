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
} from "react-native-safe-area-context";
import { Key, useEffect, useState } from "react";
import { MovieType, RootStackParamList, ScreenNavigationPropType } from "@/components/Types";
import { LinearGradient } from "expo-linear-gradient";
import MovieList from "@/components/MovieList";
import { useNavigation, useRouter } from "expo-router";
import Loading from "@/components/Loading";
import { image500 } from "@/Api/moviesApi";
import useMoviesDetails from "@/hooks/useMoviesDetails";
import { Header } from "@/components/Header";

export default function MovieDetails() {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation<ScreenNavigationPropType>();
  const route = useRoute<RouteProp<RootStackParamList, "MovieDetails">>();
  const router = useRouter();
  const item = route.params;
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const { moviesDetailsByID, moviesCreditsByID, similarMoviesByID }: any =
    useMoviesDetails(item?.id);
  const imageSource = (item: any) => {
    return item?.backdrop_path
      ? { uri: image500(item?.backdrop_path) }
      : require("./../assets/images/no_movie.png");
  };

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        className="flex-1 bg-neutral-900"
      >
        <View className="py-[-1rem] absolute">
      <Header />
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
            Released &#183; {moviesDetailsByID?.release_date.slice(0, 4)} &#183;{" "}
            {moviesDetailsByID?.runtime}min{" "}
          </Text>
          <Text className="text-neutral-400 mt-2 text-center">
            {moviesDetailsByID?.genres?.map((a: any, i: any) => {
              return (
                <Text key={i}>
                  {a?.name} {i < moviesDetailsByID.genres.length - 1 ? "·" : ""}{" "}
                </Text>
              );
            })}
          </Text>

          <Text className="text-neutral-400 mt-2 text-justify">
            {moviesDetailsByID?.overview}
          </Text>
        </View>

        <View className="mx-6">
          <Text className="text-xl text-white mb-2">Top Cast</Text>
        </View>
        <View className="flex-row mb-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {moviesCreditsByID?.cast?.map(
              (a: any, i: Key | null | undefined) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    router.push({
                      pathname: "/Person",
                      params: {
                        id: a.id,
                      },
                    });
                  }}
                >
                  <View className="flex align-middle text-center self-center justify-center">
                    <Image
                      source={{
                        uri: a?.profile_path && image500(a?.profile_path),
                      }}
                      style={{
                        width: width * 0.2,
                        height: height * 0.1,
                      }}
                      className="rounded-full mr-3"
                    />
                    <Text className="text-neutral-300 text-center text-xs">
                      {a?.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>
        <MovieList navigation={navigation} data={similarMoviesByID as MovieType[]} showSeeAll={false} title="Similar movies"/>
      </ScrollView>
    </SafeAreaView>
  );
}
