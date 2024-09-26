import { Header } from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/components/Types";
import MovieList from "@/components/MovieList";
import { similar } from "@/assets/fetchedImages";
import Loading from "@/components/Loading";

const Person = () => {
  const { width, height } = Dimensions.get("window");

  const route = useRoute<RouteProp<RootStackParamList, "Person">>();
  const person = route.params;
  const os = Platform.OS
  const filmographyData = Array.isArray(person?.filmography) ? person.filmography : similar
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    loading ? <Loading/> : <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <Header />
      <View
        className="flex-row justify-center mt-8"
      >
        <View
          style={{
            shadowColor: 'white',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 40,
            elevation: 10, // Elevation for Android
          }}
          className="overflow-hidden rounded-full h-72 w-72"
        >
          <Image
            source={person?.src}
            style={{
              width: width * 0.8,
              height: height * 0.4,
            }}
            className="rounded-full"
          />
        </View>
      </View>
      <View className="flex justify-center items-center mx-6">
        <Text className="text-white text-3xl mt-6 font-bold">{person.name}</Text>
        <Text className="text-neutral-300 text-md mt-2 opacity-50">{person.adress}</Text>
        <View className="flex-row bg-neutral-700 py-4 px-2 mt-6 rounded-full">
          <View className=" border-r-2 border-neutral-300">
            <Text className="px-3 text-center text-neutral-300 font-bold">Gender</Text>
            <Text className="px-3 text-center text-neutral-400">{person.gender}</Text>
          </View>
          <View className="border-r-2 border-neutral-300">
            <Text className="px-3 text-center text-neutral-300 font-bold">Birthday</Text>
            <Text className="px-3 text-center text-neutral-400">{person.birthday}</Text>
          </View>
          <View className="border-r-2 border-neutral-300">
            <Text className="px-3 text-center text-neutral-300 font-bold">Merried</Text>
            <Text className="px-3 text-center text-neutral-400">{person.married}</Text>
          </View>
          <View className="">
            <Text className="px-3 text-center text-neutral-300 font-bold">Popularity</Text>
            <Text className="px-3 text-center text-neutral-400">{person.popularity}</Text>
          </View>
        </View>
      </View>
      <SafeAreaView>
        <View className={`${os=='android' ? 'mx-6':''}`}>
          <Text className="text-white text-xl mt-6">Biography</Text>
          <Text className="my-5 text-neutral-400">{person.biography}</Text>
        </View>
        <MovieList data={filmographyData} showSeeAll={false} title="Filmography"/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Person;
