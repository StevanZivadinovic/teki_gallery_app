import { Header } from "@/components/Header";
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MovieType, RootStackParamList, ScreenNavigationPropType } from "@/components/Types";
import MovieList from "@/components/MovieList";
import Loading from "@/components/Loading";
import usePersonDetails from "@/hooks/usePersonData";
import { image500 } from "@/Api/moviesApi";
import { useNavigation } from "expo-router";

const Person = () => {
  const { width, height } = Dimensions.get("window");
const navigation = useNavigation<ScreenNavigationPropType>();
  const route = useRoute<RouteProp<RootStackParamList, "Person">>();
  const person = route.params;
  const {personDetailsByID,personMoviesByID, loading }=usePersonDetails(person.id);
  const os = Platform.OS;
const imageSource =(item: any) => {
  return item?.profile_path ? {uri:image500(item?.profile_path)} : require('./../../assets/images/avatar.png')
};
const gender = personDetailsByID?.gender === 2 ? 'Male' : personDetailsByID?.gender === 1 ? 'Female' : 'unknown'
  return (
    loading ? <Loading/> : <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="py-[-1rem]">
      <Header />
      </View>
      <View
        className="flex-row justify-center mt-8"
      >
        <View
          style={{
            shadowColor: 'white',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 40,
            elevation: 10, 
          }}
          className="overflow-hidden rounded-full h-72 w-72"
        >
          <Image
            source={imageSource(personDetailsByID)}
            style={{
              width: width * 0.8,
              height: height * 0.4,
            }}
            className="rounded-full flex self-center mt-1"
          />
        </View>
      </View>
      <View className="flex justify-center items-center mx-6">
        <Text className="text-white text-3xl mt-6 font-bold">{personDetailsByID?.name}</Text>
        <Text className="text-neutral-300 text-md mt-2 opacity-50">{personDetailsByID?.place_of_birth}</Text>
        <View className="flex-row bg-neutral-700 py-4 px-2 mt-6 rounded-full">
          <View className=" border-r-2 border-neutral-300">
            <Text className="px-3 text-center text-neutral-300 font-bold">Gender</Text>
            <Text className="px-3 text-center text-neutral-400">{gender}</Text>
          </View>
          <View className="border-r-2 border-neutral-300">
            <Text className="px-3 text-center text-neutral-300 font-bold">Birthday</Text>
            <Text className="px-3 text-center text-neutral-400">{personDetailsByID?.birthday}</Text>
          </View>
          <View className="border-r-2 border-neutral-300">
            <Text className="px-3 text-center text-neutral-300 font-bold">Known for</Text>
            <Text className="px-3 text-center text-neutral-400">{personDetailsByID?.known_for_department}</Text>
          </View>
          <View className="">
            <Text className="px-3 text-center text-neutral-300 font-bold">Popularity</Text>
            <Text className="px-3 text-center text-neutral-400">{personDetailsByID?.popularity}</Text>
          </View>
        </View>
      </View>
      <SafeAreaView>
        <View className={`${os==='android' ? 'mx-6':''}`}>
          <Text className="text-white text-xl mt-6">Biography</Text>
          <Text className="my-5 text-neutral-400">{personDetailsByID?.biography}</Text>
        </View>
        <MovieList navigation={navigation} data={personMoviesByID?.cast as MovieType[]} showSeeAll={false} title="Filmography"/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Person;
