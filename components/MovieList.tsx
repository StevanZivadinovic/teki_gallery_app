import { styles } from "@/style";
import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MovieListType, MovieType, ScreenNavigationPropType } from "./Types";
import { router } from "expo-router";
import { image500 } from "@/Api/moviesApi";
import { useNavigation } from "@react-navigation/native";

const MovieList = ({ data, title, showSeeAll }: MovieListType) => {
  let { width, height } = Dimensions.get("window");
  const navigation = useNavigation<ScreenNavigationPropType>();
  const imageSource =(item: any) => {
    return item?.backdrop_path ? {uri:image500(item?.backdrop_path)} : require('./../assets/images/no_movie.png')
  };
  const imageName =(item: MovieType)=> item.title.length>14 ? item.title.slice(0,14) + '..':item.title;

  const handleClick = (item: any)=>{
navigation.navigate('MovieDetails', item);
  }
  return (
    <View>
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white mb-5">{title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Shows it all!");
          }}
        >
         {showSeeAll && <Text className="text-lg" style={styles.text}>
            See all
          </Text>}
        </TouchableOpacity>
      </View>
      <View className="flex-row mx-6"> 
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{justifyContent:'space-between'}}
        >
        {data?.map((item: any, index: number) => {
          return (
            <TouchableWithoutFeedback key={index} onPress={()=>{handleClick(item)}}>
                <View>
              <Image
                source={imageSource(item)}
                style={{ width: width * 0.25, height: height * 0.15 }}
                className="rounded-xl mr-2"
              ></Image>
              <Text className="text-center text-neutral-300">{imageName(item)}</Text>
                </View>
            </TouchableWithoutFeedback>
          );
        })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MovieList;
