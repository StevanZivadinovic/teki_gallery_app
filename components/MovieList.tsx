import { styles } from "@/style";
import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MovieListType, MovieType } from "./Types";
import { imageMap } from "@/assets/fetchedImages";
import { router } from "expo-router";

const MovieList = ({ data, title, showSeeAll }: MovieListType) => {
  let { width, height } = Dimensions.get("window");
  const imageSource = (item: MovieType) =>
    imageMap[item.id] || require("./../assets/images/sv_jovan.jpg");
  const imageName =(item: MovieType)=> item.title.length>14 ? item.title.slice(14):item.title;
  return (
    <View>
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white">{title}</Text>
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
        contentContainerStyle={{justifyContent:'space-between', width:width}}
        >
        {data.map((item: MovieType, index: number) => {
          return (
            <TouchableWithoutFeedback key={index} onPress={()=>{
              router.push('./')
            }}>
                <View>
              <Image
                source={imageSource(item)}
                style={{ width: width * 0.25, height: height * 0.15 }}
                className="rounded-xl"
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
