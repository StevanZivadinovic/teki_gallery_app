import { styles } from "@/style";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MovieListType, MovieType } from "./Types";

const MovieList = ({ data, title }: MovieListType) => {
  let { width, height } = Dimensions.get("window");
  const imageMap: { [key: string]: any } = {
    "1": require("./../assets/images/sv_jovan.jpg"),
    "2": require("./../assets/images/sv_andjeo_cuvar.png"),
    "3": require("./../assets/images/sv_velikomucenik_georgije.jpg"),
  };
  const imageSource = (item: MovieType) =>
    imageMap[item.id] || require("./../assets/images/sv_jovan.jpg");
  const imageName =(item: MovieType)=> item.title.length>14 ? item.title.slice(14):item.title;
  return (
    <View>
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-2xl text-white">{title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Shows it all!");
          }}
        >
          <Text className="text-xl" style={styles.text}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row">
        {data.map((item: MovieType, index: number) => {
          return (
            <TouchableWithoutFeedback key={index}>
                <View>
              <Image
                source={imageSource(item)}
                style={{ width: width * 0.33, height: height * 0.22 }}
              ></Image>
              <Text>{imageName(item)}</Text>
                </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

export default MovieList;
